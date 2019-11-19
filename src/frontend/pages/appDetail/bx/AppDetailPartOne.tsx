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
  const id: any = props.router.asPath.split('=');
  let imgUrl: any = '';
  switch (id[1]) {
    case '1':
      imgUrl = "/static/images/appDetail/我们能做什么.png";
      break;
    case '2':
      imgUrl = "/static/images/appDetail/医疗.png";
      break;
    case '3':
      imgUrl = "/static/images/appDetail/金融.png";
      break;
    case '4':
      imgUrl = "/static/images/appDetail/新兴行业.png";
      break;
    case '5':
      imgUrl = "/static/images/appDetail/汽车.png";
      break;
    case '6':
      imgUrl = "/static/images/appDetail/物流.png";
      break;
    case '7':
      imgUrl = "/static/images/appDetail/制药.png";
      break;
    case '8':
      imgUrl = "/static/images/appDetail/电信.png";
      break;
    case '9':
      imgUrl = "/static/images/appDetail/环境.png";
      break;

  }
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <Typography variant={"h4"} align={"center"} className={classes.title}>
          我们能做什么
        </Typography>
        <div className={classes.img}>
          <img
            src={"/static/images/appDetail/我们能做什么.png"}
            width={"100%"}
            alt="AI 保险"
          />
        </div>
      </div>
    </>
  );
}

export default AppDetailPartOne;
