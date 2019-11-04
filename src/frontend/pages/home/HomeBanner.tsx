import React from "react";

import { makeStyles, createStyles } from "@material-ui/styles";

import { Typography, Modal } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Grommet, Button } from "grommet";
import url from "../../../../http";


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
      color: "#2C4159",
      fontWeight: "bold",
      lineHeight: 1.5
    },
    subtitle: {
      marginTop: "2.8rem",
      color: "#959DA7",
      textIndent: "2rem"
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

const customTheme = {
  button: {
    border: {
      width: "3px",
      radius: "2.3rem"
    },
    color: "#2C4159"
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
      brand: "#2C4159"
    }
  },
  video: {
    scrubber: {
      color: "#2C4159"
    }
  }
};

const HomeBanner = (res: any) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function onHandleOpen() {
    setOpen(true);
  }

  function onHandleClose() {
    setOpen(false);
  }


  // const enBanner: any = _.find(banner.content, (data: any) => {
  //   return data.en_img;
  // });
  const banner = url + res.content[0].en_img.url
  console.log(banner , 'banner banner@2x.jpg')

  return (
    <>
      <Carousel showThumbs={false} showArrows={false} showStatus={false}>
        <div
          className={classes.item}
          style={{ backgroundImage: banner }}
        >
          <div className={classes.itemContent}>
            <Typography variant={"h3"} className={classes.title}>
              R2 Learn
              <br/>
              公开试用 开启全新建模体验
            </Typography>
            <Typography variant={"h4"} className={classes.subtitle}>
              快速、易用、高质、高效
            </Typography>
            <Grommet className={classes.buttonWrap} theme={customTheme}>
              <Button
                hoverIndicator
                label={"产品视频"}
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
            {/*<source src="/static/images/home/20190830.webm" type="video/webm" />*/}
            {/*<source src="/static/images/home/20190830.ogv" type="video/ogg" />*/}
            <source src="/static/images/home/20190830.mp4" type="video/mp4"/>
          </video>
        </div>
      </Modal>
    </>
  );
};

export default HomeBanner;
