import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    width: "60%",
    lineHeight: "22px",
    margin: "0 auto",
    padding: "5rem 0",
    overflow: "hidden",
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%"
    }
  },
  title: {
    fontWeight: "bold"
  },
  context: {
    margin: "5rem 0 3rem",
    textAlign: "left"
  },
  context_title: {
    color: "#D3323E",
    fontSize: "24px",
    fontWeight: 600
  },
  icon: {
    display: "flex",
    alignItems: "center"
  },
  grids: {
    display: "flex",
    alignItems: "center"
  },
  grid: {
    flex: 1,
    // maxWidth: "17.5rem",
    margin: ".75rem"
  }
});

function AppDetailPartOne(props: any) {

  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <p className={"all_title"}>
          案例分析
        </p>
        <div className={classes.context}>
          <p className={classes.context_title}>贷款产品精准营销</p>

          <Grid spacing={8} container className={classes.grids}>
            <Grid item xs={6} className={classes.grid}>
              <div>
                <div className={classes.icon}>
                  <img style={{ width: 24 }} src={"/static/images/appDetail/mb.png"}/>
                  <span style={{ fontSize: 18, marginLeft: 10 }}>项目目标</span>
                </div>
                <p style={{ marginLeft: 34, marginTop: 20 }}>建立机器学习模型，划定“XX通”贷款产品促活广告的投放名单。
                </p>
              </div>

              <div>
                <div className={classes.icon} style={{ marginTop: 30 }}>
                  <img style={{ width: 24 }} src={"/static/images/appDetail/cg.png"}/>
                  <span style={{ fontSize: 18, marginLeft: 10}}>项目成果</span>
                </div>
                <p style={{ marginLeft: 34, marginTop: 20  }}>
                  在不流失高意愿客户的前提下，在存量客户中仅筛选出50%的白名单客户进行短信营销，大幅缩减了广告营销开支。
                </p>
              </div>
            </Grid>

            <Grid item xs={3} className={classes.grid}>
              <img style={{ width: 250 }} src={"/static/images/appDetail/zyt1.png"}/>
            </Grid>
            <Grid item xs={3} className={classes.grid}>
              <img style={{ width: 282 }} src={"/static/images/appDetail/tst.png"}/>
            </Grid>
          </Grid>

        </div>
      </div>
    </>
  );
}

export default AppDetailPartOne;
