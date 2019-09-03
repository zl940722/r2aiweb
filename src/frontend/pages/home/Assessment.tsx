import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Grid, Typography } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Grommet, ResponsiveContext } from "grommet";

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

function Assessment() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant={"h4"} align={"center"} className={classes.title}>
          客户评价
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
                          src="/static/images/home/JAKROO@2x.png"
                          width={244}
                          height={56}
                          alt="JAKROO"
                        />
                      </div>
                      <div>
                        <div className={classes.comma}>
                          <img
                            src="/static/images/home/“@2x.png"
                            width={46}
                            height={55}
                            alt="“"
                          />
                        </div>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          className={classes.words}
                        >
                          由R2.ai的AI技术驱动的AI Designer (人工智能设计师)
                          将彻底改变我们所知的图形设计行业。通过提供几乎无限的设计风格方案，它大大加快了定制设计流程并显着提升了我们的竞争优势。
                        </Typography>
                        <Typography variant={"subtitle2"} align={"right"}>
                          -定制服装公司首席运营官 Derek Wiseman
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
                          src="/static/images/home/pingan@2x.png"
                          width={145}
                          height={56}
                          alt="JAKROO"
                        />
                      </div>
                      <div>
                        <div className={classes.comma}>
                          <img
                            src="/static/images/home/“@2x.png"
                            width={46}
                            height={55}
                            alt="“"
                          />
                        </div>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          className={classes.words}
                        >
                          R2.ai的新一代人工智能自动建模产品正在为平安智能健康大数据分析平台赋能。我们因此得以快速、准确、自动地建立机器学习模型，充分运用大数据为个人医疗风险画像更新迭代，以有效预测并发症和风险程度。
                        </Typography>
                        <Typography variant={"subtitle2"} align={"right"}>
                          -平安医疗首席医疗官郑毅
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
                          src="/static/images/home/pingan@2x.png"
                          width={145}
                          height={56}
                          alt="JAKROO"
                        />
                      </div>
                      <div>
                        <div className={classes.comma}>
                          <img
                            src="/static/images/home/“@2x.png"
                            width={46}
                            height={55}
                            alt="“"
                          />
                        </div>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          className={classes.words}
                        >
                          R2.ai的新一代人工智能自动建模产品正在为平安智能健康大数据分析平台赋能。我们因此得以快速、准确、自动地建立机器学习模型，充分运用大数据为个人医疗风险画像更新迭代，以有效预测并发症和风险程度。
                        </Typography>
                        <Typography variant={"subtitle2"} align={"right"}>
                          -平安医疗首席医疗官郑毅
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
