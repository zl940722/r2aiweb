import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid } from "@material-ui/core";

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
    margin: "5rem 0 1rem"
  },
  item: {
    maxWidth: "90%",
    boxSizing: "border-box"
  },
  itemDes: {
    lineHeight:2,
    marginBottom: "3rem",
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
  return (
    <>
      <div className={classes.content}>
        <div>
          <Typography className={classes.title}>公司概况</Typography>
          <Grid container className={classes.items} direction={"row"}>
            <Grid item sm={6} xs={12}>
              <div className={classes.item}>
                <img
                  src="/static/images/company/1.png"
                  width={"100%"}
                  alt="R2.ai"
                />
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.item}>
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

        <div>
          <Typography className={classes.title}>企业文化</Typography>
          <Grid container className={classes.items} direction={"row"}>

            <Grid item sm={6} xs={12}>
              <div className={classes.item}>
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
                  width={"100%"}
                  alt="R2.ai"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default HomeAbout;
