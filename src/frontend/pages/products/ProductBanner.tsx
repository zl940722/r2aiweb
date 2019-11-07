import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";

import { Modal } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    item: {
      height: "50rem",
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
      color: "#2C4159",
      fontWeight: "bold",
      lineHeight: 1.5
    },
    subtitle: {
      marginTop: "2.8rem",
      color: "#959DA7"
    },
    buttonWrap: {
      color:'#fff',
      fontSize:'40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent:'center',
      marginTop:'55%',
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
        <div
          className={classes.item}
          style={{ backgroundImage: "url(/static/images/products/banner.png)" }}
        >
          <div className={classes.itemContent}>
            {/*<Typography variant={"h3"} className={classes.title}>*/}
            {/*  R2 Learn-*/}
            {/*  <br />*/}
            {/*  智能开发，智慧运营*/}
            {/*</Typography>*/}
            {/*<Typography variant={"h4"} className={classes.subtitle}>*/}
            {/*  人人可用的自动机器学习建模平台*/}
            {/*</Typography>*/}
            <div  className={classes.buttonWrap}  onClick={onHandleOpen}>
              <img style={{width:'41px'}} src={'/static/images/products/player.png'}/>
              <span>产品视频</span>
            </div>
            {/*<Grommet className={classes.buttonWrap} theme={customTheme}>*/}
            {/*  <Button*/}
            {/*    hoverIndicator*/}
            {/*    label={"产品视频"}*/}
            {/*    className={classes.button}*/}
            {/*    onClick={onHandleOpen}*/}
            {/*  />*/}
            {/*</Grommet>*/}
          </div>
        </div>
      </Carousel>
      <Modal className={classes.modal} open={open} onClose={onHandleClose}>
        <div className={classes.paper}>
          <video width={"100%"} controls autoPlay>
            <source src="/static/images/home/20190830.mp4" type="video/mp4"/>
          </video>
        </div>
      </Modal>
    </>
  );
}

export default ProductBanner;
