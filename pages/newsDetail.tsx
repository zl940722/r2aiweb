import React from "react";
import News from "../src/frontend/pages/news/newsDetail";
import { withRouter } from 'next/router'
import fetch from "isomorphic-unfetch";
import url from "../http";

const Index = (res: any) => {
  return <News {...res}/>;
};

Index.getInitialProps = async function(res: any) {
  console.log(res , 'rsssses')
  const news: any = await fetch(url + `/news/${res.asPath.split('?')[1]}`) || [];
  const information: any =  await fetch(url + "/infors") || [];
  const newsData = await news.json();
  const informationData = await information.json();

  return {
    news: newsData,
    information: informationData
  };
};

export default withRouter(Index);