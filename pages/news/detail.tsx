import React from "react";
import News from "../../src/frontend/pages/news/newsDetail";
import { withRouter } from 'next/router'
import fetch from "isomorphic-unfetch";
import url from "../../http";

const Index = (res: any) => {
  return <News {...res}/>;
};

Index.getInitialProps = async function(res: any) {
  const news: any = await fetch(url + `/news/${res.asPath.split('?')[1]}`) || [];
  const information: any =  await fetch(url + "/infors") || [];
  const newsData = await news.json();
  const informationData = await information.json();

  const newsNext: any = await fetch(url + `/news?type=${newsData.type}&publishTime_gt=${newsData.publishTime}&_limit=1&_sort=publishTime:DESC`) || [];
  const newsPrev: any = await fetch(url + `/news?type=${newsData.type}&publishTime_lt=${newsData.publishTime}&_limit=1&_sort=publishTime:DESC`) || [];

  const nextData = await newsNext.json();
  const prevData = await newsPrev.json();



  return {
    news: newsData,
    next:nextData[0],
    prev:prevData[0],
    information: informationData
  };
};

export default withRouter(Index);
