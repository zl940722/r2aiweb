import React from "react";

import Banner from "./Banner";
import Tabs from "./Tabs";
import Pagination from '../../common/Pagination'

function Application(res: any) {
  return (
    <>
      <Banner/>
      <Pagination />
      <Tabs {...res}/>
    </>
  );
}

export default Application;
