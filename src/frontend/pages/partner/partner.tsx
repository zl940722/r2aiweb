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
    color: "#0C151B",
    lineHeight: 2,
    textAlign: "center"
  },
  items: {
    margin: "0 0 3rem"
  },
  item: {
    margin: 10,
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    alignItems: "center",
    background: "#fff",
    height: 140
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

function Partner() {
  const classes = useStyles();
  return (
    <div style={{ background: "#F5F5F5" }}>
      <div className={classes.content}>
        <p className={'all_title'} style={{margin:'49px auto'}}>合作伙伴</p>
        <Grid container className={classes.items} direction={"row"}>

          <Grid item sm={3} xs={12}>
            <div className={classes.item}>
              <img
                src="/static/images/partner/1.png"
                width={"280px"}
                alt="R2.ai"
              />
            </div>
          </Grid>
          <Grid item sm={3} xs={12}>
            <div className={classes.item}>
              <img
                src="/static/images/partner/2.png"
                width={"280px"}
                alt="R2.ai"
              />
            </div>
          </Grid>
          <Grid item sm={3} xs={12}>
            <div className={classes.item}>
              <img
                src="/static/images/partner/3.png"
                width={"280px"}
                alt="R2.ai"
              />
            </div>
          </Grid>
          <Grid item sm={3} xs={12}>
            <div className={classes.item}>
              <img
                src="/static/images/partner/4.png"
                width={"280px"}
                alt="R2.ai"
              />
            </div>
          </Grid>


        </Grid>

        <Grid container className={classes.items} direction={"row"}>

          <Grid item sm={3} xs={12}>
            <div className={classes.item}>
              <img
                src="/static/images/partner/5.png"
                width={"280px"}
                alt="R2.ai"
              />
            </div>
          </Grid>
          <Grid item sm={3} xs={12}>
            <div className={classes.item}>
              <img
                src="/static/images/partner/6.png"
                width={"280px"}
                alt="R2.ai"
              />
            </div>
          </Grid>
          <Grid item sm={3} xs={12}>
            <div className={classes.item}>
              <img
                src="/static/images/partner/7.png"
                width={"280px"}
                alt="R2.ai"
              />
            </div>
          </Grid>
          <Grid item sm={3} xs={12}>
            <div className={classes.item}>
              <img
                src="/static/images/partner/8.png"
                width={"280px"}
                alt="R2.ai"
              />
            </div>
          </Grid>


        </Grid>


        <Grid container className={classes.items} direction={"row"}>

          <Grid item sm={3} xs={12}>
            <div className={classes.item}>
              <img
                src="/static/images/partner/9.png"
                width={"280px"}
                alt="R2.ai"
              />
            </div>
          </Grid>
          <Grid item sm={3} xs={12}>
            <div className={classes.item}>
              <img
                src="/static/images/partner/10.png"
                width={"280px"}
                alt="R2.ai"
              />
            </div>
          </Grid>

          <Grid item sm={3} xs={12}>
            <div className={classes.item}>
              <img
                src="/static/images/partner/11.png"
                width={"280px"}
                alt="R2.ai"
              />
            </div>
          </Grid>


        </Grid>
      </div>
    </div>
  );
}

export default Partner;
