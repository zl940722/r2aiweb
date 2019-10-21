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
    lineHeight:2,
    marginBottom: "3rem",
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
        <div>
          <Typography className={classes.title}>核心团队</Typography>
          <Grid container className={classes.items} direction={"row"}>
            <Grid item sm={4} xs={12}>
              <div className={classes.item}>
                <img
                  src="/static/images/team/Yiwen4@2x(1).png"
                  width={"100%"}
                  alt="R2.ai"
                />
              </div>
            </Grid>
            <Grid item sm={4} xs={12}>
              <div className={classes.item}>
                <img
                  src="/static/images/team/2@2x.png"
                  width={"100%"}
                  alt="R2.ai"
                />
              </div>
            </Grid>
            <Grid item sm={4} xs={12}>
              <div className={classes.item}>
                <img
                  src="/static/images/team/3.png"
                  width={"100%"}
                  alt="R2.ai"
                />
              </div>
            </Grid>
          </Grid>
        </div>

        <div>
          <Typography className={classes.title}>董事会</Typography>
          <Grid container className={classes.items} direction={"row"}>
            <Grid item sm={4} xs={12}>
              <div className={classes.item}>
                <img
                  src="/static/images/team/Yiwen4@2x(1).png"
                  width={"100%"}
                  alt="R2.ai"
                />
              </div>
            </Grid>
            <Grid item sm={4} xs={12}>
              <div className={classes.item}>
                <img
                  src="/static/images/team/2@2x(1).png"
                  width={"100%"}
                  alt="R2.ai"
                />
              </div>
            </Grid>
            <Grid item sm={4} xs={12}>
              <div className={classes.item}>
                <img
                  src="/static/images/team/3@2x(1).png"
                  width={"100%"}
                  alt="R2.ai"
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <Typography className={classes.title}>顾问</Typography>
          <Grid container className={classes.items} direction={"row"}>
            <Grid item sm={4} xs={12}>
              <div className={classes.item}>
                <img
                  src="/static/images/team/1@2x.png"
                  width={"100%"}
                  alt="R2.ai"
                />
              </div>
            </Grid>
          </Grid>
        </div>

      </div>
    </>
  );
}

export default HomeAbout;
