const express = require("express");
const next = require("next");
const proxy = require("http-proxy-middleware");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const fetch = require("isomorphic-unfetch");

const messageService = process.env.MESSAGE_SERVICE || "http://localhost:8088";
const authService = process.env.AUTH_SERVICE || "http://localhost:8088";
const payService = process.env.PAY_SERVICE || "http://192.168.0.105:8090";
const payBff = process.env.PAY_BFF || "http://192.168.0.105:8091";
const strapiService = process.env.STRAPI_URL || "http://localhost:1338";
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
      Object.keys(proxyRes.headers).forEach(function(key) {
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

app.prepare()
  .then(() => {
    const server = express();

    server.use("/uploads", strapiServiceProxy("/", "/"));
    server.use("/strapi", strapiServiceProxy("/strapi", "/"));
    server.use("/user/sendMail", messageServiceProxy("/user/sendMail", "/mailer/sendMail"));
    server.use("/user/login", authServiceProxy("/user/login", "/"));
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

    server.get("/price", (req, res) => {
      res.send({
        basicPrice,
        basicPriceYear,
        essentialPrice,
        essentialPriceYear
      });
    });

    const user = async (cookie)=>{
      const _user = await fetch(process.env.AUTH_SERVICE || "http://localhost:8088", {
        headers: {
          cookie,
        }
      });
      return _user.status === 200;
    };

    server.get("/login", async (req, res,next) => {
      const _user = await user(req.headers.cookie);

      if(_user){
        return res.redirect('/')
      }
      next();
    });

    server.get("/register", async (req, res,next) => {
      const _user = await user(req.headers.cookie);

      if(_user){
        return res.redirect('/')
      }
      next();
    });

    server.get("/product", (req,res) => {
      res.send(PRODUCT_URL);
    });


    server.get("/p/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.all("*", function(req, res, next) {
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


export {};
