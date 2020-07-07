import React from "react";
import { makeStyles } from "@material-ui/styles";


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  item: {
    height: "50rem",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  banner: {
    // maxHeight: "36.25rem",
    maxWidth: "100%",
    overflow: 'hidden',
    margin: '0 auto',
    // display: 'flex',
    // flex: 'none',
    // justifyContent: 'center',
    position:'relative',
    "& >img": {
      width: '100%',
      // maxHeight: '36.25rem',
      minWidth: '1000px'
    }
  },
  itemContent: {
    maxWidth: "75rem",
    margin: "0 auto",
    paddingTop: "1rem",
    overflow: "hidden",
    textAlign: "left"
  },
  title: {
    margin: "5rem 0 2.8rem",
    fontWeight: "bold",
    textAlign: "center"
  },
  body: {
    lineHeight: 1.8,
    fontWeight: "bold"
  }
});


function AppDetailBanner() {
  const classes = useStyles();

  return (
    <>
          <div className={classes.banner}>
            <img src="/static/images/appDetail/banneryh.png" alt="technical banner"/>
          </div>
    </>
  );
}

export default AppDetailBanner;
