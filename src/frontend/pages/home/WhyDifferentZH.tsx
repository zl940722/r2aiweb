import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  content: {
    background: "#F5F5F5",
    textAlign: "center",
    paddingBottom: "6.375rem",
    "& p": {
      color: "#333",
      fontWeight: "bold",
      fontSize: "2.25rem",
      paddingTop: "5rem"
    }
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBlockStart: "3.5rem",
    marginBlockEnd: 0,
    "& dd": {
      border: "1px solid #ccc",
      background: "#fff",
      padding: "1.9375rem",
      display: "flex",
      color: "#333",
      fontSize: "1rem",
      width: "23.125rem",
      "& span": {
        display: "block",
        textAlign: "left",
        fontSize: "1.25rem",
        paddingBottom: "0.2rem"
      }
    },
    "& i": {
      width: "2.25rem",
      height: "3.125rem",
      marginRight: "1.1875rem",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat"
    }
  }
});

export default function() {
  const classes = useStyles();
  const main = [
    {
      url: "diff_1.png",
      title: "易用性",
      content: "适用于AI专家或非专家"
    },
    {
      url: "diff_2.png",
      title: "高质量",
      content: "模型质量优秀且稳定"
    },
    {
      url: "diff_3.png",
      title: "高速性",
      content: "建模速度可达分钟/小时级"
    }
  ];
  return (
    <section className={classes.content}>
      <p>为何我们与众不同</p>
      我们拥有独立研发的世界领先的AI开发及运营平台，以最简单、高效的方式为您搭建更高质的模型！
      <dl className={classes.main}>
        {main.map((itm, index) => {
          return (
            <dd key={index}>
              <i style={{ backgroundImage: `url(/static/images/home/${itm.url})` }}/>
              <div>
                <span>{itm.title}</span>
                {itm.content}
              </div>
            </dd>
          );
        })}
      </dl>
    </section>
  );
}
