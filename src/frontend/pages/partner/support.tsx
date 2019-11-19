import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid, Card } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    maxWidth: "75rem",
    margin: "0 auto",
    padding: "1.5rem 0 8.8rem",
    overflow: "hidden"
  },
  title: {
    padding: "3rem",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center"
  },
  des: {
    fontSize: "1rem",
    color: "#0C151B",
    lineHeight: 2,
    textAlign: "center"
  },
  items: {
    margin: "5rem 0 1rem"
  },
  item: {
    maxWidth: "90%",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    alignItems: "center",
    height: "23rem"
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

function Supports() {
  const classes = useStyles();
  return (
    <div style={{ background: "#fff" }}>
      <div className={classes.content}>
        <Typography className={classes.title}>合作伙伴支持</Typography>
        <Typography
          className={classes.des}>R2.ai提供世界领先的AutoML开发和运营技术，可以轻松整合到系统集成商/服务商/行业解决方案提供商的解决方案中或镶嵌入OEM产品中，以改善整体客户体验和提升对客户的价值主张。</Typography>
        <Grid container className={classes.items} direction={"row"}>

          <Grid item sm={3} xs={12}>
            <Card style={{ margin: 10 }}>
              <div className={classes.item}>
                <img
                  style={{ marginBottom: 20 }}
                  src="/static/images/partner/icon@2x.png"
                  width={"104px"}
                  alt="R2.ai"
                />
                <h4 style={{ textAlign: "center" }}>解决方案</h4>
                <p style={{ padding: 10 }}>
                  充分发挥R2领先的AI开发和落地技术，<br/>
                  提供各行业AI赋能解决方案。<br/>
                  提供具体场景建模流程和应用部署介绍。<br/>
                </p>
              </div>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card style={{ margin: 10 }}>
              <div className={classes.item}>
                <img
                  style={{ marginBottom: 20 }}
                  src="/static/images/partner/icon@2x-1.png"
                  width={"104px"}
                  alt="R2.ai"
                />
                <h4 style={{ textAlign: "center" }}>技术培训</h4>
                <p style={{ padding: 10 }}>
                  基于R2.ai人工智能建模平台的全套技术培训，包括产品演示、建模调参、特征工程、模型部署等，以助渠道合作伙伴快速掌握技术优势、加以整合运用<br/>
                  提供客户端解决方案实施过程中的技术支持与咨询。<br/>
                </p>
              </div>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card style={{ margin: 10 }}>
              <div className={classes.item}>
                <img
                  style={{ marginBottom: 20 }}
                  src="/static/images/partner/icon@2x-2.png"
                  width={"104px"}
                  alt="R2.ai"
                />
                <h4 style={{ textAlign: "center" }}>市场营销</h4>
                <p style={{ padding: 10 }}>
                  R2.ai提供强有力的品牌宣传和多渠道的营销方式，与合作伙伴分享市场营销资料、市场调研信息，共同挖掘发展潜在客户。<br/>
                  合作营销，和合作伙伴进行多种方式的联合营销计划，共同作市场推广，实现共赢。<br/>
                </p>
              </div>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card style={{ margin: 10 }}>
              <div className={classes.item}>
                <img
                  style={{ marginBottom: 20 }}
                  src="/static/images/partner/icon@2x-3.png"
                  width={"104px"}
                  alt="R2.ai"
                />
                <h4 style={{ textAlign: "center" }}>优惠奖励</h4>
                <p style={{ padding: 10 }}>
                  基于合作伙伴的资质及渠道拓展能力，配以富有竞争力的不同级别的价格优惠和利润共享。<br/>
                  对优秀渠道合作伙伴进行年度奖励，以及技术培训和市场营销上的重点支持。<br/>
                </p>
              </div>
            </Card>
          </Grid>


        </Grid>
      </div>
    </div>
  );
}

export default Supports;
