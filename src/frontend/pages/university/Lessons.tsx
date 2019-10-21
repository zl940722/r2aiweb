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
    padding: "3rem 0 1rem 0",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center"
  },
  des: {
    fontSize: "30px",
    color: "#333333",
    lineHeight: 2,
    display: "flex",
    justifyContent: "space-around"
  },
  items: {
    margin: "3rem 0 5rem"
  },
  item: {
    maxWidth: "90%",
    marginBottom:30,
    boxSizing: "border-box"
  }
});
const lists: any = [
  {
    id: 1,
    url: "/static/images/university/5.png"
  },
  {
    id: 2,
    url: "/static/images/university/5.png"
  },
  {
    id: 3,
    url: "/static/images/university/5.png"
  }, {
    id: 4,
    url: "/static/images/university/5.png"
  }, {
    id: 5,
    url: "/static/images/university/5.png"
  }, {
    id: 6,
    url: "/static/images/university/5.png"
  }
];

function Lessons() {
  const classes = useStyles();
  return (
    <div style={{ width: "100%", background: "#F5F5F5" }}>
      <div className={classes.content}>
        <div>
          <Typography className={classes.title}>
            线上课程
          </Typography>
          <Typography className={classes.des}>
            <p> R2 Learn产品入门及进阶课程</p>
            <p>
              查看更多>
            </p>
          </Typography>

          <Grid container className={classes.items} direction={"row"}>
            {lists.map((value: any, index: any) => (
              <Grid item sm={4} xs={12}>
                <div key={index} className={classes.item}>
                  <img
                    src={value.url}
                    width={"100%"}
                    alt="R2.ai"
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>


      </div>
    </div>
  );
}

export default Lessons;
