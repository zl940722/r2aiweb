import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import moment from "moment";
import { PageHeader } from "antd";
import converter from './converter';

const useStyles = makeStyles({
  content: {
    maxWidth: "75rem",
    margin: "0 auto",
    padding: "70px 0 8.8rem",
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
    margin: "1rem 0",
    textAlign: "center"
  },
  item: {
    // maxWidth: "90%",
    boxSizing: "border-box"
  },
  itemDes: {
    lineHeight: 1,
    color: "#666",
    fontSize: "14px !important",
    textAlign: "left"
  },
  itemTitle: {
    margin:'32px 0 24px !important',
    fontSize: '36px !important',
    textAlign: "left"
  },
  body: {
    marginTop: "29px !important",
    textAlign: "left",
    "& img": {
      maxWidth: "100%"
    },
    "& p": {
      textIndent: "2rem",
      "& img": {
        margin: "auto",
        display: "block"
      }
    }
  },
  itemDashed: {
    marginTop: "2rem",
    width: "96%",
    border: "1px dashed #ccc"
  },
  back: {
    color: "#D3323E",
    textDecoration: "none"
  },
  others: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    color: "#666",
    lineHeight: 1.7,
    fontSize: "1rem",
    marginTop:'6.7rem',
    marginBottom: '5.5rem',
    "& a": {
      textDecoration: "none",
      color: "#666",
      paddingLeft: "0.1rem",
      "&:hover": {
        color: "#D3323E"
      }
    }
  },
  button:{
    color: '#D3323E',
    width: '10.5rem',
    border: '1px solid #D3323E',
    height: '3.2rem',
    fontWeight: 'bold',
    fontSize:'1.25rem',
    display:'block',
    margin:'auto',
    lineHeight:'3.2rem',
    textAlign:'center',
    borderRadius:'1.6rem',
  }
});

export default function(res: any) {
  const classes = useStyles();
  const { prev = {}, next = {}, news, route } = res;

  useEffect(() => {
    scroll(0, 0);
  }, []);

  const link = route.includes("news") ? "news" : "resources";

  function back() {
    // return Router.push(`/news/${news.type.toLowerCase()}`);
    location.href = `/${link}/${news.type.toLowerCase()}`;
  }

  function getRawMarkup() {
    const html = new DOMParser().parseFromString(
      converter.makeHtml(news.content),
      'text/html'
    );

    return { __html: html.body.innerHTML };
  }

  return <div className={classes.content}>
        {/*<a href="javascript:" className={classes.back} onClick={back}>*/}
        {/*  &lt;-- 返回{route.includes("news") ? "资讯" : "社区"}列表*/}
        {/*</a>*/}
        <div style={{cursor: 'pointer'}} onClick={back}>
          <PageHeader
            style={{
              left: "-24px",
              position: "relative"
            }}
            onBack={back}
            title={`返回${route.includes("news") ? "资讯" : "社区"}列表`}
            subTitle=""
          />
        </div>
        <Grid container className={classes.items} direction={"row"}>
          <Grid item sm={12} xs={12}>
            <div className={classes.item}>
              <Typography variant={"h5"} className={classes.itemTitle} style={{fontWeight:500}}>
                {news.title || ""}
              </Typography>
              <Typography variant={"body1"} className={classes.itemDes}
                          style={{ display: (news.publishTime ? "" : "none") }}>
                发布日期:{moment(news.publishTime).format("YYYY-MM-DD")}
              </Typography>
              <Typography variant={"body1"} className={classes.body}>
                <div dangerouslySetInnerHTML={getRawMarkup()}/>
              </Typography>
            </div>
          </Grid>
          <dl className={classes.others}>
            <dd style={{ display: (next.id ? "" : "none") }}>上一篇<a href={`/${link}/detail?${next.id}`}>:{next.title}</a>
            </dd>
            <dd style={{ display: (prev.id ? "" : "none") }}>下一篇<a href={`/${link}/detail?${prev.id}`}>:{prev.title}</a>
            </dd>
          </dl>
        </Grid>
        <a className={classes.button} href="javascript:" onClick={back}>返回</a>
        {/*<CommonButton label={"返回"} onClick={back}/>*/}
      </div>
}
