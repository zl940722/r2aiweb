import React, { useEffect, useReducer, useState } from "react";
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
    margin: "4.8125rem 0 0",
    cursor: "pointer",
    "& img": {
      height: "14.375rem",
      maxWidth: "25rem"
    }
  },
  item: {
    boxSizing: "border-box",
  },
  itemDes: {
    lineHeight: 1,
    fontSize: 14,
    "& i": {
      fontStyle: "normal",
      padding: "0 1rem"
    }
  },
  itemTitle: {
    marginBottom: "1.6875rem",
    fontWeight: "bold",
    '&:hover':{
      color:'#d3323e'
    }
  },
  itemTitle2: {
    marginTop: "1.0525rem",
    height: '13.625rem',
    overflow: "hidden",
    fontSize:"0.875rem",
    lineHeight:1.88,
  },
  itemDashed: {
    width: "100%",
    border: "1px dashed #ccc"
  }
});

export default function(props: any) {
  const { list = [], route,page=1 } = props;
  const [List,upList] = useState(list);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const classes = useStyles();
  const detail = (id: any) => {
    return () => {
      const link = route.includes("news") ? "news" : "resources";
      Router.push(`/${link}/detail?${id}`);
    };
  };

  useEffect(()=>{
    upList(list)
  },[page]);

  function main() {
    if(List.length){
      return List.map((value: any, index: any) => {
        const Time = ()=>{
          if(value.publishTime){
            return <>{moment(value.publishTime).format("YYYY-MM-DD")}<i>|</i></>
          }
        };
        return <Grid key={index} container className={classes.items} direction={"row"} onClick={detail(value.id)}>
          <Grid item xs={4}>
            <div className={classes.item} style={{ textAlign: "center" }}>
              <img
                src={(value.image || {}).url}
                onError={()=>{
                  if(!List[index].image.url.startsWith('/r2')){
                    console.log(1,List[index].image.url);
                    List[index].image.url = '/r2'+List[index].image.url;
                    upList(List);
                    // @ts-ignore
                    forceUpdate();
                  }else{
                    console.log(2,List[index].image.url);
                    List[index].image.url = List[index].image.url +'?v='+Date.now();
                    setTimeout(forceUpdate,1000);
                  }
                }}
                alt="R2.ai"
              />
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className={classes.item} style={{ paddingLeft: "1.9375rem" }}>
              <Typography variant={"h5"} className={classes.itemTitle}>
                {value.title}
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}>
                {Time()}
                <span className={value.type}/>
              </Typography>
              <Typography variant={"body1"} className={classes.itemTitle2}>
                {value.description}
              </Typography>
            </div>
          </Grid>
          <div className={classes.itemDashed}>{}</div>
        </Grid>
      });
    }
    return <Empty />
  }

  return <div className={classes.content} id='news'>
    {main()}
  </div>;
};
