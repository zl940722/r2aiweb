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
        <p className={'all_title'}>
          我们能做什么
        </p>
        <div className={classes.img}>
          <img
            src={"/static/images/appDetail/22.png"}
            width={"100%"}
            alt="AI 保险"
          />
        </div>
      </div>
    </>
  );
}

export default AppDetailPartOne;
