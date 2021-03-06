import React from "react";
import { makeStyles } from "@material-ui/styles";

import {
  Grid
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#F5F5F5"
  },
  content: {
    maxWidth: "75rem",
    lineHeight: '22px',
    margin: "0 auto",
    overflow: "hidden",
    "& img": {
      maxHeight: '100%',
      maxWidth: '100%'
    },
    "& p": {
      fontSize: '14px'
    }
  },
  title: {
    fontWeight: "bold"
  },
  listItemTitle: {
    width: "12rem",
    color: "#061222",
    fontWeight: "bold",
    textAlign: "left"
  },
  listItemText: {
    fontSize: "1rem",
    lineHeight: 2
  },
  grid: {
    // margin: '.75rem',
    flex: 1
  },
  grid_img: {
    paddingTop: "1rem",
    textAlign: "center"
  },
  grid_name: {
    margin: "1.8rem 0",
    fontSize: "1.1rem",
    fontWeight: "bold"
  },
  context: {
    margin: "4rem 0 7rem",
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
  }
});

function AppDetailPartTwo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.context}>
          <div className={classes.context_title}>信用卡准入的自动化评定</div>

          <Grid container className={classes.grids}>
            <Grid item xs={12} className={classes.grid}>
              <div>
                <div className={classes.icon} style={{ marginTop: 50 }}>
                  <img style={{ width: 24 }} src={"/static/images/appDetail/mb.png"} />
                  <span style={{ fontSize: 18, marginLeft: 10, fontSizeAdjust: 18 }}>项目目标</span>
                </div>
                <p style={{ marginLeft: 34, marginBottom: 60, marginTop: 30 }}>根据银行提供的一年内个人记录构建信用卡客户的准入模型。
                </p>
              </div>

              <div style={{ marginLeft: 34 }}>
                <div className={classes.icon} style={{ marginLeft: -34 }}>
                  <img style={{ width: 24 }} src={"/static/images/appDetail/cg.png"} />
                  <span style={{ fontSize: 18, marginLeft: 10, fontSizeAdjust: 18 }}>项目成果</span>
                </div>
                <p style={{ marginTop: 30 }}>
                  1.便于业务部门普及基于机器学习的建模方法，成为专家规则等传统方法的有效补充；
                </p>
                <p style={{ marginTop: -10 }}>
                  2.构建起来的准入模型质量高，各项模型指标（AUC、KS、Recall等）均达到指定要求，对好客户和坏客户的判定都比较准确。
                </p>
                <img style={{ marginBottom: 60 }} src={"/static/images/appDetail/bank2cg.png"} />
              </div>


              <div>
                <div className={classes.icon} style={{ marginBottom: 30 }}>
                  <img style={{ width: 24 }} src={"/static/images/appDetail/gc.png"} />
                  <span style={{ fontSize: 18, marginLeft: 10, fontSizeAdjust: 18 }}>
                    项目过程
                        </span>
                </div>
                <Grid spacing={8} container className={classes.grids}>
                  <Grid item xs={6} className={classes.grid}>
                    <p style={{ display: 'flex' }}><p style={{ display: 'flex', flex: 'none' }}>1.样本收集：</p>由某银行提供的2018年164多万行、30多列变量的个人记录，其中不良率为目标变量； </p>
                    <img src={"/static/images/appDetail/b1.png"} />
                  </Grid>
                  <Grid item xs={6} className={classes.grid}>
                    <p style={{ display: 'flex' }}><p style={{ display: 'flex', flex: 'none' }}>2.数据探索：</p>用R2 Learn在正式建模前对每个变量进行可视化探索分析； </p>
                    <img src={"/static/images/appDetail/b2.png"} />
                  </Grid>
                </Grid>

                <Grid spacing={8} container className={classes.grids}>
                  <Grid item xs={6} className={classes.grid}>
                    <p style={{ display: 'flex' }}><p style={{ display: 'flex', flex: 'none' }}>3.建模设置：</p>
                      <span style={{ width: '80%' }}>在R2 Learn 中从数据分组、算法选择、速度与准确率的权衡等多个方面进行自动建模的个性化定制；</span>
                    </p>
                    <img src={"/static/images/appDetail/b3.png"} />
                  </Grid>
                  <Grid item xs={6} className={classes.grid}>
                    <p style={{ display: 'flex' }}><p style={{ display: 'flex', flex: 'none' }}>4. 最终模型评价：</p>利用R2 Learn 提供的交互报表得到最终模型的质量评价。
                    </p>
                    <img src={"/static/images/appDetail/b4.png"} />
                  </Grid>
                </Grid>

              </div>
            </Grid>

          </Grid>

        </div>
      </div>
    </div>
  );
}

export default AppDetailPartTwo;
