import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography } from "@material-ui/core";
import { Grommet, Box, Button } from "grommet";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "28rem",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 center",
    backgroundSize: "cover"
  },
  content: {
    maxWidth: "75rem",
    margin: "0 auto",
    paddingTop: "3rem",
    color: "#FFF",
    overflow: "hidden"
  },
  title: {
    margin: "3rem 0",
    fontSize: "2.25rem",
    fontWeight: "bold",
    textAlign: "center"
  },
  des: {
    fontSize: "1rem",
    lineHeight: 2,
    textAlign: "center"
  },
  buttonWrap: {
    width: "100%",
    paddingTop: "2.5rem"
  },
  button: {
    width: "10.5rem",
    height: "3.2rem",
    fontWeight: "bold"
  }
});

const customTheme = {
  button: {
    border: {
      radius: "1.6rem"
    },
    color: "#FFF"
  },
  global: {
    hover: {
      color: "#2C4159",
      background: "#FFF"
    },
    colors: {
      brand: "#FFF"
    }
  }
};

export default function ContentBanner() {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{ backgroundImage: "url(/static/images/home/1920_2@2x.png)" }}
    >
      <div className={classes.content}>
        <Typography className={classes.title}>R2 Learn云平台上线</Typography>
        <Typography className={classes.des}>
          开启全新建模体验，R2.ai推出网上产品公开试用和付费订阅；不管您是从事数据科学，模型开发，大数据分析或是商业预测分析工作，您都可以亲身体验使用R2
          Learn建模平台建立精准机器学习模型。
        </Typography>
        <Grommet theme={customTheme} className={classes.buttonWrap}>
          <Box align="center" pad="medium">
            <Button
              hoverIndicator
              label={"立即试用"}
              className={classes.button}
            />
          </Box>
        </Grommet>
      </div>
    </div>
  );
}
