import React from "react";
import Pricing from "../src/frontend/pages/pricing";

import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import url from "../http";

const Index = (res: any) => {
  return <Pricing {...res}/>;
};

Index.getInitialProps = async function() {
  // let user,_user;
  // if (typeof window === 'object') {
  //   const url = "/user/login";
  //   _user = await fetch(url);
  // } else {
  //   _user = await fetch(process.env.AUTH_SERVICE || "http://localhost:8088", {
  //     headers: {
  //       cookie: props.req.headers.cookie
  //     }
  //   });
  // }
  // user = _user.status === 200 ? await _user.json() : {};

  const home: any = await fetch(url + `/prices?_sort=level`) || [];

  const homeData = await home.json();
  const list: any = {
    data_volume_zh: "模型训练数据量",
    user_number_zh: "用户数",
    modeling_times_zh: "建模次数",
    predicted_row_number_zh: "预测行数",
    storage_space_zh: "存储空间",
    Run_same_time_zh: "同时运行项目",
    Item_number_zh: "项目数",
    support_data_format: "支持数据格式",
    api: "支持以API方式访问",
    priority_zh: "资源分配优先级",
    technical_support_zh: "技术支持"
  };
  console.log(homeData, 'sss')

  homeData.unshift(list);
  return {
    data: homeData,
    // user
  };
};

export default withRouter(Index);
