import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Grid } from "@material-ui/core";

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
        <div className={classes.context}>
          <p className={classes.context_title}>信用卡逾期还款的自动化评定
          </p>

          <Grid container className={classes.grids}>
            <Grid item md={12} className={classes.grid}>
              <div>
                <div className={classes.icon}>
                  <img style={{ width: 24 }} src={"/static/images/appDetail/目标@2x.png"}/>
                  <span style={{ fontSize: 18, marginLeft: 10 }}>项目目标</span>
                </div>
                <p style={{ marginLeft: 34 }}>
                  通过某银行客户的个人基本资料、过去的信用数据及交易资料，依循建模的步骤，分析归纳出好客户和坏客户的特征，预测用户下个月是否会逾期还款。
                </p>
              </div>

              <div>
                <div className={classes.icon}>
                  <img style={{ width: 24 }} src={"/static/images/appDetail/成果@2x.png"}/>
                  <span style={{ fontSize: 18, marginLeft: 10 }}>项目成果</span>
                </div>
                <p style={{ marginLeft: 34 }}>

                  1.通过判断个人信用卡还款记录来判定哪些是信用良好的客户（按期还款），哪些是信用较差的客户（逾期还款），之后可以对不同用户设定不同的贷款金额，或者对信用较差的用户进行标记，以此来减少银行的损失；

                </p>
                <p style={{ marginLeft: 34 }}>
                  2.AUC与人类专家预测值持平（0.78），但是所需时间大大缩短，在30分钟内建立机器学习模型，提高了业务部门的工作效率。
                </p>
                <img style={{ width: 1100, marginBottom: 40 }} src={"/static/images/appDetail/bank3成果@2x.png"}/>
              </div>

              <div>
                <div className={classes.icon}>
                  <img style={{ width: 24 }} src={"/static/images/appDetail/过程@2x.png"}/>
                  <span style={{ fontSize: 18, marginLeft: 10 }}>
                            项目过程
                        </span>
                </div>
                <Grid container className={classes.grids}>
                  <Grid item md={6} className={classes.grid}>
                    <p>1.数据清洗： 观察数据类型，对缺失值进行填充，对分类变量和连续变量进行处理，在高级建模设置中可以对非平衡数据进行处理； </p>
                    <img style={{ width: 400 }} src={"/static/images/appDetail/bank3过程1@2x.png"}/>
                  </Grid>
                  <Grid item md={6} className={classes.grid}>
                    <p>2.
                      特征工程：
                      对所有变量进行自动化的特征工程处理，高级建模中可根据需求创建新变量，选择PCA, SVM等特征预处理；</p>
                    <img style={{ width: 400 }} src={"/static/images/appDetail/bank3过程2@2x.png"}/>
                  </Grid>
                </Grid>

                <Grid container className={classes.grids}>
                  <Grid item md={6} className={classes.grid}>
                    <p>3.
                      模型训练： 简易模式中，R2 Learn 将自动训练20多个模型；高级建模中，可以自 己选择不同算法，设置不同的数据集划分标准等；最后通过AUC等指标选择最佳模型；
                    </p>
                    <img style={{ width: 400 }} src={"/static/images/appDetail/bank3过程3@2x.png"}/>
                  </Grid>
                  <Grid item md={6} className={classes.grid}>
                    <p>4.
                      模型部署及性能检测：
                      模型训练结束后可以设定度量指标及阈值，对模型的性能进行检测，当新数据集所得到的度量值低于阈值时将会自动预警，提示用户进行新模型的训练。
                    </p>
                    <img style={{ width: 400 }} src={"/static/images/appDetail/bank3过程4@2x.png"}/>
                  </Grid>
                </Grid>

              </div>
            </Grid>

          </Grid>

        </div>
      </div>
    </>
  );
}

export default AppDetailPartOne;
