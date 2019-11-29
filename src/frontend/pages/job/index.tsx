import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid } from "@material-ui/core";
import isEn from "../../../../language";
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
    boxSizing: "border-box",
    borderBottom: '1px dashed #ccc',
    marginBottom: '50px'
  },
  itemh4: { fontSize: "24px", marginBottom: '34px', cursor: 'pointer' },
  itemp: { fontSize: "24px", marginBottom: '34px' },
  itemBorder: {
    width: "100%",
    border: "1px dashed #ccc"
  },
  itemDes: {
    lineHeight: 2,
    marginBottom: "6rem",
    color: "#333333FF",
    textAlign: "center",
    fontSize: "24px"
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
  const classes = useStyles();
  const detail = (id: any) => {
    return () => {
      Router.push(`/jobsDetail?${id}`);
    };
  };
  return (
    <>
      <div className={classes.content}>
        {
          isEn ? <div>
            <p className={'all_title'} style={{margin:'99px 0 40px 0'}}>我们在全面招聘</p>
            <p className={classes.itemDes}>对精英一族，我们有丰富的职业发展机会！如果您想引领潮流，坐拥人工智能革命的最前沿，请加入我们！</p>
            <Grid container className={classes.items} direction={"row"}>
              {res.data.map((value: any, index: any) => (
                <Grid key={index} item xs={6} onClick={detail(value.id)}>
                  <div className={classes.item}>
                    <h4 className={classes.itemh4}>{value.name_en}</h4>
                    <p className={classes.itemp}>{value.place_en}</p>
                    {/* <p className={classes.itemBorder}>{}</p> */}
                  </div>
                </Grid>
              ))}
            </Grid>
          </div> : <div>
              <p className={'all_title'} style={{margin:'99px 0 40px 0'}}>我们在全面招聘</p>
              <p className={classes.itemDes}>对精英一族，我们有丰富的职业发展机会！如果您想引领潮流，坐拥人工智能革命的最前沿，请加入我们！</p>
              <Grid container className={classes.items} direction={"row"}>
                {res.data.map((value: any, index: any) => (
                  <Grid key={index} item xs={6} onClick={detail(value.id)}>
                    <div className={classes.item}>
                      <h4 className={classes.itemh4}>{value.name_zh}</h4>
                      <p className={classes.itemp}>{value.place_zh}</p>
                      {/* <p className={classes.itemBorder}>{}</p> */}
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
        }

      </div>
    </>
  );
}

export default HomeAbout;
