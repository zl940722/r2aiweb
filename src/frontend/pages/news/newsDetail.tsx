import React from "react";
import Banner from "./Banner";
import { Grid, Typography } from "@material-ui/core";
import url from "../../../../http";
import { makeStyles } from "@material-ui/styles";
import { Remarkable } from 'remarkable';
import moment from "moment";


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
  body: {
    marginTop: "2rem",
    textAlign:'left',
    '& img':{
      maxWidth:'100%',
    },
    '& p':{
      textIndent:'2rem',
      '& img':{
        // position:'relative',
        // left:'-2rem',
        margin: 'auto',
        display: 'block',
      }
    }
  },
  itemDashed: {
    marginTop: "2rem",
    width: "96%",
    border: "1px dashed #ccc"
  }
});



export default function(res: any) {
  const classes = useStyles();

  // function getRawMarkup() {
  //   const md = new Remarkable();
  //   return { __html: md.render(res.news.content) };
  // }

  return (
    <>
      <Banner/>
      <div className={classes.content}>
        <Grid container className={classes.items} direction={"row"}>
          <Grid item sm={12} xs={12}>
            <div className={classes.item}>
              <Typography variant={"h5"} className={classes.itemTitle}>
                {res.news.title || ""}
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                {moment(res.news.publishTime).format('YYYY-MM-DD')}
              </Typography>
              <Typography variant={"body1"} className={classes.body}>
                <div dangerouslySetInnerHTML={{__html:res.news.content}}/>
              </Typography>
            </div>
          </Grid>
          <div className={classes.itemDashed}>{}</div>
        </Grid>
      </div>
    </>
  );
}
