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
    overflow: 'hidden',
    margin: '0 auto',
    display: 'flex',
    flex: 'none',
    justifyContent: 'center',
    position:'relative',
    "& >img": {
      width: '100%',
      maxHeight: '36.25rem',
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
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
      >
        {/*<div*/}
        {/*  className={classes.item}*/}
        {/*  style={{*/}
        {/*    backgroundImage: "url(/static/images/appDetail/11.png)"*/}
        {/*  }}*/}
        {/*>*/}
        {/*  /!*<div className={classes.itemContent}>*!/*/}
        {/*  /!*  <Typography variant={"h3"} className={classes.title}>*!/*/}
        {/*  /!*    {data.name}*!/*/}
        {/*  /!*  </Typography>*!/*/}
        {/*  /!*  <Typography variant={"h5"} className={classes.body}>*!/*/}
        {/*  /!*    {data.des}*!/*/}
        {/*  /!*  </Typography>*!/*/}
        {/*  /!*</div>*!/*/}
        {/*</div>*/}
        <div className={classes.banner}>
          <img src="/static/images/appDetail/11.png" alt="technical banner"/>
        </div>
      </Carousel>
    </>
  );
}

export default AppDetailBanner;
