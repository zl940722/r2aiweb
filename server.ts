const express = require("express");
const next = require("next");
const proxy = require("http-proxy-middleware");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const axios = require('axios');

const messageService = process.env.MESSAGE_SERVICE || "http://localhost:8088";
const authService = process.env.AUTH_SERVICE || "http://localhost:8088";
const payService = process.env.PAY_SERVICE || "http://192.168.0.105:8090";
const payBff = process.env.PAY_BFF || "http://localhost:8091";
const strapiService = process.env.STRAPI_URL || "http://localhost:1337";
const basicPrice = process.env.BASIC_PRICE || 199.98;
const basicPriceYear = process.env.BASIC_PRICE_YEAR || 2159.78;
const essentialPrice = process.env.ESSENTIAL_PRICE || 1999.98;
const essentialPriceYear = process.env.ESSENTIAL_PRICE_YEAR || 21599.78;
const PRODUCT_URL = process.env.PRODUCT_URL || 'http://localhost:7777';

const proxies = (target, org, url) => {
  return proxy({
    target: target,
    changeOrigin: true,
    pathRewrite: {
      [org]: url
    },
    onProxyReq(proxyReq, req) {
      req.headers.cookie && proxyReq.setHeader("Cookie", req.headers.cookie);
    },
    onProxyRes(proxyRes, req, res) {
      Object.keys(proxyRes.headers).forEach(function (key) {
        res.append(key, proxyRes.headers[key]);
      });
    }
  });
};

const authServiceProxy = (originUri, uri) => proxies(authService, originUri, uri);

const strapiServiceProxy = (originUri, uri) => proxies(strapiService, originUri, uri);

const payServiceProxy = (originUri, uri) => proxies(payService, originUri, uri);

const payBffProxy = (originUri, uri) => proxies(payBff, originUri, uri);

const messageServiceProxy = (originUri, uri) => proxies(messageService, originUri, uri);

const requireLoginMiddleware = async (req, res, next) => {
  const user = await getUser(req.headers.cookie)
  if (!user || !user.id) {
    console.log(user)
    res.sendStatus(500)
    res.send("please login")
    return
  }
  next()
}

const getUser = (cookie) => {
  return axios
    .get(process.env.AUTH_SERVICE || "http://localhost:8088", {
      headers: {
        cookie,
      }
    }).then(res => res.data)
    .catch(err => {
      console.log(err.message, 'get user error')
      return null
    })
}

app.prepare()
  .then(() => {
    const server = express();

    server.use("/uploads", strapiServiceProxy("/", "/"));
    server.use("/strapi", strapiServiceProxy("/strapi", "/"));
    server.use("/user/sendMail", messageServiceProxy("/user/sendMail", "/mailer/sendMail"));
    server.put("/user/login", authServiceProxy("/user/login", "/"));
    server.delete("/user/logout", authServiceProxy("/user/logout", "/"));
    server.post("/user/forget", authServiceProxy("/user/forget", "/forget"));
    server.use("/user/captcha", authServiceProxy("/user/captcha", "/captcha"));
    server.use("/user/register", payServiceProxy("/user/register", "/user/register"));
    server.use("/active", payServiceProxy("/active", "/user/activeUser"));

    server.use("/user/forgetPassword", payServiceProxy("/user/forgetPassword", "/user/forgetPassword"));

    server.use("/user/resetPassword", payServiceProxy("/user/resetPassword", "/user/resetPassword"));

    server.use("/probation/applyProbation", payServiceProxy("/probation/applyProbation", "/probation/applyProbation"));


    server.use("/alipay/createCharge", payBffProxy("/alipay/createCharge", "/alipay/createCharge"));

    server.use("/alipay/orderQuery", payBffProxy("/alipay/orderQuery", "/alipay/orderQuery"));

    server.use("/unionPay/createCharge", payBffProxy("/unionPay/createCharge", "/unionPay/createCharge"));

    server.use("/unionPay/orderQuery", payBffProxy("/unionPay/orderQuery", "/unionPay/orderQuery"));

    server.use("/wechat/createCharge", payBffProxy("/wechat/createCharge", "/wechat/createCharge"));

    server.use("/wechat/orderQuery", payBffProxy("/wechat/orderQuery", "/wechat/orderQuery"));

    server.post("/user/invoice/queryInvoiceStatus", requireLoginMiddleware, (req, res) => {
      payServiceProxy("/user/invoice/queryInvoiceStatus", "/invoice/queryInvoiceStatus")
    });

    server.get('/user/login',async (req,res)=>{
      const user = await getUser(req.headers.cookie)||{};
      return res.json({
        ...user,
        canLogin:new Date(user.endTime)>new Date()
      })
    });

    server.get("/user/invoices", requireLoginMiddleware, async (req, res) => {
      const user = await getUser(req.headers.cookie)
      try {
        const result = await axios({
          method: 'get',
          params: { id: user.id },
          url: `${payBff}/invoice/getOrderNeedInvoices`
        })
        const data = result.data;
        const orderIds = data.map(order => order.id);
        res.json({
          status: 200,
          message: 'ok',
          orderIds
        })
      } catch (e) {
        res.json({
          status: 500,
          message: e.response.data
        })
      }
    })

    server.post("/user/invoices", requireLoginMiddleware, async (req, res) => {
      const {
        language = "zh-CN",
        type,
        invoice,
        name,
        bankNo,
        address,
        phone,
        personNo,
        orderIds
      } = req.body

      const user = await getUser(req.headers.cookie)

      if (!user) return res.send({
        status: 301,
        message: language === 'zh-CN' ? "请先登录" : 'please login first'
      })

      const required = invoice === 'Personal' ? ["type", "invoice", "name", "phone"] : ["type", "invoice", "personNo", "name", "address", "phone"]
      for (let v of required) {
        if (!!req.body[v]) return res.send({
          status: 101,
          message: language === 'zh-CN' ? "以上选项包含必填项，请正确填写。" : 'error'
        })
      }

      if (!orderIds || !orderIds.length) return res.send({
        status: 102,
        message: language === 'zh-CN' ? "发票开具失败" : 'error'
      })

      try {
        const invoiceRes = await axios({
          method: 'get',
          params: { id: user.id },
          url: '/api/invoice/getOrderNeedInvoices'
        })
        if (!invoiceRes.data || !invoiceRes.data.length) return res.send({
          status: 104,
          message: language === 'zh-CN' ? "没有要开的发票" : 'error'
        })
        const orders = invoiceRes.data
        if (orderIds.some(orderId => !orders.includes(orderId))) return res.send({
          status: 105,
          message: language === 'zh-CN' ? "已有开过发票" : 'error'
        })

        const detail = orders.filter(o => orderIds.includes(o)).map(order => {
          return {
            goodsname: 'r2.ai - ' + order.productName,
            price: Number(order.totalPrice) / 100
          }
        });

        const applyResult = await axios({
          method: 'post',
          url: '/api/invoice/applyInvoice',
          data: {
            detail,
            orderIds,
            invoiceType: type,
            "basic": { id: user.id, buyername: name, phone, taxnum: personNo, address, account: bankNo }
          }
        })

        return res.send({
          status: 200,
          message: 'ok',
          fpqqlsh: applyResult.data
        })

      } catch (e) {
        return res.send({
          status: 103,
          message: e.response.data
        })
      }

    });

    server.get("/price", (req, res) => {
      res.send({
        basicPrice,
        basicPriceYear,
        essentialPrice,
        essentialPriceYear
      });
    });

    const user = async (cookie) => {
      const u = await getUser(cookie)

      return !!u && !!u.id
    };

    server.get("/login", async (req, res, next) => {
      const { cookie } = req.headers;
      const _user = cookie && await user(req.headers.cookie);

      if (_user) {
        return res.redirect('/')
      }
      next();
    });

    server.get("/register", async (req, res, next) => {
      const { cookie } = req.headers;
      const _user = cookie && await user(req.headers.cookie);

      if (_user) {
        return res.redirect('/')
      }
      next();
    });

    server.get("/product", (req, res) => {
      res.send(PRODUCT_URL);
    });

    server.get("/buy", async (req,res) => {
      const {cookie=''} = req.headers;
      const {captcha,orderType,price,totalPrice,productId,productName,payMethod,level} = req.query;
      axios({
        method: 'post',
        url: authService+'/captcha',
        data:{
          captcha,
        },
        headers: {
          cookie,
        },
      }).catch(()=>{
        res.status(500).json({
          error:'captcha error'
        })
      });

      const user = await getUser(cookie);
      if(!user){
        res.status(500).json({
          error:'not login'
        })
      }

      if(+level>1&&+level!== +user.level&&user.endTime>new Date()){
        res.status(500).json({
          error:'type error'
        })
      }

      const list = {
        email: user.email,
        orderType,
        price,
        renew: false,
        totalPrice,
        productId,
        language: "zh-CN",
        duration: 1,
        productName,
      };

      axios.post(`${payBff}/${payMethod}/createCharge`, list).then(async (response: any) => {
        if (response.status === 200) {
          return res.json({
            response:response.data
          })
        }
        res.status(500).json({
          error:'pay fail',
        });
      }).catch((error: any) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        res.status(500).json({
          error:'pay fail',
          content:error.response.data,
        });
      });
    });


    server.get("/p/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.all("*", function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
      res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
      res.header("X-Powered-By", " 3.2.1");
      res.header("Cookie", req.headers.cookie);
      if (req.method === "OPTIONS") res.send(200);/*让options请求快速返回*/
      else next();
    });

    server.listen(process.env.PORT || 3002, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${process.env.PORT || 3002}`);
    });
  })
  .catch((ex: any) => {
    console.error(ex.stack);
    process.exit(1);
  });


export { };
