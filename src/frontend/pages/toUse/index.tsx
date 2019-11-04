import React from "react";

import ToUse from "./ToUse";
import { withRouter } from 'next/router'
function University(res) {
console.log('use',res)
  return (
    <>
      <ToUse {...res}/>
    </>
  );
}

export default withRouter(University);
