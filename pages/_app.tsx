import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";

import App from "next/app";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../src/frontend/common/theme";
import Header from "../src/frontend/common/Menu";
import Footer from "../src/frontend/common/Footer";
import Head from "next/head";
import axios from "axios";
import Router from "next/router";

export default function(props) {
  const [user, upUser] = useState({
    id: "",
    email: "",
    active: false
  });

  const [PRODUCT_URL, upPRODUCT_URL] = useState("");

  useEffect(() => {
    axios
      .get("/user/login")
      .then((result: any) => {
        const {data={}} = result;
        upUser(data);
      })
      .catch((err: any) => {
        console.log(err);
      });

    axios
      .get("/product")
      .then((data: any) => {
        const PRODUCT_URL = data.data;
        PRODUCT_URL && upPRODUCT_URL(PRODUCT_URL);
      })
      .catch((err: any) => {
        console.log(err);
      });
  },[]);

  const { Component, pageProps, router } = props as any;
  return (
    <div style={{ minWidth: 1200 }}>
      <Head>
        <title>R2.ai官网</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header route={router.route} user={user} PRODUCT_URL={PRODUCT_URL} />
        <section
          style={{
            // minHeight:'calc(100vh - 140px - 16.125rem)',
            minHeight: "calc(100vh - 202px)"
          }}
        >
          <Component PRODUCT_URL={PRODUCT_URL}  user={user} {...pageProps} route={router.route} />
        </section>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
