import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    maxWidth: "65%",
    margin: "0 auto",
    padding: "5rem 0",
    overflow: "hidden",
    "& img": {
      maxHeight: "100%",
      maxWidth: "100%"
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
    fontWeight: 600,
    marginBottom: 50
  },
  icon: {
    display: "flex",
    alignItems: "center"
  },
  grids: {},
  grid: {
    flex: 1,
    // maxWidth: "17.5rem",
    padding: ".75rem"
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
          <div className={classes.context_title}>某风电公司风机故障定位</div>
          <div style={{ marginBottom: 75 }}>
            <div className={classes.icon}>
              <img style={{ width: 24 }} src={"/static/images/appDetail/mb.png"} />
              <span style={{ fontSize: 18, marginLeft: 10 }}>项目目标</span>
            </div>
            <p style={{ marginLeft: 34, marginTop: 30 }}>某公司的风机运行中发现实际发电量与理论发电量相比误差较大（发电量损失），需定位量化分析可能造成该误差原因，为误差控制和后期维护提供参考。</p>
          </div>

          <div style={{ marginLeft: 34, marginBottom: 75 }}>
            <div className={classes.icon} style={{ marginLeft: -34 }}>
              <img style={{ width: 24 }} src={"/static/images/appDetail/cg.png"} />
              <span style={{ fontSize: 18, marginLeft: 10 }}>项目成果</span>
            </div>
            <p style={{ marginTop: 30 }}>
              1.建立误差回归模型，实现实时量化预测发电量误差范围，并且能达到0.77的预测精度，（过去为根据时间段，人工统计阶段性误差）；
            </p>
            <p >
              2.发现风机因子对造成理论与实际误差的影响作用，并挖掘出因子组合的重要性排序。
            </p>
            <img style={{ width: 896 }} src={"/static/images/appDetail/IoT1.png"} />
          </div>


          <div style={{ marginLeft: 34, marginBottom: 75 }}>
            <div className={classes.icon} style={{ marginLeft: -34 }}>
              <img style={{ width: 24 }} src={"/static/images/appDetail/gc.png"} />
              <span style={{ fontSize: 18, marginLeft: 10 }}>
                项目过程
                        </span>
            </div>
            <Grid  spacing={8} container className={classes.grids}>
              <Grid item md={6} className={classes.grid}>
                <p>1.样本收集：30组风机运行数据每组4万条记录；</p>
                <img src={"/static/images/appDetail/33.png"} />
              </Grid>
              <Grid item md={6} className={classes.grid}>
                <p>2.创建目标变量：根据误差范围，选取有效范围内数据；</p>
                <img src={"/static/images/appDetail/34.png"} />
              </Grid>
            </Grid>

            <Grid container className={classes.grids}>
              <Grid item md={6} className={classes.grid}>
                <p>3.数据处理： 在有效数据内剔除异常值；</p>
                <img src={"/static/images/appDetail/35.png"} />
              </Grid>
              <Grid item md={6} className={classes.grid}>
                <p>4.模型训练：
                  基于R2-Learn机器学习平台自动训练；
                  <p style={{marginLeft:85}}>使用单机环境，每组数据在30分钟内完成训练（10个备选模型）；</p>
                </p>
                <img src={"/static/images/appDetail/36.png"} />
              </Grid>
            </Grid>

            <Grid  spacing={8} container className={classes.grids}>
              <Grid item md={12} className={classes.grid}>
                <p>5.
                   测试评估：
                  使用20%样本数据测试建模结果，拟合R-Square=0.749。</p>
              </Grid>
            </Grid>
          </div>


          <div style={{ marginLeft: 34 }}>
            <div className={classes.icon} style={{ marginLeft: -34 }}>
              <img style={{ width: 24 }} src={"/static/images/appDetail/37.png"} />
              <span style={{ fontSize: 18, marginLeft: 10 }}>
                结果分析
                        </span>
            </div>


            <Grid  spacing={8} container className={classes.grids}>
              <Grid item md={6} className={classes.grid}>
                <p>1.风机因子对发电量误差的影响：
                  通过风机因子对模型的重要性排序可以发现某些因子，如变桨电机扭矩、半导体温度是造成发电量损失的主要因素，需格外关注与维护； </p>
                <img src={"/static/images/appDetail/38.png"} />
              </Grid>
              <Grid item md={6} className={classes.grid}>
                <p>2. 发电量误差对风机单因子的响应： 以变桨电机扭矩为例，其分布范围集中在5~10之间，变桨电机扭矩在此范围内变化，其对应的发电量误差变化如有图所示。因此通过对单因子的监控，可有效实时地预测可能造成的发电量损失；
                </p>
                <img src={"/static/images/appDetail/39.png"} />
              </Grid>
            </Grid>

            <Grid container className={classes.grids}>
              <Grid item md={12} className={classes.grid}>
                <p>3.
                  风机因子组合对发电量误差的影响分数：
                  采用因子间相关系数分析对其分组，统计同组因子对发电量误差的综合影响。结果发现同组内因子综合影响差异显著，根据不同组别优先级进行因子监控。
                </p>
                <img src={"/static/images/appDetail/40.png"} />
              </Grid>
            </Grid>
          </div>

        </div>
      </div>
    </>
  );
}

export default AppDetailPartOne;
