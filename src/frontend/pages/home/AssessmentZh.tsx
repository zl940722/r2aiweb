import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Grid, Typography } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Grommet, ResponsiveContext } from "grommet";
import url from "../../../../http";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  content: {
    maxWidth: "75rem",
    margin: "0 auto",
    overflow: "hidden"
  },
  title: {
    margin: "5rem 0",
    fontWeight: "bold"
  },
  items: {
    maxWidth: "75rem",
    margin: "0 auto"
  },
  item: {
    backgroundColor: "#FFF"
  },
  card: {
    maxWidth: "23rem"
  },
  actionArea: {
    padding: ".3rem"
  },
  media: {
    padding: "1rem",
    textAlign: "right"
  },
  comma: {
    padding: "1rem",
    paddingLeft: 0
  },
  words: {
    lineHeight: 2
  }
});

const customBreakpoints = {
  global: {
    breakpoints: {
      xs: {
        value: 500
      },
      sm: {
        value: 800
      },
      md: {
        value: 1200
      }
    }
  }
};

const percentages: any = {
  xs: 100,
  sm: 50,
  md: 33
};

function Assessment(res: any) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant={"h4"} align={"center"} className={classes.title}>
          {res.content[0].zh}
        </Typography>
        <Grommet theme={customBreakpoints}>
          <ResponsiveContext.Consumer>
            {size => (
              <Carousel
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                className={classes.items}
                centerMode
                centerSlidePercentage={percentages[size] || 33}
                emulateTouch={size === "xs"}
              >
                <div className={classes.item}>
                  <Grid item md={4} xs={12} className={classes.card}>
                    <div className={classes.actionArea}>
                      <div className={classes.media}>
                        <img
                          src={url + res.content[1].en_img.url}
                          width={244}
                          height={56}
                          alt="JAKROO"
                        />
                      </div>
                      <div>
                        {/*<div className={classes.comma}>*/}
                        {/*  <img*/}
                        {/*    src="/static/images/home/“@2x.png"*/}
                        {/*    width={46}*/}
                        {/*    height={55}*/}
                        {/*    alt="“"*/}
                        {/*  />*/}
                        {/*</div>*/}
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          className={classes.words}
                        >
                          {res.content[2].zh}
                        </Typography>
                        <Typography variant={"subtitle2"} align={"right"}>
                          {res.content[3].zh}
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                </div>
                <div className={classes.item}>
                  <Grid item md={4} xs={12} className={classes.card}>
                    <div className={classes.actionArea}>
                      <div className={classes.media}>
                        <img
                          src={url + res.content[4].en_img.url}
                          width={145}
                          height={56}
                          alt="JAKROO"
                        />
                      </div>
                      <div>
                        {/*<div className={classes.comma}>*/}
                        {/*  <img*/}
                        {/*    src="/static/images/home/“@2x.png"*/}
                        {/*    width={46}*/}
                        {/*    height={55}*/}
                        {/*    alt="“"*/}
                        {/*  />*/}
                        {/*</div>*/}
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          className={classes.words}
                        >
                          {res.content[5].zh}
                        </Typography>
                        <Typography variant={"subtitle2"} align={"right"}>
                          {res.content[6].zh}
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                </div>
                <div className={classes.item}>
                  <Grid item md={4} xs={12} className={classes.card}>
                    <div className={classes.actionArea}>
                      <div className={classes.media}>
                        <img
                          src={url + res.content[7].en_img.url}
                          width={145}
                          height={56}
                          alt="JAKROO"
                        />
                      </div>
                      <div>
                        {/*<div className={classes.comma}>*/}
                        {/*  <img*/}
                        {/*    src="/static/images/home/“@2x.png"*/}
                        {/*    width={46}*/}
                        {/*    height={55}*/}
                        {/*    alt="“"*/}
                        {/*  />*/}
                        {/*</div>*/}
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          className={classes.words}
                        >
                          {res.content[8].zh}
                        </Typography>
                        <Typography variant={"subtitle2"} align={"right"}>
                          {res.content[9].zh}
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                </div>
              </Carousel>
            )}
          </ResponsiveContext.Consumer>
        </Grommet>
      </div>
    </div>
  );
}

export default Assessment;
