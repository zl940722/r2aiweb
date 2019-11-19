import React from "react";
import News from "../../src/frontend/pages/news";
import fetch from "isomorphic-unfetch";
import url from "../../http";


const Index = (res: any) => {
  return <News {...res}/>;
};

Index.getInitialProps = async function() {
  const news: any = await fetch(url + "/communities?type=Case&_sort=id:DESC") || [];
  const information: any =  await fetch(url + "/infors") || [];
  const newsData = await news.json();
  const informationData = await information.json();

  const tabs = [{
    name:'活动信息',
    key:'message',
  },{
    name:'产品干货',
    key:'product',
  },{
    name:'案例分析',
    key:'case',
  }];

  return {
    list: newsData,
    information: informationData,
    tabs,
  };
};

export default Index;
