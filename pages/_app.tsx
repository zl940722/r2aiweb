import React from "react";

import App from "next/app";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../src/frontend/common/theme";
import Header from "../src/frontend/common/Header";
import Footer from "../src/frontend/common/Footer";
import Head from "next/Head";

class MyApp extends App {


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
    const { Component, pageProps } = this.props as any;
    console.log(Component, pageProps, 111);
    return (
      <>
        <Head>
          <title>R2.ai官网</title>
        </Head>
        {/*<ApolloProvider client={apolloClient}>*/}
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline/>
          <Header {...this.state}/>
          <Component user={this.state} {...pageProps} />
          <Footer/>
        </ThemeProvider>
        {/*</ApolloProvider>*/}
      </>
    );
  }
}


export default MyApp;
