import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import _ from "lodash";

import SimpleInput from "../src/frontend/Components/SimpleInput";
import SimpleButton from "../src/frontend/Components/SimpleButton";
import SimpleDialog from "../src/frontend/Components/SimpleDialog";
import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { Button } from "grommet";

const { parse } = require("url");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      fontSize: "36px",
      textAlign: "center",
      margin: "2rem 0"
    },
    bg: {
      backgroundSize: "cover",
      backgroundPosition: "50%",
      backgroundRepeat: "no-repeat",
      fontSize: "1rem",
      paddingTop: 70
    },
    container: {
      width: "61.12%",
      background: "#F5F5F5",
      margin: "0 auto"
    },
    dense: {
      marginTop: 19
    },
    grids: {
      margin: "0 auto"
    },
    grid: {
      margin: "2.5rem auto",
      cursor: "pointer"
    },
    button: {
      display: "flex",
      justifyContent: "center",
      marginTop: "2.5rem"
    }
  })
);

function ModifyPassword(res: any) {
  const { user = {} } = res;
  const parsedUrl = parse(res.router.asPath, true);
  const { query: { token } } = parsedUrl;
  const [userId, upUserId] = useState(user.id);
  const classes = useStyles();
  const [values, setValues] = React.useState<any>({
    oldPwd: "",
    newPwd: "",
    password: ""
  });
  const arr: Array<string> = [];
  const [checkErrorList, setCheckErrorList] = React.useState(arr);
  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>, invalid: boolean) => {
    setValues({ ...values, [name]: event.target.value });
    let tempList: Array<string> = invalid ? _.chain(checkErrorList).concat(name).uniq().value() : _.pull(checkErrorList, name);
    setCheckErrorList(tempList);
  };

  // const [dialogInfo, setDialogOpen] = React.useState({
  //   open: false,
  //   content: "",
  //   type: ""
  // });

  const [open, setOpen] = React.useState(false);
  const [modal, setModal] = React.useState({
    content: "",
    type: "",
    buttonName: ""
  });

  React.useEffect(() => {
    if (!token && !userId) {
      res.router.push("/login");
    }
  }, []);

  const required = token ? ["password", "newPwd"] : ["password", "newPwd", "oldPwd"];

  const submit = () => {
    const requiredValues = _.chain(values).pick(required).values().compact().value();
    if (requiredValues.length < required.length || checkErrorList.length > 0 || password !== newPwd) {
      setOpen(true);
      setModal({
        content: "请正确填写以上信息",
        type: "warning",
        buttonName: "确定"
      });
      // setDialogOpen({
      //   open: true,
      //   content: "请正确填写上述选项。",
      //   type: "warning"
      // });
    } else {
      const uri = token ? "/user/forgetPassword" : "/user/resetPassword";
      axios.post(uri, { ...values, token, userId })
        .then(() => {
          setOpen(true);
          if(token){
            setModal({
              content: "修改成功",
              type: "success",
              buttonName: "返回登录"
            });
          }else{
            setModal({
              content: "修改成功",
              type: "success",
              buttonName: "确认"
            });
          }

          setValues({
            oldPwd: "",
            newPwd: "",
            password: ""
          });
          // Router.push(`/login`);
        })
        .catch((err: any) => {
          // setDialogOpen({
          //   open: true,
          //   content: err.response.data,
          //   type: "error"
          // });
          setOpen(true);
          setModal({
            content: err.response.data,
            type: "error",
            buttonName: "确定"
          });
        });
    }
  };
  const headerText = token ? "忘记密码" : "重置密码";
  const { password, newPwd, oldPwd } = values;
  return (
    <div className={classes.bg}>
      <div className={classes.header}>{headerText}</div>
      <form className={classes.container} noValidate>
        <Grid container className={classes.grids}>
          <Grid item lg={9} xs={10} className={classes.grid}>
            {!token ? <SimpleInput
              type="password"
              value={oldPwd}
              label="原密码"
              required={_.includes(required, "oldPwd")}
              allowedLength={8}
              helperText="请输入密码"
              className={classes.dense}
              onChange={handleChange("oldPwd")}
              margin="dense"
            /> : null}
            <SimpleInput
              type="password"
              value={password}
              label="新密码"
              required={_.includes(required, "password")}
              allowedLength={8}
              helperText="请输入密码"
              className={classes.dense}
              onChange={handleChange("password")}
              margin="dense"
            />
            <SimpleInput
              type="password"
              label="确认密码"
              value={newPwd}
              regex={new RegExp(`^${password}$`)}
              required={_.includes(required, "newPwd")}
              allowedLength={8}
              helperText="请确认密码一致"
              className={classes.dense}
              onChange={handleChange("newPwd")}
              margin="dense"
            />
            <div className={classes.button} style={{ textAlign: "center" }}>
              <SimpleButton
                onClick={_.debounce(submit, 1000)}
                label={"提交"}
              />
            </div>
          </Grid>
        </Grid>
      </form>
      {/*<SimpleDialog*/}
      {/*  dialogInfo={dialogInfo} setOpen={(res)=>{*/}
      {/*  setDialogOpen*/}
      {/*  console.log(res.target.value , 'sdsadsa')*/}
      {/*}}/>*/}


      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"提示"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {modal.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ border: "1px solid #D3323E", width: 138, height: 38, borderRadius: 20, color: "#D3323E" }}
            onClick={() => {
              if (modal.buttonName == "返回登录") {
                setOpen(false);
                Router.push("/login");
              } else {
                setOpen(false);
              }
            }} color="primary">
            {modal.buttonName}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

ModifyPassword.getInitialProps = async function(props) {
  let user;
  if (typeof window === "object") {
    const url = "/user/login";
    const _user = await fetch(url);
    user = await _user.json();
  } else {
    const result = await fetch(process.env.AUTH_SERVICE || "http://192.168.0.221:8088", {
      headers: {
        cookie: props.req.headers.cookie
      }
    });
    user = result.status === 200 ? await result.json() : {};
  }

  return {
    user
  };
};

export default withRouter(ModifyPassword);
