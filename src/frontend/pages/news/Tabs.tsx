import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import List from "./List";
import Link from "next/link";
import { Pagination } from "antd";
import Router from "next/router";

interface TabContainerProps {
  children?: React.ReactNode;
}

function TabContainer(props: TabContainerProps) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    },
    bar: {
      lineHeight: "5rem",
      backgroundColor: "#091221",
      marginBlockStart: 0,
      marginBlockEnd: 0,
      fontSize: "1rem",
      cursor: "pointer",
      "& a": {
        color: "#fff",
        textDecoration: "#fff"
      },
      "& dl": {
        maxWidth: "75rem",
        display: "flex",
        margin: "auto",
        "& dd": {
          marginInlineStart: 0,
          marginRight: "3.75rem"
        }
      }
    },
    on: {
      "& a": {
        color: "#ccc"
      }
    },
    page: {
      margin: "0 auto 5.6875rem",
      textAlign: "right",
      maxWidth: "75rem"
    }
  })
);

export default function(res: any) {
  const classes = useStyles();
  const { list, tabs = [], route, count, page = 1 } = res;

  const link = route.includes("news") ? "news" : "resources";


  function changePage(page) {
    Router.push(`${route}?p=${page}`);
  }

  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <a>上一页</a>;
    }
    if (type === "next") {
      return <a>下一页</a>;
    }
    return originalElement;
  }

  return (
    <div className={classes.root}>
      <div className={classes.bar}>
        <dl>
          {tabs.map(itm => {
            return <dd
              key={itm.key}
              className={route.includes(itm.key) ? classes.on : ""}>
              <Link href={`/${link}/${itm.key}`}>{itm.name}</Link>
            </dd>;
          })}
        </dl>
      </div>
      <List list={list} route={route}/>
      <section className={classes.page}>
        <Pagination
          defaultCurrent={+page}
          pageSize={5}
          total={count}
          onChange={changePage}
          showQuickJumper
          itemRender={itemRender}
          showTotal={total => `共 ${parseInt(String(total / 5))} 页`}
        />
      </section>
    </div>
  );
}
