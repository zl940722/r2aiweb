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

function HomeAbout() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <Typography className={classes.title}>关于我们</Typography>
        <Typography className={classes.des}>
          2015年，R2.ai,Inc由一群在AI和数据科学领域杰出而富有想象力的团队在硅谷建立。他们致力于将大胆的创意转化为复杂现实中的AI应用，成为新一代人工智能开发和运营平台的始创者。
        </Typography>
        <Typography className={classes.des}>
          R2.ai的使命是大规模推动AI的普及和发展。我们将助力所有企业更快速、更便捷、更低成本地应用人工智能技术开发各种AI应用，从而在市场竞争中获得独特优势。
        </Typography>

        <Grid container className={classes.items} direction={"row"}>
          <Grid item sm={6} xs={12}>
            <div className={classes.item}>
              <img
                src="/static/images/home/550_1@2x.png"
                width={"100%"}
                alt="R2.ai"
              />
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.item}>
              <Typography variant={"h5"} className={classes.itemTitle}>
                我们在做什么
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                R2.ai 是帮助创造AI的AI
              </Typography>
              <Typography variant={"body1"} className={classes.itemTitle2}>
                我们的愿景是：
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                构建世界领先的AI开发及运营平台，建设具有前瞻性的AI社区,颠覆式地推动AI的普及和发展。
              </Typography>
              <Typography variant={"body1"} className={classes.itemTitle2}>
                我们服务于：
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                寻求快速、高质、简便、经济的方式来开发人工智能应用的企业；
                期望加速现有人工智能项目开发进程的公司。
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Grid container className={classes.items} direction={"row-reverse"}>
          <Grid item sm={6} xs={12}>
            <div className={classes.item}>
              <img
                src="/static/images/home/550_2@2x.png"
                width={"100%"}
                alt="R2.ai"
              />
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.item}>
              <Typography variant={"h5"} className={classes.itemTitle}>
                为何我们与众不同
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                大幅降低AI开发门槛，让大中小型企业都能拥有自主开发AI应用的能力；
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                挣脱AI人才缺乏束缚，突破数据不足局限，运用大数据或行业经验（小数据）都可建立精准模型。
              </Typography>
              <Typography variant={"body1"} className={classes.itemTitle2}>
                产品特性：
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                高效率：建模速度可达分钟/小时级。
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                易用性：适用于AI专家或非专家。
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                高质量：模型质量优秀并且稳定。
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HomeAbout;
