import React from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bg: {
      background: "#061122",
      backgroundSize: "cover",
      backgroundPosition: "50%",
      backgroundRepeat: "no-repeat"
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 440
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 400
    },
    grids: {
      width: 1900,
      margin: "0 auto",
      padding: "10% 0"
    },
    grid: {
      flex: 1,
      color: "#fff",
      margin: "2.5rem auto",
      borderRadius: ".3rem",
      // boxShadow: ".2rem .2rem .2rem #ddd",
      cursor: "pointer",
      textAlign: "center",
      padding: "8rem"
    },
    buttonWrap: {
      width: "100%",
      paddingTop: "2.5rem"
    },
    button: {
      width: "10.5rem",
      height: "3.2rem",
      fontWeight: "bold",
      background: "#061222 !important"
    }
  })
);


const Index = () => {

  // location.reload()
  const classes = useStyles();

  return (


    <div style={{ background: "#F5F5F5", textAlign: "center", margin: "200px 300px 380px", padding: 200 }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
        <img style={{ width: 32, height: 32 }} src={"/static/images/price/成功@2x.png"}/><h1
        style={{ color: "#333333" }}>您已经成功联系销售！</h1>
      </div>
      <p>

        谢谢您咨询购买R2.ai新一代人工智能自动机器建模产品。我们的销售人员将尽快与您联系。
      </p>
    </div>


  );
};

export default Index;