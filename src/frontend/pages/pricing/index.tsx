import React from "react";
import { Card } from "@material-ui/core";
import Edition from "./edition";
import Context from "./context";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  item: {
    height: "50rem",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
});


function Application(res: any) {
  const classes = useStyles();
  return (
    <Card>
      <div
        className={classes.item}
        style={{
          backgroundImage: "url(/static/images/price/banner.png)"
        }}
      />
      <Edition {...res}/>
      <Context {...res}/>
    </Card>
  );
}

export default Application;
