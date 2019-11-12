import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    maxWidth: "75rem",
    margin: "0 auto",
    padding: "5rem 0",
    overflow: "hidden"
  },
  title: {
    fontWeight: "bold"
  },
  img: {
    margin: "5rem 0 3rem",
    textAlign: "center"
  }
});

function AppDetailPartOne(props: any) {

  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <Typography variant={"h4"} align={"center"} className={classes.title}>
          我们能做什么
        </Typography>
        <div className={classes.img}>
          <img
            src={"/static/images/appDetail/我们能做什么@2x.png"}
            width={"100%"}
            alt="AI 保险"
          />
        </div>
      </div>
    </>
  );
}

export default AppDetailPartOne;
