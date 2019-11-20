import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    maxWidth: "75rem",
    margin: "0 auto",
    padding: ".5rem 0 13rem",
    overflow: "hidden"
  },
  title: {
    margin: "4rem 0",
    fontWeight: "bold"
  },
  grids: {
    maxWidth: "76.6rem",
    margin: "0 auto"
  },
  grid: {
    flex: 1,
    // maxWidth: "17.5rem",
    margin: ".75rem",
    padding: "1rem 1rem 3rem",
    border: "1px solid #CCC"
  },
  grid_img: {
    paddingTop: "1rem",
    textAlign: "center"
  },
  grid_title: {
    margin: "1.8rem 0",
    fontSize: "1.1rem",
    fontWeight: "bold"
  },
  grid_body: {
    lineHeight: 2
  }
});

function ProductGrids() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <Typography variant={"h4"} align={"center"} className={classes.title}>
          R2 Learn直击人工智能应用痛点
        </Typography>
        <Grid container className={classes.grids}>
          <Grid item md={3} className={classes.grid}>
            <div className={classes.grid_img}>
              <img
                src="/static/images/products/icon1@2x.webp"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <Typography
              variant={"subtitle1"}
              align={"center"}
              className={classes.grid_title}
            >
              真正全流程自动机器学习建模
            </Typography>
            <Typography variant={"body2"} className={classes.grid_body}>
              数据质量：自动数据质量检查和修复；
              <br/>
              数据探索：自动探索了解数据的关键属性；
              <br/>
              特征预处理：丰富的自动数据特征预处理；
              <br/>
              模型培训：自动模型培训和验证；
              <br/>
              模型结果分析：按需自动分析和模型推荐；
              <br/>
              模型洞察：自动提取并呈现模型洞察。
            </Typography>
          </Grid>
          <Grid item md={3} className={classes.grid}>
            <div className={classes.grid_img}>
              <img
                src="/static/images/products/icon2@2x.webp"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <Typography
              variant={"subtitle1"}
              align={"center"}
              className={classes.grid_title}
            >
              灵活便捷的模型部署和监控
            </Typography>
            <Typography variant={"body2"} className={classes.grid_body}>
              模型部署：批量和实时部署模式；
              <br/>
              模型操作监控：监控模型操作的运行状况，并在出现问题时自动向用户发出警报；
              <br/>
              模型性能监控：检测模型性能下降信号，并在必要时重新优化模型。
              <br/>
            </Typography>
          </Grid>
          <Grid item md={3} className={classes.grid}>
            <div className={classes.grid_img}>
              <img
                src="/static/images/products/icon3@2x.webp"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <Typography
              variant={"subtitle1"}
              align={"center"}
              className={classes.grid_title}
            >
              高级功能可供自定义建模
            </Typography>
            <Typography variant={"body2"} className={classes.grid_body}>
              使用自定义设置进行实验；
              <br/>
              构建复杂的特征处理；
              <br/>
              使用模型指标和图表分析建模结果；
              <br/>
              能够根据业务需求对每一个建模流程中的细节进行人工干预、调整。
              <br/>
            </Typography>
          </Grid>
          <Grid item md={3} className={classes.grid}>
            <div className={classes.grid_img}>
              <img
                src="/static/images/products/icon4@2x.webp"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <Typography
              variant={"subtitle1"}
              align={"center"}
              className={classes.grid_title}
            >
              真正全流程自动机器学习建模
            </Typography>
            <Typography variant={"body2"} className={classes.grid_body}>
              既适用于机器学习专家，更适用于业务分析人员；
              <br/>
              建模周期从“月/周”级缩短到“小时/分钟”级，大幅降低试错成本；
              <br/>
              以较少硬件资源即可计算出最佳预测模型，模型质量更优。
              <br/>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ProductGrids;
