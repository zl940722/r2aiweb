import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography } from "@material-ui/core";
import { Grommet, Box, Button } from "grommet";
import Router from "next/router";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "28rem",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 center",
    backgroundSize: "cover"
  },
  content: {
    float: "right",
    paddingTop: "3rem",
    color: "#FFF",
    overflow: "hidden",
    marginRight: "25%"
  },
  title: {
    margin: "3rem 0",
    fontSize: "2.25rem",
    fontWeight: "bold",
    textAlign: "right"
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

export default function ContentBanner(res: any) {
  const classes = useStyles();
  const toBuy = () => {

    Router.push({
      pathname: "/toUse",
      query: {
        id: res.user.id
      }
    });
  };

  return (
    <div
      className={classes.root}
      style={{ backgroundImage: "url(/static/images/products/r2Learn.png)" }}
    >
      <div className={classes.content}>
        <Typography className={classes.title}>R2 Learn云平台上线</Typography>
        <Typography className={classes.des}>
          R2 Learn 公开免费试用，开启全新建模体验！<br/>助您快速建立高质量机器学习模型！
        </Typography>
        <Grommet theme={customTheme} className={classes.buttonWrap}>
          <Box align="center" pad="medium">
            <Button
              hoverIndicator
              disabled={!res.user.active}
              onClick={toBuy}
              label={"立即试用"}
              className={classes.button}
            />
          </Box>
        </Grommet>
      </div>
    </div>
  );
}
