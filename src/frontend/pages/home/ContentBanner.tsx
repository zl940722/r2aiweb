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

export default function ContentBanner(res: any) {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{ backgroundImage: "url(/static/images/home/1920_2@2x.png)" }}
    >
      <div className={classes.content}>
        <Typography className={classes.title}>{(res.content && res.content[0].en) || ""}</Typography>
        <Typography className={classes.des}>
          {(res.content && res.content[1].en) || ""}
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
