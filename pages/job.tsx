import React from "react";
import Home from "../src/frontend/pages/job";

import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import url from "../http";

const Index = (res: any) => {
  return <Home {...res}/>;
};

Index.getInitialProps = async function() {
  const home: any = await fetch(url + `/recruits`) || [];
  const homeData = await home.json();

  return {
    data: homeData,
    JOB_EMAIL:process.env.JOB_EMAIL || 'ya.chen@r2.ai',
  };
};

export default withRouter(Index);
