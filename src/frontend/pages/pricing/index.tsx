import React from "react";
import { Card } from "@material-ui/core";
import Edition from "./edition";
import Context from "./context";
import { makeStyles } from "@material-ui/styles";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles({
  item: {
    height: "50rem",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  banner: {
    maxHeight: '650px',
    maxWidth: "100%",
    overflow: 'hidden',
    margin: '0 auto',
    display: 'flex',
    flex: 'none',
    justifyContent: 'center',
    position:'relative',
    "& >img": {
      maxWidth: '100%',
      maxHeight: '100%',
      minWidth: '1000px'
    }
  },
});


function Application(res: any) {
  const classes = useStyles();
  return (
    <Card>
      <div className={classes.banner}>
        <img src="/static/images/price/banner.png" alt="banner"/>
      </div>
      <Edition {...res}/>
      <Context {...res}/>
    </Card>
  );
}

export default Application;
