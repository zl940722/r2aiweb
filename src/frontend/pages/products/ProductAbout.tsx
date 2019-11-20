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
  subtitle: {
    marginTop: "1.2rem"
  },
  product_body1: {
    maxWidth: "42rem",
    margin: "3rem auto",
    lineHeight: 2,
    "@global": {
      span: {
        display: "list-item"
      }
    }
  },
  product_body2: {
    maxWidth: "42rem",
    margin: "0 auto",
    lineHeight: 2
  },
  product_img: {
    margin: "5rem 0",
    textAlign: "center",
    "& >img": {
      maxWidth: "100%",
      maxHeight: "100%"
    }
  }
});

function ProductAbout() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <Typography variant={"h4"} align={"center"} className={classes.title}>
          R2 Learn赋能企业自主开发AI应用
        </Typography>
        <Typography
          variant={"h5"}
          align={"center"}
          className={classes.subtitle}
        >
          R2 Learn领跑新一代的AutoML
        </Typography>
        <Typography variant={"body1"} className={classes.product_body1}>
          <span>  端到端的AI解决方案，自动完成从数据清洗到模型搭建和部署的所有步骤，提供一站式服务；
          </span>
          <span>
            优化引擎功能，能用最少的算力快速高效地筛选最佳算法，建立最适合的机器学习模型；
          </span>
          <span>
            出众的自我学习能力，比肩人类数据科学家，能够在运营过程中不断学习改进建模流程。
          </span>
        </Typography>
        <Typography variant={"body1"} className={classes.product_body2}>
          使用R2 Learn非常简单。您只需输入数据和定义问题，余下的工作都由R2
          Learn为您完成。
          <br/>
        </Typography>
        <div className={classes.product_img}>
          <img
            src="/static/images/products/product.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default ProductAbout;
