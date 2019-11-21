import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  content: {
    textAlign: "center",
    fontSize: "1rem",
    paddingBottom: "7rem",
    marginTop:'5rem',
  },
  title: {
    color: "#333",
    fontSize: "2rem"
  },
  main: {
    display: "flex",
    marginTop: "4.38rem",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      width: "28.4375rem",
      height: "21.625rem"
    },
    "& dl": {
      fontSize: "1rem",
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      justifyContent: "space-between",
      height: "22rem",
      width: "26rem",
      "& span,& label": {
        fontSize: "1.25rem",
        fontWight: "bold",
        display: "block",
        textAlign: "right",
        marginBottom: "1.25rem"
      },
      "& label": {
        textAlign: "left"
      },
      "& dd": {
        margin: "0 2.5rem"
      }
    }
  }
});

export default function() {
  const classes = useStyles();
  return (
    <section className={classes.content}>
      <p className={classes.title}>我们在做什么</p>
      R2.ai是帮助创造AI的AI。我们服务于银行、保险、医疗、新零售、物联网等行业，利用最先进的AI开发及应用技术，以快速、高质、简单、经济的方式为企业进行AI赋能。
      <div className={classes.main}>
        <dl>
          <dd>
            <span>银行</span>
            人工智能和机器学习为银行提供了前所未有的机会，以赢得市场份额，降低成本并增强客户体验，同时还遵守法规并打击金融犯罪。
          </dd>
          <dd>
            <span>医疗</span>
            医疗保健组织拥有数十亿个数据点，可用于以更高的准确性提供更好的结果。AI帮助医疗机构为患者提供最佳结果，同时降低成本并提高护理质量。
          </dd>
        </dl>
        <img src="/static/images/home/do.png" alt=""/>
        <dl>
          <dd>
            <label>保险</label>
            由AI驱动的保险公司有能力提高盈利能力，提高效率并创造更好的客户体验。通过以通常所需时间的一小部分来部署分析，保险公司可以降低损失率，提供更准确的定价并实现更高的转换率。
          </dd>
          <dd>
            <label>物联网</label>
            物联网是在计算机互联网的基础上，利用RFID、无线数据通信等技术构造一个覆盖世界上万事万物的“InternetofThings”。在这个网络中，物品(商品)能够彼此进行“交流”，而无需人的干预。
          </dd>
        </dl>
      </div>
    </section>
  );
}
