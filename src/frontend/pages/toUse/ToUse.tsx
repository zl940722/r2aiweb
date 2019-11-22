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
    const [content, setcontent] = React.useState("");
    const [isSuccess, setSuccess] = React.useState(false);
    axios.get("/probation/applyProbation", { params: { userId: props.router.query.id } }).then((response: any) => {
      if (response.status === 200) {
        setcontent("试用成功");
        setSuccess(true);
      }
    }).catch((error: any) => {
      if (error.response) {
        console.log(error.response.data);
        setcontent(error.response.data);
        setSuccess(false);
      }
    });
    const classes = useStyles();

    return (
      <div>
        {
          <div style={{ background: "#F5F5F5", textAlign: "center", margin: "200px 300px 380px", padding: 200 }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
              <img style={{ width: 32, height: 32 }} src={"/static/images/price/succ.png"}/><h1
              style={{ color: "#333333" }}>试用申请提交成功！</h1>
            </div>
            <p>

              欢迎您亲身体验R2.ai新一代人工智能自动机器建模产品。我们将把产品试用账户发送至您的邮箱。<br/>
              您收到邮件后即可开始免费试用！如果试用需求数量非常高，试用账户的发送也许会有所延迟哦！
            </p>
          </div>
        }
      </div>
    );
  }
;

export default Index;
