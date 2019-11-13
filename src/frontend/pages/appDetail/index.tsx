import React from "react";

import BxAppDetailBanner from "./bx/AppDetailBanner";
import BxAppDetailPartOne from "./bx/AppDetailPartOne";
import BxAppDetailPartTwo from "./bx/AppDetailPartTwo";

import YlAppDetailBanner from "./yl/AppDetailBanner";
import YlAppDetailPartOne from "./yl/AppDetailPartOne";
import YlAppDetailPartTwo from "./yl/AppDetailPartTwo";


import WlwAppDetailBanner from "./wlw/AppDetailBanner";
import WlwAppDetailPartOne from "./wlw/AppDetailPartOne";


import YhAppDetailBanner from "./yh/AppDetailBanner";
import YhAppDetailPartOne from "./yh/AppDetailPartOne";
import YhAppDetailPartTwo from "./yh/AppDetailPartTwo";
import YhAppDetailPartThree from "./yh/AppDetailPartThree";

import { withRouter } from "next/router";

function AppDetail(props: any) {
  console.log(props, "dasdsad");
  let compent;
  if (props.router.query.id === "1") {
    compent = (
      <>
        <YhAppDetailBanner/>
        <YhAppDetailPartOne {...props}/>
        <YhAppDetailPartTwo/>
        <YhAppDetailPartThree/>
      </>
    );
  } else if (props.router.query.id === "2") {
    compent = (
      <>
        <BxAppDetailBanner/>
        <BxAppDetailPartOne {...props}/>
        <BxAppDetailPartTwo/>
      </>
    );
  }else if (props.router.query.id === "3") {
    compent = (
      <>
        <YlAppDetailBanner/>
        <YlAppDetailPartOne {...props}/>
        <YlAppDetailPartTwo/>
      </>
    );
  }else if (props.router.query.id === "4") {
    compent = (
      <>
        <WlwAppDetailBanner/>
        <WlwAppDetailPartOne {...props}/>
      </>
    );
  }
  return (
    compent
  );

}

export default withRouter(AppDetail);
