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

interface Interface {
  link: "news" | "resources"
}

export default function(props: Interface) {
  const classes = useStyles();

  return (
    <>
        <div
          className={classes.item}
          style={{
            backgroundImage: `url(/static/images/${props.link}/banner.png)`,
            backgroundSize: '100% 100%'
          }}
        />
    </>
  );
}
