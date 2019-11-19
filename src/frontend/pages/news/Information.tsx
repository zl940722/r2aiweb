import React from "react";
import { makeStyles } from "@material-ui/styles";
import url from "../../../../http";

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
    marginTop: "2rem",
    height:220,
    overflow:'hidden'
  },
  itemDashed: {
    marginTop: "2rem",
    width: "96%",
    border: "1px dashed #ccc"
  }
});


export default function (res: any) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        {res.information.map((value: any, index: any) => (
          <Grid key={index} container className={classes.items} direction={"row"}>
            <Grid item sm={6} xs={12}>
              <div className={classes.item}>
                <img
                  src={url + value.image.url}
                  width={"400px"}
                  height={300}
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
                  {value.updatedAt}
                </Typography>
                <Typography variant={"body1"} className={classes.itemTitle2}>
                  {value.content}
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

