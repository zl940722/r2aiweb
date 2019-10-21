import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid } from "@material-ui/core";
import isEn from "../../../../language";
import Router from "next/router";

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
  itemBorder: {
    width: "100%",
    border: "1px dashed #ccc"
  },
  itemDes: {
    lineHeight: 2,
    marginBottom: "3rem",
    textAlign: "center"
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

// const lists = [
//   {
//     id: 1,
//     name: "人工智能开发工程师",
//     add: "杭州市·滨江区"
//   }, {
//     id: 2,
//     name: "Node全栈工程师",
//     add: "杭州市·滨江区"
//   }, {
//     id: 3,
//     name: "AI前端工程师",
//     add: "杭州市·滨江区"
//   }, {
//     id: 4,
//     name: "人工智能云平台系统工程师",
//     add: "杭州市·滨江区"
//   }, {
//     id: 5,
//     name: "人工智能云平台开发工程师",
//     add: "杭州市·滨江区"
//   }, {
//     id: 6,
//     name: "机器学习工程师",
//     add: "杭州市·滨江区"
//   }, {
//     id: 7,
//     name: "机器学习工程师",
//     add: "上海市·杨浦区"
//   }, {
//     id: 8,
//     name: "数据科学家(NLP方向)",
//     add: "上海市·杨浦区"
//   }, {
//     id: 9,
//     name: "数据挖掘工程师",
//     add: "上海市·杨浦区"
//   }
// ];

function HomeAbout(res: any) {
  const classes = useStyles();
  const detail = (id: any) => {
    return () => {
      Router.push(`/jobsDetail?${id}`);
    };
  };
  return (
    <>
      <div className={classes.content}>
        {
          isEn ? <div>
            <Typography className={classes.title}>我们在全面招聘</Typography>
            <p className={classes.itemDes}>对精英一族，我们有丰富的职业发展机会！如果您想引领潮流，坐拥人工智能革命的最前沿，请加入我们！</p>
            <Grid container className={classes.items} direction={"row"}>
              {res.data.map((value: any, index: any) => (
                <Grid key={index} item sm={6} xs={12} onClick={detail(value.id)}>
                  <div className={classes.item}>
                    <h4>{value.name_en}</h4>
                    <p>{value.place_en}</p>
                    <p className={classes.itemBorder}>{}</p>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div> : <div>
            <Typography className={classes.title}>我们在全面招聘</Typography>
            <p className={classes.itemDes}>对精英一族，我们有丰富的职业发展机会！如果您想引领潮流，坐拥人工智能革命的最前沿，请加入我们！</p>
            <Grid container className={classes.items} direction={"row"} >
              {res.data.map((value: any, index: any) => (
                <Grid key={index} item sm={6} xs={12} onClick={detail(value.id)}>
                  <div className={classes.item}>
                    <h4>{value.name_zh}</h4>
                    <p>{value.place_zh}</p>
                    <p className={classes.itemBorder}>{}</p>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        }

      </div>
    </>
  );
}

export default HomeAbout;
