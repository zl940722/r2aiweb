import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grommet, Button } from "grommet";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    maxWidth: "75rem",
    margin: "0 auto",
    padding: "1.5rem 0 8.8rem",
    overflow: "hidden"
  },
  buttonWrap: {
    width: "100%",
    marginTop: "5rem",
    paddingLeft: "0.5rem",
    textAlign:'center'
  },
  button: {
    width: "13.6rem",
    height: "4.5rem",
    fontWeight: "bold",
  },
  title: {
    padding: "3rem",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center"
  },
  des: {
    fontSize: "1rem",
    color: "#999",
    lineHeight: 2,
    textAlign: "center"
  },
  items: {
    margin: "5rem 0 1rem"
  },
  item: {
    maxWidth: "90%",
    boxSizing: "border-box"
  },
  itemDes: {
    lineHeight: 2
  },
  itemTitle: {
    marginBottom: "3rem",
    fontWeight: "bold"
  },
  itemTitle2: {
    marginTop: "3rem",
    fontWeight: "bold"
  }
});
const customTheme = {
  button: {
    border: {
      width: "3px",
      radius: "2.3rem"
    },
    color: "#2C4159"
  },
  text: {
    medium: {
      size: "1.8rem"
    }
  },
  global: {
    hover: {
      color: "#FFF",
      background: "#2C4159"
    },
    colors: {
      brand: "#2C4159"
    }
  },
  video: {
    scrubber: {
      color: "#2C4159"
    }
  }
};

function Index() {
  const classes = useStyles();
  return (
    <div style={{ background: "#fff" }}>
      <div className={classes.content}>
        <Typography className={classes.title}>零基础机器学习</Typography>
        <p>
          课程描述（为什么要学习AI）：
        </p>
        <p>
          AI /机器学习不仅适用于工程师或数据科学家。 如果您希望您的组织更好地使用AI，或者希望自己为将来的工作做好准备，那么您可以从头开始学些AI及机器学习的相关知识。
          本课程面向没有任何AI /机器学习技术背景的人。在整个课程中，我们将提供真实的实例和实践练习，帮助您逐步学习机器学习，监督学习，无监督学习，模型评估和改进，机器学习过程和构建AI / ML项目的基础知识。
          在课程结束时，我们将为您提供与机器学习相关的职业发展建议。
        </p>
        <p>
          主要内容:
        </p>
        <p>

          · 从头学习机器学习/ AI的基础知识
        </p>
        <p>
          · 通过真实经典案例掌握AI/ML的关键流程
        </p>
        <p>
          · 上手操作构建AI/ML项目
        </p>
        <p>
          · 了解如何追求AI/机器学习相关职业发展规划及建议
        </p>
        <p>
          适用对象：
        </p>
        <p>
          任何想要了解机器学习的人。 不需要任何技术背景。
        </p>
        <p>
          课程形式：
        </p>
        <p>
          在线/课堂
        </p>
        <p>
          师资力量：
        </p>
        <p>
          william
          周，曾任中国质量协会六西格玛专家委员会专家委员、上海财经大学统计与管理学院应用统计硕士研究生导师。技术经济及管理学硕士，电子学与信息系统学士。精通量化管理的理念与实践，擅长探索性数据分析、实验设计、建模预测、生存与可靠性分析、大数据分析、市场调查等统计分析方法在实际工作中的应用。
        </p>
        <p>
          课程内容安排：
        </p>
        <p>
          <span style={{ color: "red" }}>*</span>
          <p>注：本培训可以每周一课，每节课2.5小时。</p>
          <p>
            1.课程概述及相关软件；</p>
          <p>简介：什么是ML，相关问题，数据和工具。</p>

          <p>2.监督学习概述；</p>
          <p>分类和回归问题；</p>
          <p>监督学习算法的主要示例：例如 回归问题的线性回归; 随机森林的分类和回归问题等。</p>

          <p>3.无监督学习概述；</p>
          <p>聚类和关联问题和案例；</p>
          <p> 监督学习算法的主要示例：例如 k-means用于聚类问题等的方法；</p>
          <p>案例研究：检索文档。</p>

          <p>4.机器学习过程；
          </p>
          <p>传统ML与AutoML的比较；
          </p>
          <p>模型部署；</p>
          <p>AutoML演示：R2 Learn。
          </p>
          <p>5.模型评估和改进。
          </p>
          <p> 6.建立AI / ML项目</p>
          <p>· 机器学习项目的工作流程</p>
          <p> · 数据科学项目的工作流程</p>
          <p> · 如何选择AI项目</p>
          <p>· 如何与AI团队合作</p>
          <p>· 如何选择AI / ML供应商</p>
        </p>
        <p>7.职业生涯会议将涵盖：</p>
        <p>
          · AI / ML行业概述以及未来20年需要哪些人才
          · 成为机器学习工程师/数据科学家/数据分析师有哪些具体要求
          · 你应该学什么课程？ 你应该选择什么专业？
        </p>
        <p style={{ color: "#D3323E" }}>
          授课结束后表现良好者颁发由来自美国硅谷高科技企业R2.ai颁发的结业证书。表现良好者有机会赴R2.ai上海、杭州分公司参观学习、实习。表现良好者有机会成为R2.ai特聘顾问。期待您的加入！
        </p>
        <Grommet className={classes.buttonWrap} theme={customTheme}>
          <Button
            hoverIndicator
            label={"立即报名"}
            className={classes.button}
          />
        </Grommet>
      </div>

    </div>
  );
}

export default Index;
