import React from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  content: {
    height: "12.5rem",
    background: "#F5F5F5",
    color: "#333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-0.3rem",
    "& span": {
      display: "flex",
      alignItems: "center",
      width: "fit-content",
      paddingTop:30,
      fontSize:18,
    },
    "& img": {
      width: "1.4rem",
      height: "1.4rem",
      marginRight: "0.5rem"
    }
  },
  first: {
    borderRight: "1px solid #D7D7D7",
    paddingRight: "6rem",
    "& img": {
      width: 24,
      height: 20,
    }
  },
  second: {
    paddingLeft: "6rem"
  },
  main: {
    fontSize: 36,
    fontWeight: "bold",
    marginBlockStart: 0,
    marginBlockEnd: 0,
    margin: 0
  },
  sup: {
    backgroundImage: "url(/static/images/home/add.png)",
    width: "3rem",
    height: "2rem",
    backgroundSize: "cover",
    display: "inline-block",
    fontSize: 16,
    color: "#fff",
    position: "relative",
    top: -38,
    textAlign: "center",
    lineHeight: '27px',
  }
});

interface Interface {
  user;
  modeling;
}

const findVariableByName = (model, name) => _.find(model, itm => itm.name === name) || {};

export default function(props: Interface) {
  const { user = {}, modeling = {} } = props;
  const { zh: userNum = "1000" } = findVariableByName(user.content, "num");
  const { zh: userAdd = "1" } = findVariableByName(user.content, "add");

  const { zh: modelingNum = "1000" } = findVariableByName(modeling.content, "num");
  const { zh: modelingAdd = "1" } = findVariableByName(modeling.content, "add");

  const classes = useStyles();
  return (
    <section className={classes.content}>
      <div className={classes.first}>
        <p className={classes.main}>
          {(+userNum).toLocaleString()}
          <sup className={classes.sup}>+{userAdd}</sup>
        </p>
        <span>
          <img src="/static/images/home/user.png" alt=""/>
          用户数量
        </span>
      </div>
      <div className={classes.second}>
        <p className={classes.main}>
          {(+modelingNum).toLocaleString()}
          <sup className={classes.sup}>+{modelingAdd}</sup>
        </p>
        <span>
          <img src="/static/images/home/deploying.png" alt=""/>
          建模数量
        </span>
      </div>
    </section>
  );
}
