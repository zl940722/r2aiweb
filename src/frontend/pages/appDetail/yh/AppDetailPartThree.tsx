import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    width: "60%",
    margin: "0 auto",
    lineHeight: "22px",
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
    fontWeight: 600
  },
  icon: {
    display: "flex",
    alignItems: "center"
  },
  grids: {
    display: "flex"
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

          <Grid spacing={8} container className={classes.grids}>
            <Grid item xs={12} className={classes.grid}>
              <div>
                <div className={classes.icon}>
                  <img style={{ width: 24 }} src={"/static/images/appDetail/mb.png"}/>
                  <span style={{ fontSize: 18, marginLeft: 10 }}>项目目标</span>
                </div>
                <p style={{ marginLeft: 34, marginTop: 20 }}>
                  通过某银行客户的个人基本资料、过去的信用数据及交易资料，依循建模的步骤，分析归纳出好客户和坏客户的特征，预测用户下个月是否会逾期还款。
                </p>
              </div>

              <div style={{ marginLeft: 34 }}>
                <div className={classes.icon} style={{ marginLeft: -34 }}>
                  <img style={{ width: 24 }} src={"/static/images/appDetail/cg.png"}/>
                  <span style={{ fontSize: 18, marginLeft: 10 }}>项目成果</span>
                </div>
                <p style={{marginTop:20}}>

                  1.通过判断个人信用卡还款记录来判定哪些是信用良好的客户（按期还款），哪些是信用较差的客户（逾期还款），之后可以对不同用户设定不同的贷款金额，或者对信用较差的用户进行标记，以此来减少银行的损失；
                </p>
                <p>
                  2.AUC与人类专家预测值持平（0.78），但是所需时间大大缩短，在30分钟内建立机器学习模型，提高了业务部门的工作效率。
                </p>
                <img style={{ marginBottom: 40 }} src={"/static/images/appDetail/bank3cg.png"}/>
              </div>

              <div>
                <div className={classes.icon}>
                  <img style={{ width: 24 }} src={"/static/images/appDetail/gc.png"}/>
                  <span style={{ fontSize: 18, marginLeft: 10 }}>
                            项目过程
                        </span>
                </div>
                <Grid spacing={8} container className={classes.grids}>
                  <Grid item xs={6} className={classes.grid}>
                    <p><p style={{float:'left'}}>1.数据清洗： </p>
                      观察数据类型，对缺失值进行填充，对分类变量和连续变量进行处理，在高级建模设置中可以对非平衡数据进行处理； </p>
                    <img src={"/static/images/appDetail/bank3gc1.png"}/>
                  </Grid>
                  <Grid item xs={6} className={classes.grid}>
                    <p>
                      <p style={{float:'left'}}>2. 特征工程： </p>
                      对所有变量进行自动化的特征工程处理，高级建模中可根据需求创建新变量，选择PCA, SVM等特征预处理；</p>
                    <img src={"/static/images/appDetail/bank3gc2.png"}/>
                  </Grid>
                </Grid>

                <Grid spacing={8} container className={classes.grids}>
                  <Grid item xs={6} className={classes.grid}>
                    <p>
                      <p style={{float:'left'}}>3. 模型训练： </p> 简易模式中，R2 Learn 将自动训练20多个模型；高级建模中，可以自 己选择不同算法，设置不同的数据集划分标准等；最后通过AUC等指标选择最佳模型；
                    </p>
                    <img src={"/static/images/appDetail/bank3gc3.png"}/>
                  </Grid>
                  <Grid item xs={6} className={classes.grid}>
                    <p>
                      <p style={{float:'left'}}>4. 模型部署及性能检测： </p>
                      模型训练结束后可以设定度量指标及阈值，对模型的性能进行检测，当新数据集所得到的度量值低于阈值时将会自动预警，提示用户进行新模型的训练。
                    </p>
                    <img src={"/static/images/appDetail/bank3gc4.png"}/>
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
