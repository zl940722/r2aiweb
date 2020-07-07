import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid, Card } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    maxWidth: "100%",
    margin: "0 auto",
    // padding: "1.5rem 0 8.8rem",
    overflow: "hidden",
    paddingTop: 70
  },
  content1: {
    maxWidth: "75rem",
    margin: "0 auto",
    // padding: "1.5rem 0 8.8rem",
    padding: "90px 0 140px 0",
    overflow: "hidden",
    textAlign: "left"
  },
  content1_add: {
    maxWidth: "75rem",
    margin: "0 auto",
    // padding: '60px 0 100px 0',
    overflow: "hidden",
    height: 400,
    textAlign: "left"
  },
  content2: {
    padding: "90px 0 140px 0",
    maxWidth: "100%",
    background: "#F5F5F5"
  },
  content3: {
    maxWidth: "75rem",
    margin: "0 auto",
    // padding: "1.5rem 0 8.8rem",
    overflow: "hidden",
    textAlign: "left"
  },
  title: {
    // padding: "1.5rem",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center"
  },
  title_add: {
    // paddingTop:'2.5rem',
    marginBottom: "-50px",
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
    margin: "0 0 1rem",
    display: "flex",
    alignItems: "center"
  },
  imageItem: {
    maxWidth: "90%",
    boxSizing: "border-box",
    alignItems: "center",
    "& >img": {
      maxHeight: "100%",
      maxWidth: "100%"
    }
  },
  item: {
    maxWidth: "90%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    margin: "0 auto"
  },
  itemC: {
    maxWidth: "90%",
    boxSizing: "border-box",
    display: "flex",
    padding: "0 10px",
    flexFlow: "column",
    height: "100%",
    justifyContent: "space-evenly"
  },
  itemDes: {
    lineHeight: 2,
    // marginBottom: "3rem",
    textAlign: "left",
    padding: "20px 0",
    fontSize: 16
  },
  itemTitle: {
    marginBottom: "3rem",
    fontWeight: "bold"
  },
  itemTitle2: {
    marginTop: "3rem",
    fontWeight: "bold"
  },
  card: {
    height: "150px",
    display: "flex",
    flex: "auto",
    flexDirection: "column",
    padding: "26px 10px 26px 40px",
    position: "relative",
    justifyContent: "space-evenly",
  },
  cardText: {
    fontSize: 14
  },
  icon: {
    position: "absolute",
    left: 15
  }
});

function HomeAbout() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <div className={classes.content1}>
          <p className={"all_title"}>公司概况</p>
          <Grid container className={classes.items} direction={"row"}>
            <Grid item xs={6}>
              <div className={classes.imageItem}>
                <img
                  src="/static/images/company/1.png"
                  alt="R2.ai"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.itemC} style={{ marginLeft: "auto" }}>
                <Typography variant={"body1"} className={classes.itemDes}>
                  2015年，R2.ai由一群在AI和数据科学领域内最杰出、最富有想象力的团队在硅谷建立。他们致力于将大胆的创意转化为复杂现实中的实际应用。R2.ai的使命是为AI在各行业的应用赋能，大规模推动AI的普及和发展。
                </Typography>
                <Typography variant={"body1"} className={classes.itemDes}>
                  R2.ai是帮助创造AI的AI。该公司是新一代人工智能开发和运营平台的始创者，其尖端的AI技术可以助您自动构建精准的机器学习模型，让企业拥有自主开发AI应用的能力。
                </Typography>
                <Typography variant={"body1"} className={classes.itemDes}>
                  作为扎根于长三角的本地化人工智能企业，R2.ai在上海、杭州分别设有公司，同时兼具硅谷基因，拥有全球最先进的高精尖AI技术，致力于推动人工智能在各行业的颠覆式创新和跨越式发展。
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={classes.content2}>
          <div className={classes.content3}>
            <p className={"all_title"}>企业文化</p>
            <Grid container className={classes.items} direction={"row"}>

              <Grid item xs={6}>
                <div className={classes.itemC}>
                  <Typography variant={"body1"} className={classes.itemDes}>
                    不断创新：我们极力推动技术发展，提高产品性能；
                  </Typography>
                  <Typography variant={"body1"} className={classes.itemDes}>
                    正直诚实：我们将赢得您的信任。 诚信是一切的基础；
                  </Typography>
                  <Typography variant={"body1"} className={classes.itemDes}>
                    团结互助：我们重视打造专业的、支持的团队，以优化效率；
                  </Typography>
                  <Typography variant={"body1"} className={classes.itemDes}>
                    专注理想：我们坚持不懈地追求目标和宗旨。
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.imageItem} style={{ marginLeft: "auto" }}>
                  <img
                    src="/static/images/company/2.png"
                    alt="R2.ai"
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>


        <div className={classes.content1_add}>
          <p className={"all_title"} style={{marginTop:63}}>公司地址</p>
          <Grid container className={classes.items} direction={"row"}>

            <Grid item xs={4}>
              <div className={classes.item}>
                <Card className={classes.card}>
                  <div>
                    <div className={classes.icon}><img
                      src="/static/images/company/3.png"
                      width={"16px"}
                      alt="R2.ai"
                    /></div>
                    <div style={{ fontSize: 18, fontWeight: "bold" }}>
                      上海
                    </div>
                  </div>
                  <div className={classes.cardText}>
                    上海机颖智能科技有限公司 R2.ai – 上海
                  </div>
                  <div className={classes.cardText}>
                    上海市杨浦区国霞路458弄2号307室
                  </div>
                </Card>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className={classes.item}>
                <Card className={classes.card}>
                  <div>
                    <div className={classes.icon}><img
                      src="/static/images/company/3.png"
                      width={"16px"}
                      alt="R2.ai"
                    /></div>
                    <div style={{ fontSize: 18, fontWeight: "bold" }}>
                      杭州
                    </div>
                  </div>
                  <div className={classes.cardText}>
                    杭州睿拓智能科技有限公司 R2.ai – 杭州
                  </div>
                  <div className={classes.cardText}>
                    杭州市滨江区六和路368号海创基地北二楼B7-11室
                  </div>
                </Card>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className={classes.item}>
                <Card className={classes.card}>
                  <div>
                    <div className={classes.icon}><img
                      src="/static/images/company/3.png"
                      width={"16px"}
                      alt="R2.ai"
                    /></div>
                    <div style={{ fontSize: 18, fontWeight: "bold" }}>
                      美国硅谷
                    </div>
                  </div>
                  <div className={classes.cardText}>
                    R2.ai, INC R2.ai – 硅谷 (Headquarters)
                  </div>
                  <div className={classes.cardText}>
                    2228 Camino Ramon San Ramon
                  </div>
                </Card>
              </div>
            </Grid>


          </Grid>
        </div>
      </div>
    </>
  );
}

export default HomeAbout;
