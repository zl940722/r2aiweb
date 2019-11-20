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
      textAlign: "center"
    },
    title: {
      color: "#fff",
      marginTop: "5rem",
      fontWeight: "bold",
      lineHeight: 1.5,
      fontSize: 48
    },
    subtitle: {
      marginTop: "2.8rem",
      color: "#fff",
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
          style={{ backgroundImage: "url(/static/images/university/banner@2x.png)" }}
        >
          <div className={classes.itemContent}>
            <Typography variant={"h3"} className={classes.title}>
              认证体系
            </Typography>
            <Typography variant={"h4"} className={classes.subtitle}>
              暂未上线，敬请期待哦！
            </Typography>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default ProductBanner;
