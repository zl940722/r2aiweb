import React from "react";
import { makeStyles } from "@material-ui/styles";
import Router from "next/router";
import { Typography, Grid } from "@material-ui/core";
import moment from "moment";
import { Empty } from 'antd';
import "./news.css";

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
    margin: "4.875rem 0 0",
    cursor: "pointer",
    "& img": {
      height: "14.375rem",
      maxWidth: "25rem"
    }
  },
  item: {
    maxWidth: "90%",
    boxSizing: "border-box"
  },
  itemDes: {
    lineHeight: 1,
    "& i": {
      fontStyle: "normal",
      padding: "0 1rem"
    }
  },
  itemTitle: {
    marginBottom: "2rem",
    fontWeight: "bold"
  },
  itemTitle2: {
    marginTop: "2rem",
    height: 220,
    overflow: "hidden"
  },
  itemDashed: {
    width: "96%",
    border: "1px dashed #ccc"
  }
});

export default function(res: any) {
  const { list = [], route } = res;
  const classes = useStyles();
  const detail = (id: any) => {
    return () => {
      const link = route.includes("news") ? "news" : "resources";
      Router.push(`/${link}/detail?${id}`);
    };
  };

  function main() {
    if(list.length){
      return list.map((value: any, index: any) => (
        <Grid key={index} container className={classes.items} direction={"row"} onClick={detail(value.id)}>
          <Grid item sm={4} xs={12}>
            <div className={classes.item} style={{ textAlign: "center" }}>
              <img
                src={(value.image || {}).url}
                alt="R2.ai"
              />
            </div>
          </Grid>
          <Grid item sm={8} xs={12}>
            <div className={classes.item} style={{ paddingLeft: "2.5rem" }}>
              <Typography variant={"h5"} className={classes.itemTitle}>
                {value.title}
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                {moment(value.publishTime).format("YYYY-MM-DD")}<i>|</i>
                <span className={value.type}/>
              </Typography>
              <Typography variant={"body1"} className={classes.itemTitle2}>
                {value.description}
              </Typography>
            </div>
          </Grid>
          <div className={classes.itemDashed}>{}</div>
        </Grid>
      ));
    }
    return <Empty />
  }

  return <div className={classes.content} id='news'>
    {main()}
  </div>;
};
