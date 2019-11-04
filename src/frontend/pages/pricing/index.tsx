import React from "react";
import {Card } from "@material-ui/core";
import Edition from "./edition";
import Context from "./context";

function Application(res: any) {
console.log(res , 'price')
  return (
    <Card>
      <Edition {...res}/>
      <Context {...res}/>
    </Card>
  );
}

export default Application;
