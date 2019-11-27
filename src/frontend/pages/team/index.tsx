import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid } from "@material-ui/core";
import "./index.css";

const useStyles = makeStyles({
  content: {
    overflow: "hidden"
  },
  content_div: {
    maxWidth: "75rem",
    margin: "0 auto",
    padding: '100px 0',
  },
  content_div2: {
    background: "#F5F5F5",
    "& :after": {
      content: ''
    }
  },
  title: {
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
    margin: "80px 0 35px",
    "& :nth-child(3n) > div": {
      marginLeft: "auto"
    },
    "& :nth-child(3n + 1) > div": {
      marginRight: "auto"
    },
    "& :nth-child(3n + 2) > div": {
      margin: "0 auto"
    }
  },
  item: {
    maxWidth: "370px",
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative"
  },
  itemDes: {
    lineHeight: 2,
    marginBottom: "3rem"
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

function HomeAbout() {
  const classes = useStyles();
  const [show, setShow] = React.useState({
    item1: false
  }) as any;
  const mouseOver = (name: any) => {

    return () => {
      setShow({
        [name]: true
      });
    };
  };

  const mouseLeave = (name: any) => {
    return () => {
      setShow({
        [name]: false
      });
      ;
    };
  };

  return (
    <>
      <div className={classes.content}>
        <div className={classes.content_div}>
          <p className={'all_title'}>核心团队</p>
          <Grid container className={classes.items} direction={"row"}>
            <Grid item xs={4}>
              <div className={classes.item}
                onMouseOver={mouseLeave("item1")}
                onMouseMove={mouseOver("item1")}
                onMouseLeave={mouseLeave("item1")}>
                <img
                  className={show.item1 ? "img_hover" : "img"}
                  src="/static/images/team/1.png"
                  width={"100%"}
                  alt="R2.ai"
                />
                <div className={"item_div"}>
                  <p>黄一文</p>
                  <p>
                    首席执行官，联合创始人
                  </p>
                  <p>黄一文具有20余年大数据和人工智能行业经验。90年代就开始书写神经网络模型。在Sybase，他为Sybase
                    ASE数据库核心引擎优化模块加入了崭新功能，并管理研发了全球第一家商用列式数据库Sybase IQ。在Teradata，他负责研发全球最早的分布式机器学习平台Teradata
                    Aster。黄一文是ASU计算机科学硕士。现在，他专注于一直让他非常着迷的事业-人工智能。</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.item}
                onMouseOver={mouseLeave("item2")}
                onMouseMove={mouseOver("item2")}
                onMouseLeave={mouseLeave("item2")}>
                <img
                  className={show.item2 ? "img_hover" : "img"}
                  src="/static/images/team/2.png"
                  width={"100%"}
                  alt="R2.ai"
                />
                <div className={"item_div"} onMouseOver={mouseLeave} onMouseMove={mouseOver} onMouseLeave={mouseLeave}>
                  <p>孟迪</p>
                  <p>
                    首席科学家，联合创始人
                  </p>
                  <p>孟迪在分析实践和统计研究方面拥有超过20年的经验。在Cigna和Kaiser
                    Permanente，孟迪负责领导机器学习算法和规定性分析的开发，为医疗行业的临床和财务运营提供精确的信息。孟迪拥有博士学位，并为他在医学，金融和经济研究方面丰富多彩的教育而感到自豪。现在他将自己的才能带到R2.ai，为更广泛的人工智能社区服务。</p>
                </div>
              </div>
            </Grid>
            {/*<Grid item xs={4}>*/}
            {/*  <div className={classes.item}>*/}
            {/*    <img*/}
            {/*      src="/static/images/team/3.png"*/}
            {/*      width={"100%"}*/}
            {/*      alt="R2.ai"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</Grid>*/}
          </Grid>
        </div>

        <div className={classes.content_div2}>
          <div className={classes.content_div}>
            <p className={'all_title'}>董事会</p>
            <Grid container className={classes.items} direction={"row"}>
              <Grid item xs={4}>
                <div className={classes.item}
                  onMouseOver={mouseLeave("item3")}
                  onMouseMove={mouseOver("item3")}
                  onMouseLeave={mouseLeave("item3")}>
                  <img
                    className={show.item3 ? "img_hover" : "img"}
                    src="/static/images/team/1.png"
                    width={"100%"}
                    alt="R2.ai"
                  />
                  <div className={"item_div"}>
                    <p>黄一文</p>
                    <p>
                      首席执行官，联合创始人
                    </p>
                    <p>黄一文具有20余年大数据和人工智能行业经验。90年代就开始书写神经网络模型。在Sybase，他为Sybase
                      ASE数据库核心引擎优化模块加入了崭新功能，并管理研发了全球第一家商用列式数据库Sybase IQ。在Teradata，他负责研发全球最早的分布式机器学习平台Teradata
                      Aster。黄一文是ASU计算机科学硕士。现在，他专注于一直让他非常着迷的事业-人工智能。</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.item}
                  onMouseOver={mouseLeave("item4")}
                  onMouseMove={mouseOver("item4")}
                  onMouseLeave={mouseLeave("item4")}>
                  <img
                    className={show.item4 ? "img_hover" : "img"}
                    src="/static/images/team/3.png"
                    width={"100%"}
                    alt="R2.ai"
                  />
                  <div className={"item_div"}>
                    <p>宣晓华</p>
                    <p>他是华院数据的创始人和主席，一家在中国最有影响力的专注于大数据和人工智能技术研发及孵化的公司。他还共同创办了eBao
                      Technology，这是一家创新的保险行业核心业务系统软件公司。在此之前，他曾在美国的惠普公司负责开发大规模电路仿真算法和商业软件。他拥有加州大学伯克利分校数学博士学位，浙江大学计算数学硕士学位，和江西科技大学数学专业学士学位。</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.item}
                  onMouseOver={mouseLeave("item5")}
                  onMouseMove={mouseOver("item5")}
                  onMouseLeave={mouseLeave("item5")}>
                  <img
                    className={show.item5 ? "img_hover" : "img"}
                    src="/static/images/team/4.png"
                    width={"100%"}
                    alt="R2.ai"
                  />
                  <div className={"item_div"}>
                    <p>林富元（源）</p>
                    <p>林富元是Acorn
                      Campus的联合创始人，硅谷创业孵化器VC基金的创始人，多维天使集团创始人(一个为创业者开设的天使创业集团)。2008-2015年，他是中国最大的医疗援助公司Healthlink
                      Services的联合创始人和主席。他同时也是慈善机构Lin Continental基金会的首席执行官,
                      和莲花教育基金会的副主席，这是一个促进中美之间东西方文化交流的非营利性机构。他拥有超过35年的天使投资经验和多次IPO经验。他在创业，国际商业，市场营销，和管理方面也有着非常丰富的历史。</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.content_div}>
          <p className={'all_title'}>顾问</p>
          <Grid container className={classes.items} direction={"row"}>
            <Grid item xs={4}>
              <div className={classes.item}
                onMouseOver={mouseLeave("item6")}
                onMouseMove={mouseOver("item6")}
                onMouseLeave={mouseLeave("item6")}>
                <img
                  className={show.item6 ? "img_hover" : "img"}
                  src="/static/images/team/5.png"
                  width={"100%"}
                  alt="R2.ai"
                />
                <div className={"item_div"}>
                  <p>Jason G. Cooper</p>
                  <p>Cooper先生是他自己的咨询公司的所有者和董事总经理。他是一名具有20多年的影响力的资深的商业管理人员。擅长数据，分析，信息和技术，所涉领域涵盖营利性，非营利性和政府部门，其中包括Blue
                    Cross Blue Shield，Cigna和CVS
                    Health的高级领导职位。Cooper先生是国际分析研究所和美国医疗保健信息和管理系统协会的成员。他拥有计算机科学和生物医学工程硕士学位。</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

      </div>
    </>
  );
}

export default HomeAbout;
