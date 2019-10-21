import React from "react";
import News from "../src/frontend/pages/news";
import fetch from "isomorphic-unfetch";
import url from "../http";

const Index = (res: any) => {
  return <News {...res}/>;
};


Index.getInitialProps = async function() {
  const news: any = await fetch(url + "/news") || [];
  const information: any =  await fetch(url + "/infors") || [];
  const newsData = await news.json();
  const informationData = await information.json();
  console.log(newsData);

  return {
    news: newsData,
    information: informationData
  };
};

export default Index;