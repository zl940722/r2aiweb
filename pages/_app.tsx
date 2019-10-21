import React from "react";

import App from "next/app";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../src/frontend/common/theme";
import Header from "../src/frontend/common/Header";
import Footer from "../src/frontend/common/Footer";
// import { ApolloProvider } from "@apollo/react-hooks";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props as any;

    return (
      <>
        {/*<ApolloProvider client={apolloClient}>*/}
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline/>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
          </ThemeProvider>
        {/*</ApolloProvider>*/}
      </>
    );
  }
}

export default MyApp;
