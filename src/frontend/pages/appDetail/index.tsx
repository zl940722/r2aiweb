import React from "react";

import AppDetailBanner from "./AppDetailBanner";
import AppDetailPartOne from "./AppDetailPartOne";
import AppDetailPartTwo from "./AppDetailPartTwo";
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
