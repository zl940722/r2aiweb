import React from "react";
import { withRouter } from 'next/router'
import YhAppDetailBanner from "./AppDetailBanner";
import YhAppDetailPartOne from "./AppDetailPartOne";
import YhAppDetailPartTwo from "./AppDetailPartTwo";
import YhAppDetailPartThree from "./AppDetailPartThree";
function Index(res: any) {
  return (
    <>
      <YhAppDetailBanner/>
      <YhAppDetailPartOne />
      <YhAppDetailPartTwo/>
      <YhAppDetailPartThree/>
    </>
  );
}

export default withRouter(Index);
