import React from "react";
import { makeStyles } from "@material-ui/styles";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles({
  item: {
    height: "50rem",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  banner: {
    maxHeight: "36.25rem",
    maxWidth: "100%",
    overflow: "hidden",
    margin: "0 auto",
    display: "flex",
    flex: "none",
    justifyContent: "center",
    position: "relative",
    "& >img": {
      maxWidth: "100%",
      maxHeight: "100%",
      minWidth: "1000px"
    }
  }
});

function AppBanner() {
  const classes = useStyles();

  return (

    <div className={classes.banner}>
      <img src="/static/images/application/banner.png" alt="banner"/>
    </div>

  );
}

export default AppBanner;
