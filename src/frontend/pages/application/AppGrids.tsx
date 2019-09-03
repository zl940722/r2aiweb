import React from "react";
import { makeStyles } from "@material-ui/styles";

import Link from "next/link";

import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    maxWidth: "75rem",
    margin: "0 auto",
    padding: "5rem 0",
    overflow: "hidden"
  },
  title: {
    fontWeight: "bold"
  },
  subtitle: {
    marginTop: "1.2rem"
  },
  grids: {
    maxWidth: "76.8rem",
    margin: "0 auto",
    padding: "4rem 0 6rem"
  },
  grid: {
    flex: 1,
    // maxWidth: "23.75rem",
    margin: "2.5rem 0.9rem",
    padding: "4rem",
    border: "1px solid #CCC",
    borderRadius: ".3rem",
    boxShadow: ".2rem .2rem .2rem #ddd",
    cursor: "pointer"
  },
  grid_img: {
    height: 200,
    textAlign: "center"
  },
  grid_name: {
    marginTop: "4rem",
    fontSize: "1.8rem"
  }
});

const app_lists = [
  {
    id: 1,
    imgUrl: "/static/images/application/AI保险@2x.webp",
    name: "AI 保险"
  },
  {
    id: 2,
    imgUrl: "/static/images/application/AI医疗@2x.webp",
    name: "AI 医疗"
  },
  {
    id: 3,
    imgUrl: "/static/images/application/AI金融@2x.webp",
    name: "AI 金融"
  },
  {
    id: 4,
    imgUrl: "/static/images/application/AI新兴行业@2x.webp",
    name: "AI 新兴行业"
  },
  {
    id: 5,
    imgUrl: "/static/images/application/AI汽车@2x.webp",
    name: "AI 汽车"
  },
  {
    id: 6,
    imgUrl: "/static/images/application/AI物流@2x.webp",
    name: "AI 物流"
  },
  {
    id: 7,
    imgUrl: "/static/images/application/AI制药@2x.webp",
    name: "AI 制药"
  },
  {
    id: 8,
    imgUrl: "/static/images/application/AI电信@2x.webp",
    name: "AI 电信"
  },
  {
    id: 9,
    imgUrl: "/static/images/application/AI环境@2x.webp",
    name: "AI 环境"
  }
];

function AppGrids() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <Typography variant={"h4"} align={"center"} className={classes.title}>
          应用场景
        </Typography>
        <Typography
          variant={"h5"}
          align={"center"}
          className={classes.subtitle}
        >
          为各行各业企业进行快速易用高质的AI赋能
        </Typography>
        <Grid container className={classes.grids}>
          {app_lists.map((value, index) => (
            <Link
              key={index}
              href={`/appDetail?id=${value.id}`}
              // as={`/appDetail/${value.id}`}
            >
              <Grid item md={4} className={classes.grid}>
                <div className={classes.grid_img}>
                  <img src={`${value.imgUrl}`} width={200} alt={value.name} />
                </div>
                <Typography
                  variant={"h4"}
                  align={"center"}
                  className={classes.grid_name}
                >
                  {value.name}
                </Typography>
              </Grid>
            </Link>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default AppGrids;
