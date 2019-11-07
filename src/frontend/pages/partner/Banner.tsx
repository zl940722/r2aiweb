import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";

import { Modal } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Grommet, Button } from "grommet";

const useStyles = makeStyles((theme: any) =>
  createStyles({
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
      textAlign: "center"
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
      color: "#314157",
      fontSize: 30
    },
    buttonWrap: {
      width: "100%",
      marginTop: "55%",
      paddingLeft: "0.5rem",
      color:'#fff'
    },
    button: {
      width: "16.6rem",
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

const customTheme = {
  button: {
    border: {
      width: "3px",
      radius: "2.3rem"
    },
    color: "#fff"
  },
  text: {
    medium: {
      size: "1.8rem"
    }
  },
  global: {
    hover: {
      color: "#FFF",
      background: "#2C4159"
    },
    colors: {
      brand: "#fff"
    }
  },
  video: {
    scrubber: {
      color: "#2C4159"
    }
  }
};

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
          style={{ backgroundImage: "url(/static/images/partner/banner@2x.png)" }}
        >
          <div className={classes.itemContent}>
            <Grommet className={classes.buttonWrap} theme={customTheme}>
              <Button
                hoverIndicator
                label={"立即联系合作"}
                className={classes.button}
                onClick={onHandleOpen}
              />
            </Grommet>
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
