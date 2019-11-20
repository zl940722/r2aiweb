import React from "react";
import News from "../../src/frontend/pages/news";
import fetch from "isomorphic-unfetch";
import url from "../../http";


const Index = (res: any) => {
  return <News {...res}/>;
};

Index.getInitialProps = async function(props) {
  const { p = 1 } = props.query;
  const news: any = await fetch(url + `/news?type=Activity&_sort=publishTime:DESC&_limit=5&_start=${5 * (p - 1)}`) || [];
  const count: any = await (await fetch(url + "/news/count?type=Activity")).json();
  const information: any = await fetch(url + "/infors") || [];
  const newsData = await news.json();
  const informationData = await information.json();

  const tabs = [{
    name: "产品发布",
    key: "release"
  }, {
    name: "参评获奖",
    key: "prize"
  }, {
    name: "活动参会",
    key: "activity"
  }];

  return {
    list: newsData,
    information: informationData,
    tabs,
    count,
    page: p
  };
};

export default Index;
