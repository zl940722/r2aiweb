import React from "react";
import Register from "../src/frontend/pages/register";
import { withRouter } from "next/router";

const Index: any = () => {
  return <Register/>;
};
export default withRouter(Index);