import React from "react";

import AppDetailBanner from "./bx/AppDetailBanner";
import AppDetailPartOne from "./bx/AppDetailPartOne";
import AppDetailPartTwo from "./bx/AppDetailPartTwo";
import { withRouter } from 'next/router'
function AppDetail(props: any) {
  console.log(props,'dasdsad');
  return (
    <>
      <AppDetailBanner />
      <AppDetailPartOne {...props}/>
      <AppDetailPartTwo />
    </>
  );
}

export default withRouter(AppDetail);
