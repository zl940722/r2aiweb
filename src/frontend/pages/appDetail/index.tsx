import React from "react";

import AppDetailBanner from "./AppDetailBanner";
import AppDetailPartOne from "./AppDetailPartOne";
import AppDetailPartTwo from "./AppDetailPartTwo";

function AppDetail(props: any) {
  console.log(props);
  return (
    <>
      <AppDetailBanner />
      <AppDetailPartOne />
      <AppDetailPartTwo />
    </>
  );
}

export default AppDetail;
