import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#344155",
    padding: 31,
    color: "#FFF"
  },
  content: {
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center"
  },
  copyright: {
    margin: "0 20px",
    textAlign: "left"
  },
});

function Copyright() {
  // @ts-ignore
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <img
          src="/static/images/common/wechat@2x.png"
          width={68}
          height={68}
          alt="R2.ai"
        />
        <div className={classes.copyright}>
          <Typography variant={"caption"} component={"p"}>
            杭州睿拓智能科技有限公司
          </Typography>
          <Typography variant={"caption"} component={"p"}>
            @2019 R2.ai INC 版权所有 <a target='_blank' href='http://www.beian.miit.gov.cn/'>浙ICP备18053463号</a>
          </Typography>
          <Typography variant={"caption"} component={"p"}>
            contact@r2.ai
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return <Copyright/>;
}
