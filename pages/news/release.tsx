import React from "react";
import News from "../../src/frontend/pages/news";
import fetch from "isomorphic-unfetch";
import url from "../../http";


const Index = (res: any) => {
  return <News {...res}/>;
};

Index.getInitialProps = async function() {
  const news: any = await fetch(url + "/news?type=Release&_sort=publishTime:DESC") || [];
  const information: any =  await fetch(url + "/infors") || [];
  const newsData = await news.json();
  const informationData = await information.json();

  const tabs = [{
    name:'产品发布',
    key:'release',
  },{
    name:'参评获奖',
    key:'prize',
  },{
    name:'活动参会',
    key:'activity',
  }];

  return {
    list: newsData,
    information: informationData,
    tabs,
  };
};

export default Index;
