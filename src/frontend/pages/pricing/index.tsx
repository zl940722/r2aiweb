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
  },
  banner: {
    maxWidth: "100%",
    overflow: "hidden",
    margin: "0 auto",
    position: "relative",
    "& >img": {
      width: "100%",
      minWidth: "1000px"
    }
  },
  container: {
    width: "75rem",
    margin: "auto auto 9.0625rem",
    boxShadow: "inset 0px 0px 5px 0px rgba(0, 0, 0, 0.35)",
    marginBottom: "9.0625"
  },
  title: {
    padding: "4rem 0",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#333"
  }
});


function Application(res: any) {
  const classes = useStyles();
  return (
    <Card>
      <div className={classes.banner}>
        <img src="/static/images/price/banner.png" alt="banner"/>
      </div>
      <p className={"all_title"} style={{ marginTop: 65, marginBottom: 63 }}>
        价格指南
      </p>
      <section className={classes.container}>
        <Edition {...res}/>
        <Context {...res}/>
      </section>
    </Card>
  );
}

export default Application;
