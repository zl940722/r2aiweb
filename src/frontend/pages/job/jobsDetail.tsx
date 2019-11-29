import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid } from "@material-ui/core";
import Router from "next/router";
import { PageHeader } from "antd";
import moment from "moment";

const useStyles = makeStyles({
  content: {
    width: "1200px",
    margin: "0 auto",
    padding: "1.5rem 0 8.8rem",
    overflow: "hidden"

  },
  content_div: {
    background: "#F5F5F5",
    lineHeight: 3,
    padding: 20
  },
  title: {
    padding: "3rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#D3323EFF",
    cursor: "pointer"
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
  itemBorderDiv: {
    display: "flex",
    alignItems: "baseline"
  },
  itemBorderP: { width: "80px", fontSize: 16 },
  itemBorder: {
    width: "100%",
    display: "flex",
    border: "1px dashed #5C7EB1",
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
  const submit = () => {
  };
  return (
    <div className={classes.content}>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          Router.back();
        }}>
        <PageHeader
          style={{
            left: "-24px",
            position: "relative",
            fontSize: 12
          }}
          onBack={() => {
            Router.back();
          }}
          title={`返回列表`}
          subTitle=""
        />
      </div>
      <div className={classes.content_div}>

        <div>

          <div>
            <p
              style={{ color: "#666666" }}>发布时间：{res.data.created_at ? moment(res.data.created_at).format("YYYY-MM-DD") : ""}</p>
            <h4 style={{ fontSize: "1.3rem" }}>{res.data.name_zh}</h4>
            <p>工作地点：{res.data.place_zh}</p>
          </div>
          <div className={classes.itemBorderDiv}><h4 className={classes.itemBorderP}>职业描述</h4><p
            className={classes.itemBorder}>{}</p></div>
          <div className={classes.item}>
            <p>{res.data.describe_zh}</p>

          </div>
          <div className={classes.itemBorderDiv}><h4 className={classes.itemBorderP}>职业要求</h4><p
            className={classes.itemBorder}>{}</p></div>
          <div className={classes.item}>
            <p>{res.data.requirement_zh}</p>

          </div>

        </div>


      </div>
      <div className={classes.button}>
        <a style={{
          border: "1px solid #D3323E",
          padding: "0 40px",
          borderRadius: "36px",
          color: "#D3323E",
          height: "40px",
          lineHeight: "40px"
        }} href="mailto:lin.zhou@r2.ai">立即申请</a>
      </div>
    </div>
  );
}

export default HomeAbout;
