import React from "react";
import "antd/dist/antd.css";

import App from "next/app";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../src/frontend/common/theme";
import Header from "../src/frontend/common/Menu";
import Footer from "../src/frontend/common/Footer";
import Head from "next/head";

export default class MyApp extends App {


  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        active: false
      }
    };
  }


  componentDidMount() {
    console.log(window !== undefined);	//true
    const userInfo: any = JSON.parse(window.localStorage.getItem("userInfo") as any);
    if (userInfo === null) {
      this.setState({
        user: {
          id: "",
          email: "",
          active: false
        }
      });
    } else {
      this.setState({ user: userInfo });
    }
  }

  render() {
    const { Component, pageProps, router } = this.props as any;
    // console.log(Component, pageProps, 111);
    return (
      <div style={{ minWidth: 1200 }}>
        <Head>
          <title>R2.ai官网</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Header {...this.state} route={router.route}/>
          <Component user={this.state} {...pageProps} route={router.route}/>
          <Footer/>
        </ThemeProvider>
      </div>
    );
  }
}
