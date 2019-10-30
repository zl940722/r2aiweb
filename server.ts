const express = require("express");


const next = require("next");
const proxy = require("http-proxy-middleware");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const authService = process.env.AUTH_SERVICE || "http://localhost:8088";
const payService = process.env.PAY_SERVICE || "http://192.168.0.105:8090";
const payBff = process.env.PAY_BFF || "http://192.168.0.105:8091";
// const strapiService = process.env.STRAPI_SERVICE || "http://192.168.0.105:1337";
const basicPrice = process.env.BASIC_PRICE || 199.98;
const basicPriceYear = process.env.BASIC_PRICE_YEAR || 2159.78;
const essentialPrice = process.env.ESSENTIAL_PRICE || 1999.98;
const essentialPriceYear = process.env.ESSENTIAL_PRICE_YEAR || 21599.78;
console.log(process.env.AUTH_SERVICE  , 'process.env.STRAPI_SERVICE1 ')


const captcha = proxy({
  target: authService,
  changeOrigin: true,
  pathRewrite: {
    "/user/captcha": "/captcha"
  },
  onProxyReq(proxyReq, req) {
    proxyReq.setHeader("Cookie", req.headers.cookie);
  },
  onProxyRes(proxyRes, req, res) {
    Object.keys(proxyRes.headers).forEach(function(key) {
      res.append(key, proxyRes.headers[key]);
    });
  }
});

const login = proxy({
  target: authService,
  changeOrigin: true,
  pathRewrite: {
    "/user/login": "/"
  },
  onProxyReq(proxyReq, req) {
    proxyReq.setHeader("Cookie", req.headers.cookie);
  },
  onProxyRes(proxyRes, req, res) {
    Object.keys(proxyRes.headers).forEach(function(key) {
      res.append(key, proxyRes.headers[key]);
    });
  }
});


const register = proxy({
  target: payService,
  changeOrigin: true,
  pathRewrite: {
    "/user/register": "/user/register"
  },
  onProxyReq(proxyReq, req) {
    proxyReq.setHeader("Cookie", req.headers.cookie);
  },
  onProxyRes(proxyRes, req, res) {
    Object.keys(proxyRes.headers).forEach(function(key) {
      res.append(key, proxyRes.headers[key]);
    });
  }
});


const active = proxy({
  target: payService,
  changeOrigin: true,
  pathRewrite: {
    "/active": "/user/activeUser"
  },
  onProxyReq(proxyReq, req) {
    console.log(213213);
    proxyReq.setHeader("Cookie", req.headers.cookie);
  },
  onProxyRes(proxyRes, req, res) {
    Object.keys(proxyRes.headers).forEach(function(key) {
      res.append(key, proxyRes.headers[key]);
    });
  }
});


const alipayCreateCharge = proxy({
  target: payBff,
  changeOrigin: true,
  pathRewrite: {
    "/alipay/createCharge": "/alipay/createCharge"
  },
  onProxyReq(proxyReq, req) {
    proxyReq.setHeader("Cookie", req.headers.cookie);
  },
  onProxyRes(proxyRes, req, res) {
    Object.keys(proxyRes.headers).forEach(function(key) {
      res.append(key, proxyRes.headers[key]);
    });
  }
});

const alipayOrderQuery = proxy({
  target: payBff,
  changeOrigin: true,
  pathRewrite: {
    "/alipay/orderQuery": "/alipay/orderQuery"
  },
  onProxyReq(proxyReq, req) {
    proxyReq.setHeader("Cookie", req.headers.cookie);
  },
  onProxyRes(proxyRes, req, res) {
    Object.keys(proxyRes.headers).forEach(function(key) {
      res.append(key, proxyRes.headers[key]);
    });
  }
});

const unionPayCreateCharge = proxy({
  target: payBff,
  changeOrigin: true,
  pathRewrite: {
    "/unionPay/createCharge": "/unionPay/createCharge"
  },
  onProxyReq(proxyReq, req) {
    proxyReq.setHeader("Cookie", req.headers.cookie);
  },
  onProxyRes(proxyRes, req, res) {
    Object.keys(proxyRes.headers).forEach(function(key) {
      res.append(key, proxyRes.headers[key]);
    });
  }
});


const unionPayOrderQuery = proxy({
  target: payBff,
  changeOrigin: true,
  pathRewrite: {
    "/unionPay/orderQuery": "/unionPay/orderQuery"
  },
  onProxyReq(proxyReq, req) {
    proxyReq.setHeader("Cookie", req.headers.cookie);
  },
  onProxyRes(proxyRes, req, res) {
    Object.keys(proxyRes.headers).forEach(function(key) {
      res.append(key, proxyRes.headers[key]);
    });
  }
});


const wechatCreateCharge = proxy({
  target: payBff,
  changeOrigin: true,
  pathRewrite: {
    "/wechat/createCharge": "/wechat/createCharge"
  },
  onProxyReq(proxyReq, req) {
    proxyReq.setHeader("Cookie", req.headers.cookie);
  },
  onProxyRes(proxyRes, req, res) {
    Object.keys(proxyRes.headers).forEach(function(key) {
      res.append(key, proxyRes.headers[key]);
    });
  }
});

const wechatOrderQuery = proxy({
  target: payBff,
  changeOrigin: true,
  pathRewrite: {
    "/wechat/orderQuery": "/wechat/orderQuery"
  },
  onProxyReq(proxyReq, req) {
    proxyReq.setHeader("Cookie", req.headers.cookie);
  },
  onProxyRes(proxyRes, req, res) {
    Object.keys(proxyRes.headers).forEach(function(key) {
      res.append(key, proxyRes.headers[key]);
    });
  }
});



app.prepare()
  .then(() => {
    const server = express();

    server.get("/hello", function(req: any, res: any) {
      res.send("hello");
    });


    server.use("/user/login", login);

    server.use("/user/register", register);

    server.use("/active", active);

    server.use("/user/captcha", captcha);

    server.use("/alipay/createCharge", alipayCreateCharge);

    server.use("/alipay/orderQuery", alipayOrderQuery);

    server.use("/unionPay/createCharge", unionPayCreateCharge);

    server.use("/unionPay/orderQuery", unionPayOrderQuery);

    server.use("/wechat/createCharge", wechatCreateCharge);

    server.use("/wechat/orderQuery", wechatOrderQuery);

    server.get("/price", (req, res) => {
      res.send({
        basicPrice,
        basicPriceYear,
        essentialPrice,
        essentialPriceYear
      });
    });


    // server.get("/strapiUrl", function(req: any, res: any) {
    //   res.send(strapiService);
    // });


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