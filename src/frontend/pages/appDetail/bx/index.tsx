import React from "react";
import { withRouter } from "next/router";
import BxAppDetailBanner from "./AppDetailBanner";
import BxAppDetailPartOne from "./AppDetailPartOne";
import BxAppDetailPartTwo from "./AppDetailPartTwo";

function Index(res: any) {
  return (
    <>
      <BxAppDetailBanner/>
      <BxAppDetailPartOne/>
      <BxAppDetailPartTwo/>
    </>
  );
}

export default withRouter(Index);
