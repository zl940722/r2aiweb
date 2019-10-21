import React from "react";
import Home from "../src/frontend/pages/job/jobsDetail";

import { withRouter } from 'next/router'
import fetch from "isomorphic-unfetch";
import url from "../http";

const Index = (res: any) => {
  console.log(res , 'rsssses')
  return <Home {...res}/>;
};

Index.getInitialProps = async function(res: any) {
  const home: any = await fetch(url + `/recruits/${res.asPath.split('?')[1]}`) || [];
  const homeData = await home.json();

  return {
    data: homeData,
  };
};

export default withRouter(Index);