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
      color:'#fff',
      margin: "2.5rem auto",
      borderRadius: ".3rem",
      // boxShadow: ".2rem .2rem .2rem #ddd",
      cursor: "pointer",
      textAlign: "center",
      padding: '8rem'
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
    <div className={classes.bg} style={{ backgroundImage: "url(/static/images/register/loginBg.png)" }}>
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container className={classes.grids}>
          <Grid item md={4} className={classes.grid}>
            <h1>您已经成功联系销售！</h1>
            <h2>谢谢您咨询购买R2.ai新一代人工智能自动机器建模产品。我们的销售人员将尽快与您联系。</h2>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Index;