import React from "react";
import Home from "../src/frontend/pages/home";


import { withRouter } from 'next/router'
import fetch from "isomorphic-unfetch";
import url from "../http";

const Index = (res: any) => {
  console.log(res , 'rsssses')
  return <Home {...res}/>;
};

Index.getInitialProps = async function() {
  const home: any = await fetch(url + `/indices`) || [];
  const homeData = await home.json();

  return {
    data: homeData,
  };
};

export default withRouter(Index);