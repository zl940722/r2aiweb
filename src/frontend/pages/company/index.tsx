import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid, Card } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "1.5rem 0 8.8rem",
    overflow: "hidden"
  },
  content1: {
    maxWidth: "75rem",
    margin: "0 auto",
    padding: "1.5rem 0 8.8rem",
    overflow: "hidden",
    textAlign: "left"
  },
  content1_add:{
    maxWidth: "75rem",
    margin: "0 auto",

    overflow: "hidden",
    textAlign: "left"
  },
  content2: {
    maxWidth: "100%",
    background: "#F5F5F5"
  },
  content3: {
    maxWidth: "75rem",
    margin: "0 auto",
    padding: "1.5rem 0 8.8rem",
    overflow: "hidden",
    textAlign: "left"
  },
  title: {
    padding: "2.5rem",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center"
  },
  title_add:{
    paddingTop:'2.5rem',
    paddingBottom:'-3.5rem',
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
    margin: "5rem 0 1rem",
    display: "flex",
    alignItems: "center",
  },
  item: {
    maxWidth: "90%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    padding: "20px 10px 0 10px"
  },
  itemC: {
    maxWidth: "90%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "left",
    padding: "0 10px",
    flexFlow: "column"
  },
  itemDes: {
    lineHeight: 2,
    marginBottom: "3rem",
    textAlign:'left'
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
    height: "100px"
  }
});

function HomeAbout() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <div className={classes.content1}>
          <Typography className={classes.title}>公司概况</Typography>
          <Grid container className={classes.items} direction={"row"}>
            <Grid item sm={6} xs={12}>
              <div className={classes.item}>
                <img
                  src="/static/images/company/1.png"
                  width={"550px"}
                  alt="R2.ai"
                />
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.itemC}>
                <Typography variant={"body1"} className={classes.itemDes}>
                  2015年，R2.ai由一群在AI和数据科学领域内最杰出、最富有想象力的团队在硅谷建立。他们致力于将大胆的创意转化为复杂现实中的实际应用。R2.ai的使命是为AI在各行业的应用赋能，大规模推动AI的普及和发展。
                </Typography>
                <Typography variant={"body1"} className={classes.itemDes}>
                  R2.ai是帮助创造AI的AI。该公司是新一代人工智能开发和运营平台的始创者，其尖端的AI技术可以助您自动构建精准的机器学习模型，让企业拥有自主开发AI应用的能力。
                </Typography>
                <Typography variant={"body1"} className={classes.itemDes}>
                  R2.ai总部位于美国硅谷，在中国上海和杭州分别设有子公司，并正在迅速发展。
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={classes.content2}>
          <div className={classes.content3}>
            <Typography className={classes.title}>企业文化</Typography>
            <Grid container className={classes.items} direction={"row"}>

              <Grid item sm={6} xs={12}>
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
              <Grid item sm={6} xs={12}>
                <div className={classes.item}>
                  <img
                    src="/static/images/company/2.png"
                    width={"550px"}
                    alt="R2.ai"
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>


        <div className={classes.content1_add}>
          <Typography className={classes.title_add}>公司地址</Typography>
          <Grid container className={classes.items} direction={"row"}>

            <Grid item sm={4} xs={12} className={classes.card}>
              <div className={classes.item}>
                <Card style={{ margin: 10, height: "10rem" }}>
                  <div className={classes.item}>
                    <img
                      src="/static/images/company/3.png"
                      width={"16px"}
                      alt="R2.ai"
                    />
                    <h4 style={{ textAlign: "center", marginLeft: 10 }}>
                      美国硅谷
                    </h4></div>
                  <p style={{ padding: "0 10px" }}>
                    R2.ai, INC R2.ai – 硅谷 (Headquarters)<br/>
                    2228 Camino Ramon San Ramon
                    <br/>
                  </p>

                </Card>
              </div>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.card}>
              <div className={classes.item}>
                <Card style={{ margin: 10, height: "10rem" }}>
                  <div className={classes.item}>
                    <img
                      src="/static/images/company/3.png"
                      width={"16px"}
                      alt="R2.ai"
                    />
                    <h4 style={{ textAlign: "center", marginLeft: 10 }}>
                      杭州
                    </h4></div>
                  <p style={{ padding: "0 10px" }}>

                    杭州睿拓智能科技有限公司 R2.ai – 杭州<br/>
                    杭州滨江区六和路368号海创基地 南楼2楼E2012
                    <br/>
                  </p>

                </Card>
              </div>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.card}>
              <div className={classes.item}>
                <Card style={{ margin: 10, height: "10rem" }}>
                  <div className={classes.item}>
                    <img
                      src="/static/images/company/3.png"
                      width={"16px"}
                      alt="R2.ai"
                    />
                    <h4 style={{ textAlign: "center", marginLeft: 10 }}>
                      上海
                    </h4></div>
                  <p style={{ padding: "0 10px" }}>
                    上海机颖智能科技有限公司 R2.ai – 上海<br/>
                    上海市杨浦区政立路497号国正中心 1号楼1508室
                    <br/>
                  </p>

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
