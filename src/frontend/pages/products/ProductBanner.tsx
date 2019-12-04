import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";

import { Modal, Paper } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    banner: {
      // maxHeight: "36.25rem",
      maxWidth: "100%",
      overflow: "hidden",
      margin: "0 auto",
      // display: "flex",
      // flex: "none",
      // justifyContent: "center",
      position: "relative",
      "& >img": {
        width: "100%",
        // maxHeight: "36.25rem",
        minWidth: "1000px"
      }
    },
    item: {
      height: "36.25rem",
      backgroundSize: "center"
    },
    itemContent: {
      maxWidth: "75rem",
      margin: "0 auto",
      paddingTop: "1rem",
      overflow: "hidden",
      textAlign: "left",
      position: "absolute",
      bottom: 40,
      left: "19%"
    },
    title: {
      marginTop: "5rem",
      color: "#2C4159",
      fontWeight: "bold",
      lineHeight: 1.5
    },
    subtitle: {
      marginTop: "2.8rem",
      color: "#959DA7"
    },
    buttonWrap: {
      color: "#fff",
      width: 280,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "60%",
      cursor: "pointer",
      border: "1px solid #fff",
      borderRadius: 80,
      padding: "20px 0"
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


function ProductBanner(res: any) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function onHandleOpen() {
    setOpen(true);
  }

  function onHandleClose() {
    setOpen(false);
  }

  return (
    <>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
      >
        <div className={classes.banner}>
          <img src="/static/images/products/banner.png" alt="technical banner" />
          {/*</div>*/}
          <div className={classes.itemContent}>
            <div className={classes.buttonWrap} onClick={onHandleOpen}>
              <img style={{ width: 36, marginRight: 20 }} src={"/static/images/products/player1.png"} />
              <span style={{ fontSize: 36 }}>产品视频</span>
            </div>
          </div>
        </div>
      </Carousel>
      <Modal className={classes.modal} open={open} onClose={onHandleClose}>
        <div className={classes.paper}>
          <video width={"100%"} controls autoPlay>
            <source src="/static/images/home/20190830.mp4" type="video/mp4" />
            <source src="/static/images/home/20190830.ogv" type="video/ogg" />
            <source src="/static/images/home/20190830.webm" type="video/webm" />
          </video>
        </div>
      </Modal>
    </>
  );
}

export default ProductBanner;
