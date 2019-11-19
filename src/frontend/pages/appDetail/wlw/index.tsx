import React from "react";
import { withRouter } from 'next/router'
import BxAppDetailBanner from "./AppDetailBanner";
import BxAppDetailPartOne from "./AppDetailPartOne";
function Index(res: any) {
  return (
    <>
      <BxAppDetailBanner/>
      <BxAppDetailPartOne />
    </>
  );
}

export default withRouter(Index);
