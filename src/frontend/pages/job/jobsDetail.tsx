import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid } from "@material-ui/core";
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
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#D3323EFF",
    cursor: 'pointer'
  },
  des: {
    fontSize: "1rem",
    color: "#999",
    lineHeight: 2,
    textAlign: "center"
  },
  items: {
    margin: "2rem 0 1rem",
    textAlign: "left",
    minHeight: "700px",
    backgroundColor: "#F5F5F5",
    padding: 20
  },
  item: {
    maxWidth: "90%",
    boxSizing: "border-box",
    "& p": {
      whiteSpace: "pre-line"
    }
  },
  itemBorder: {
    width: "100%",
    display: "flex",
    border: "1px dashed #343f53",
    height: 1
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

  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2.5rem"
  },
  itemTitle2: {
    marginTop: "3rem",
    fontWeight: "bold"
  }
});

function HomeAbout(res: any) {
  const classes = useStyles();
  const submit = () => {}
  return (
    <>
      <div className={classes.content}>
        <Typography onClick={() => {
          Router.back();
        }} className={classes.title}>返回职位列表</Typography>
        <div>
          <Grid container className={classes.items} direction={"row"}>
            <div>
              <p>{res.data.created_at}</p>
              <h4>{res.data.name_zh}</h4>
              <p>工作地点：{res.data.place_zh}</p>
            </div>
            <p className={classes.itemBorder}>{}</p>
            <div className={classes.item}>
              <h4>职业描述</h4>
              <p>{res.data.describe_zh}</p>

            </div>
            <p className={classes.itemBorder}>{}</p>
            <div className={classes.item}>
              <h4>职业要求</h4>
              <p>{res.data.requirement_zh}</p>

            </div>
          </Grid>
        </div>
        <div className={classes.button}>
          <a style={{border: '1px solid #D3323E', padding: '0 40px', borderRadius: '36px', color: '#D3323E',height:'40px',lineHeight:'40px'}} href="mailto:lin.zhou@r2.ai">立即申请</a>
        </div>

      </div>
    </>
  );
}

export default HomeAbout;
