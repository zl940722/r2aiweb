import React from "react";

import Step from "./order";
import { withRouter } from 'next/router'
function Index(res: any) {
console.log(res , 'zzzzzzzzzzzz')
  return (
    <>
      <Step {...res}/>
    </>
  );
}

export default withRouter(Index);
