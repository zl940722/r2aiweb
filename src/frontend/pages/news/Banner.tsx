import React from "react";
import { makeStyles } from "@material-ui/styles";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles({
  item: {
    height: "36.25rem",
    backgroundSize: "cover"
  }
});

function AppBanner() {
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
            backgroundImage: "url(/static/images/news/banner.png)"
          }}
        />
      </Carousel>
    </>
  );
}

export default AppBanner;
