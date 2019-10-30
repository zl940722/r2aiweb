import React from "react";
import UserActivation from "../src/frontend/pages/userActivation";
import { withRouter } from "next/router";

const Index: any = () => {
  return <UserActivation/>;
};


export default withRouter(Index);