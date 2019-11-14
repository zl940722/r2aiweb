const express = require("express");
const next = require("next");
const proxy = require("http-proxy-middleware");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const messageService = process.env.MESSAGE_SERVICE || "http://localhost:8088";
const authService = process.env.AUTH_SERVICE || "http://localhost:8088";
const payService = process.env.PAY_SERVICE || "http://192.168.0.105:8090";
const payBff = process.env.PAY_BFF || "http://192.168.0.105:8091";
const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const basicPrice = process.env.BASIC_PRICE || 199.98;
const basicPriceYear = process.env.BASIC_PRICE_YEAR || 2159.78;
const essentialPrice = process.env.ESSENTIAL_PRICE || 1999.98;
const essentialPriceYear = process.env.ESSENTIAL_PRICE_YEAR || 21599.78;

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

const captcha = proxies(authService, "/user/captcha", "/captcha");

const upload = proxies(STRAPI_URL, "/", "/");

const login = proxies(authService, "/user/login", "/");

const register = proxies(payService, "/user/register", "/user/register");

const active = proxies(payService, "/active", "/user/activeUser");

const alipayCreateCharge = proxies(payBff, "/alipay/createCharge", "/alipay/createCharge");

const alipayOrderQuery = proxies(payBff, "/alipay/orderQuery", "/alipay/orderQuery");

const unionPayCreateCharge = proxies(payBff, "/unionPay/createCharge", "/unionPay/createCharge");

const unionPayOrderQuery = proxies(payBff, "/unionPay/orderQuery", "/unionPay/orderQuery");

const wechatCreateCharge = proxies(payBff, "/wechat/createCharge", "/wechat/createCharge");

const wechatOrderQuery = proxies(payBff, "/wechat/orderQuery", "/wechat/orderQuery");

const applyProbation = proxies(payService, "/probation/applyProbation", "/probation/applyProbation");

const sendMail = proxies(messageService, "user/sendMail", "mailer/sendMail");


app.prepare()
  .then(() => {
    const server = express();

    server.get("/hello", function(req: any, res: any) {
      res.send("hello");
    });


    server.use("/user/login", login);

    server.use("/user/register", register);

    server.use("/active", active);

    server.use("/uploads", upload);

    server.use("/user/captcha", captcha);

    server.use("/alipay/createCharge", alipayCreateCharge);

    server.use("/alipay/orderQuery", alipayOrderQuery);

    server.use("/unionPay/createCharge", unionPayCreateCharge);

    server.use("/unionPay/orderQuery", unionPayOrderQuery);

    server.use("/wechat/createCharge", wechatCreateCharge);

    server.use("/wechat/orderQuery", wechatOrderQuery);

    server.use("/probation/applyProbation", applyProbation);

    server.use("user/sendMail", sendMail);

    server.get("/price", (req, res) => {
      res.send({
        basicPrice,
        basicPriceYear,
        essentialPrice,
        essentialPriceYear
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
