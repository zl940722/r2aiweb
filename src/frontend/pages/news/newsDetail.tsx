import React from "react";
import Banner from "./Banner";
import { Grid, Typography } from "@material-ui/core";
import url from "../../../../http";
import { makeStyles } from "@material-ui/styles";

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
    margin: "2rem 0 1rem",
    textAlign:'center'
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
    fontWeight: "bold",
    marginTop:'2rem'
  },
  itemTitle2: {
    marginTop: "2rem",
  },
  itemDashed: {
    marginTop: "2rem",
    width: "96%",
    border: "1px dashed #ccc"
  }
});


function Application(res: any) {
  const classes = useStyles();
  return (
    <>
      <Banner/>
      <div className={classes.content}>
        <Grid container className={classes.items} direction={"row"}>
          <Grid item sm={12} xs={12}>
            <div className={classes.item}>
              <img
                src={url + res.news.image.url || ""}
                width={"400px"}
                height={300}
                alt="R2.ai"
              />
            </div>
          </Grid>
          <Grid item sm={12} xs={12}>
            <div className={classes.item}>
              <Typography variant={"h5"} className={classes.itemTitle}>
                {res.news.title || ""}
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                {res.news.updatedAt || ""}
              </Typography>
              <Typography variant={"body1"} className={classes.itemTitle2}>
                {res.news.content || ""}
              </Typography>
            </div>
          </Grid>
          <div className={classes.itemDashed}>{}</div>
        </Grid>
      </div>
    </>
  );
}

export default Application;
