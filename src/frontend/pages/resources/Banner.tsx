import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";

import { Typography } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    item: {
      height: "36.25rem",
      backgroundSize: "cover"
    },
    itemContent: {
      maxWidth: "75rem",
      margin: "0 auto",
      paddingTop: "1rem",
      overflow: "hidden",
      textAlign: "left"
    },
    title: {
      marginTop: "5rem",
      color: "#091221",
      fontWeight: "bold",
      lineHeight: 1.5,
      fontSize: 48
    },
    subtitle: {
      marginTop: "2.8rem",
      color: "#091221",
      lineHeight: 1.5,
      fontSize: 24
    },
    buttonWrap: {
      width: "100%",
      marginTop: "4rem",
      paddingLeft: "0.5rem"
    },
    button: {
      width: "13.6rem",
      height: "4.5rem",
      fontWeight: "bold"
    },
    modal: {
      display: "flex",
      padding: theme.spacing(1),
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      width: "70%",
      backgroundColor: theme.palette.background.paper,
      border: ".5rem solid #000",
      boxShadow: theme.shadows[5]
    }
  })
);

function ProductBanner() {
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
          style={{ backgroundImage: "url(/static/images/resources/banner1@2x.png)" }}
        >
          <div className={classes.itemContent}>
            <Typography variant={"h3"} className={classes.title}>
              R2资源
            </Typography>
            <Typography variant={"h4"} className={classes.subtitle}>
              高质的产品干货，真实的案例分析，权威的行家点评，<br/>助力各行业AI赋能！
            </Typography>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default ProductBanner;
