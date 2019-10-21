import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid } from "@material-ui/core";
import url from "../../../../http";
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

function HomeAbout(res: any) {
  console.log(res, "zl");
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <Typography className={classes.title}>{res.aboutUs.content[0].en}</Typography>
        <Typography className={classes.des}>
          {res.aboutUs.content[1].en}
        </Typography>

        <Grid container className={classes.items} direction={"row"}>
          <Grid item sm={6} xs={12}>
            <div className={classes.item}>
              <img
                src={url + res.whatDo.content[6].en_img.url}
                width={"100%"}
                alt="R2.ai"
              />
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.item}>
              <Typography variant={"h5"} className={classes.itemTitle}>
                {res.whatDo.content[0].en}
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                {res.whatDo.content[1].en}
              </Typography>
              <Typography variant={"body1"} className={classes.itemTitle2}>
                {res.whatDo.content[2].en}
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                {res.whatDo.content[3].en}
              </Typography>
              <Typography variant={"body1"} className={classes.itemTitle2}>
                {res.whatDo.content[4].en}
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                {res.whatDo.content[5].en}
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Grid container className={classes.items} direction={"row-reverse"}>
          <Grid item sm={6} xs={12}>
            <div className={classes.item}>
              <img
                src={url + res.whyDiff.content[4].en_img.url}
                width={"100%"}
                alt="R2.ai"
              />
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.item}>
              <Typography variant={"h5"} className={classes.itemTitle}>
                {res.whyDiff.content[0].en}
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                {res.whyDiff.content[1].en}
              </Typography>
              <Typography variant={"body1"} className={classes.itemTitle2}>
                {res.whyDiff.content[2].en}
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                {res.whyDiff.content[3].en}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HomeAbout;
