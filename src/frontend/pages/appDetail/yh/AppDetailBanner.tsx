import React from "react";
import { makeStyles } from "@material-ui/styles";


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles({
  item: {
    height: "50rem",
    backgroundSize: "cover",
    backgroundPosition:'center'
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
        <div
          className={classes.item}
          style={{
            backgroundImage: "url(/static/images/appDetail/banner应用场景@2x.png)"
          }}
        >
          {/*<div className={classes.itemContent}>*/}
          {/*  <Typography variant={"h3"} className={classes.title}>*/}
          {/*    {data.name}*/}
          {/*  </Typography>*/}
          {/*  <Typography variant={"h5"} className={classes.body}>*/}
          {/*    {data.des}*/}
          {/*  </Typography>*/}
          {/*</div>*/}
        </div>
      </Carousel>
    </>
  );
}

export default AppDetailBanner;
