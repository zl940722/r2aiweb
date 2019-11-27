import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid } from "@material-ui/core";
import { Row, Col } from "antd";

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
    color: "#999",
    lineHeight: 2,
    textAlign: "center"
  },
  items: {
    // margin: "5rem 0 1rem"
  },
  item: {
    // maxWidth: "90%",
    // boxSizing: "border-box"
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

function Mode() {
  const classes = useStyles();
  return (
    <div style={{ background: "#F5F5F5" }}>
      <div className={classes.content}>
        <p className={'all_title'} style={{margin:'49px auto'}}>合作模式</p>

        <Row>
          <Col span={8}>
            <div className={classes.item}>
              <img
                src="/static/images/partner/mode1.png"
                width={"100%"}
                alt="R2.ai"
              />
              <div style={{width:300,margin:'0 auto'}}>
                <h4 style={{ textAlign: "center", fontSize: 24, padding: 20 ,fontWeight:600 }}>渠道代理合作</h4>
                <p><b style={{  fontSize: 16 }}>经销代理商：</b><span style={{  fontSize: 14 }}>推广、经销代理R2.ai系列产品、解决方案及应用，共同为客户赋能，提升合作伙伴在人工智能市场的占有率。</span></p>
                <p><b style={{  fontSize: 16 }}>系统集成商：</b><span style={{  fontSize: 14 }}>有效整合R2.ai领先的人工智能自动建模平台和集成商/服务商/行业解决方案提供商的产品及服务，为各行业客户提供更优的一体化解决方案。</span></p>

              </div>
              <div style={{ background: "#5377AD", height: "40%", width: 1,position:'absolute',left:'400px',top:'260px' }}>{}</div>
            </div>
          </Col>
          <Col span={8}>
            {/*</Grid>*/}
            {/*<Grid item sm={4} xs={12}>*/}
            <div className={classes.item}>
              <img
                src="/static/images/partner/mode2.png"
                width={"100%"}
                alt="R2.ai"
              />
              <div style={{width:300,margin:'0 auto'}}>
                <h4 style={{ textAlign: "center", fontSize: 24, padding: 20 ,fontWeight:600 }}>商务技术合作</h4>
                <p><b style={{  fontSize: 16 }}>技术合作：</b><span style={{  fontSize: 14 }}> 强强联合，优势互补，在产品开发及技术研究上进行学术性或产业化合作，共同打造最新人工智能技术。</span></p>
                <p><b style={{  fontSize: 16 }}>商务合作：</b><span style={{  fontSize: 14 }}> 链接商务网络，共享信息资源，共同拓展市场，合作营销项目，提升各自产品在市场的知名度和占有率。</span></p>

              </div>
              <div style={{ background: "#5377AD", height: "40%", width: 1,position:'absolute',left:'400px',top:'260px' }}>{}</div>
            </div>
          </Col>
          {/*</Grid>*/}
          {/*<Grid item sm={4} xs={12}>*/}
          <Col span={8}>
            <div className={classes.item}>
              <img
                src="/static/images/partner/mode3.png"
                width={"100%"}
                alt="R2.ai"
              />
              <div style={{width:300,margin:'0 auto'}}>
              <h4 style={{ textAlign: "center", fontSize: 24, padding: 20,fontWeight:600 }}>投资战略合作</h4>
                <p><b style={{  fontSize: 16 }}>投资人：</b><span style={{  fontSize: 14 }}>  我们在加速发展，打造最新科技，加快拓展市场，致力于成为新一代人工智能领军企业。我们欢迎投资人洽谈投资机会。</span></p>
                <p><b style={{  fontSize: 16 }}>战略伙伴：</b><span style={{  fontSize: 14 }}> 我们的人工智能生态圈在不断扩大，我们愿与行业有识之士进行多方合作，共谋长远战略发展规划。</span></p>

              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Mode;
