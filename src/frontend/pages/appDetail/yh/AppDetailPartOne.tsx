import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    maxWidth: "55rem",
    margin: "0 auto",
    padding: "5rem 0",
    overflow: "hidden"
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
    fontSize: "1.2rem",
    fontWeight: 600
  },
  icon: {
    display: "flex",
    alignItems: "center"
  },
  grids: {
    display: 'flex',
    alignItems: 'center'
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
        <Typography variant={"h4"} align={"center"} className={classes.title}>
          案例分析
        </Typography>
        <div className={classes.context}>
          <p className={classes.context_title}>贷款产品精准营销</p>

          <Grid container className={classes.grids}>
            <Grid item md={4} className={classes.grid}>
              <div>
                <div className={classes.icon}>
                  <img style={{ width: 24 }} src={"/static/images/appDetail/目标@2x.png"}/>
                  <span style={{ fontSize: 18, marginLeft: 10 }}>项目目标</span>
                </div>
                <p style={{ marginLeft: 34 }}>建立机器学习模型，划定“XX通”贷款产品促活广告的投放名单。
                </p>
              </div>

              <div>
                <div className={classes.icon}>
                  <img style={{ width: 24 }} src={"/static/images/appDetail/成果@2x.png"}/>
                  <span style={{ fontSize: 18, marginLeft: 10 }}>项目成果</span>
                </div>
                <p style={{ marginLeft: 34 }}>
                  在不流失高意愿客户的前提下，在存量客户中仅筛选出50%的白名单客户进行短信营销，大幅缩减了广告营销开支。
                </p>
              </div>
            </Grid>

            <Grid item md={4} className={classes.grid}>
                <img style={{ width: 250 }} src={"/static/images/appDetail/IoT成果@2x.png"}/>
              </Grid>
              <Grid item md={4}>
                <img style={{ width: 250 }} src={"/static/images/appDetail/IoT成果@2x.png"}/>
              </Grid>
          </Grid>

        </div>
      </div>
    </>
  );
}

export default AppDetailPartOne;
