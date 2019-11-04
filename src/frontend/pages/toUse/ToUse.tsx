import React from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";
import axios from "axios";

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
      fontSize: 44,
      padding: "12rem"
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


const Index = (props: any) => {
    console.log(props, "toUse");
    const [content, setcontent] = React.useState("试用成功");
    axios.get("/probation/applyProbation", { params: { userId: props.router.query.id } }).then((response: any) => {
      if (response.status === 200) {
        setcontent("试用成功");
      }
    }).catch((error: any) => {
      if (error.response) {
        console.log(error.response.data);
        setcontent(error.response.data);
      }
    });
    const classes = useStyles();

    return (
      <div className={classes.bg} style={{ backgroundImage: "url(/static/images/register/loginBg.png)" }}>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container className={classes.grids}>
            <Grid item md={4} className={classes.grid}>
              {content}
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
;

export default Index;