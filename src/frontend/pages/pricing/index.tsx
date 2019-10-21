import React from "react";
import {Card } from "@material-ui/core";
import Edition from "./edition";
import Context from "./context";

function Application() {
  return (
    <Card>
      <Edition/>
      <Context/>
    </Card>
  );
}

export default Application;
