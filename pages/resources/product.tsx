import React from "react";
import News from "../../src/frontend/pages/news";
import fetch from "isomorphic-unfetch";
import url from "../../http";


const Index = (res: any) => {
  return <News {...res}/>;
};

Index.getInitialProps = async function(props) {
  const {p=1} = props.query;
  const news: any = await fetch(url + `/communities?type=Product&_sort=id:DESC&_limit=5&_start=${5*(p-1)}`) || [];
  const count: any = await (await fetch(url + "/communities/count?type=Product")).json();
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
    count,
    page:p,
  };
};

export default Index;
