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
    margin: "2rem 0 1rem"
  },
  item: {
    maxWidth: "90%",
    boxSizing: "border-box"
  },
  itemDes: {
    lineHeight: 1
  },
  itemTitle: {
    marginBottom: "2rem",
    fontWeight: "bold"
  },
  itemTitle2: {
    marginTop: "2rem"
  },
  itemDashed: {
    marginTop: "2rem",
    width: "96%",
    border: "1px dashed #ccc"
  }
});

const lists: any = [
  {
    id: 1,
    url: "/static/images/resources/1.png",
    title: "1赋能智慧城市，助力大湾区发展，R2.ai携手广东宏景科技",
    date: "2019-07-25",
    context: "R2.ai创始人、CEO黄一文先生受邀拜访广东宏景科技股份有限公司（以下简称“宏景科技”），与宏景科技CEO欧阳华博士及首席科学家、中国智能建筑领域顶级专家陈佳实教授就人工智能在智慧城市领域的广泛应用进行了深入交流，双方将在智能园区，智能医疗，智能农业等多领域展开实质性合作。"
  },
  {
    id: 2,
    url: "/static/images/resources/2.png",
    title: "赋能智慧城市，助力大湾区发展，R2.ai携手广东宏景科技",
    date: "2019-07-25",
    context: "R2.ai创始人、CEO黄一文先生受邀拜访广东宏景科技股份有限公司（以下简称“宏景科技”），与宏景科技CEO欧阳华博士及首席科学家、中国智能建筑领域顶级专家陈佳实教授就人工智能在智慧城市领域的广泛应用进行了深入交流，双方将在智能园区，智能医疗，智能农业等多领域展开实质性合作。"
  },
  {
    id: 3,
    url: "/static/images/resources/3.png",
    title: "赋能智慧城市，助力大湾区发展，R2.ai携手广东宏景科技",
    date: "2019-07-25",
    context: "R2.ai创始人、CEO黄一文先生受邀拜访广东宏景科技股份有限公司（以下简称“宏景科技”），与宏景科技CEO欧阳华博士及首席科学家、中国智能建筑领域顶级专家陈佳实教授就人工智能在智慧城市领域的广泛应用进行了深入交流，双方将在智能园区，智能医疗，智能农业等多领域展开实质性合作。"
  },
  {
    id: 4,
    url: "/static/images/resources/4.png",
    title: "赋能智慧城市，助力大湾区发展，R2.ai携手广东宏景科技",
    date: "2019-07-25",
    context: "R2.ai创始人、CEO黄一文先生受邀拜访广东宏景科技股份有限公司（以下简称“宏景科技”），与宏景科技CEO欧阳华博士及首席科学家、中国智能建筑领域顶级专家陈佳实教授就人工智能在智慧城市领域的广泛应用进行了深入交流，双方将在智能园区，智能医疗，智能农业等多领域展开实质性合作。"
  },
  {
    id: 5,
    url: "/static/images/resources/5.png",
    title: "赋能智慧城市，助力大湾区发展，R2.ai携手广东宏景科技",
    date: "2019-07-25",
    context: "R2.ai创始人、CEO黄一文先生受邀拜访广东宏景科技股份有限公司（以下简称“宏景科技”），与宏景科技CEO欧阳华博士及首席科学家、中国智能建筑领域顶级专家陈佳实教授就人工智能在智慧城市领域的广泛应用进行了深入交流，双方将在智能园区，智能医疗，智能农业等多领域展开实质性合作。"
  }
];

function HomeAbout() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        {lists.map((value: any, index: any) => (
          <Grid key={index} container className={classes.items} direction={"row"}>
            <Grid item sm={6} xs={12}>
              <div className={classes.item}>
                <img
                  src={value.url}
                  width={"100%"}
                  alt="R2.ai"
                />
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.item}>
                <Typography variant={"h5"} className={classes.itemTitle}>
                  {value.title}
                </Typography>
                <Typography variant={"body1"} className={classes.itemDes}>
                  {value.date}
                </Typography>
                <Typography variant={"body1"} className={classes.itemTitle2}>
                  {value.context}
                </Typography>
              </div>
            </Grid>
            <div className={classes.itemDashed}>{}</div>
          </Grid>
        ))}
      </div>
    </>
  );
}

export default HomeAbout;
