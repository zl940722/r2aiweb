import React from "react";
import { makeStyles } from "@material-ui/styles";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles({
  item: {
    height: "50rem",
    backgroundSize: "cover",
    backgroundPosition: "center"
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
            backgroundImage: "url(/static/images/application/banner.png)"
          }}
        />
      </Carousel>
    </>
  );
}

export default AppBanner;
