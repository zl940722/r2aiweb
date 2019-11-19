import React, { ReactElement, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import { Grommet, Box, Button } from "grommet";
import axios from "axios";
import Router from "next/router";
import { Input, message } from "antd";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SimpleDialog from "../../Components/SimpleDialog";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      background: "#fff",
      margin: "2.5rem auto",
      padding: "4rem",
      borderRadius: ".3rem",
      // boxShadow: ".2rem .2rem .2rem #ddd",
      cursor: "pointer"
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
    },
    main:{
      backgroundImage:`url(/static/images/login/login.png)`,
      height:'42.125rem',
      width:"76.5625rem",
      margin:'5.3125rem auto',
    },
    msg:{
      paddingTop:"2.8125rem",
      marginLeft:'41.5rem',
      '& p':{
        color:"#333",
        fontSize:'1.875rem',
      },
      '& dl':{
        color:"#333",
        fontSize:"1.125rem",
        '& dd':{
          position:"relative",
          "& img":{
            position:'absolute',
            right:'3.75rem',
            width:'7.5625rem',
            height:"3.125rem",
            bottom:0,
          }
        }
      },
      '& input':{
        display:'block',
        width:'31.3125rem',
        borderWidth:'0 0 1px 0',
        margin:'1rem 0 3.25rem 0',
        "&:hover,&:focus":{
          borderWidth:'0 0 1px 0 !important',
        }
      }
    },
    submit:{
      background:"#6177A5",
      width:'31.25rem',
      lineHeight:"4.25rem",
      color:"#fff",
      fontSize:'1.5rem',
      textAlign:'center',
      borderRadius:"0.2rem",
      display: 'inline-block',
    },
    forget:{
      color:"#5C8EE9",
      fontSize:"1.125rem",
      display:"block",
      textAlign:"right",
      paddingRight: '3rem',
      position: "relative",
      top: "-2rem",
    }
  })
);

interface State {
  email?: string;
  password?: string;
  captcha?: string;
}

const customTheme = {
  button: {
    border: {
      radius: "1.6rem"
    },
    color: "#FFF"
  },
  global: {
    hover: {
      color: "#2C4159",
      background: "#FFF"
    },
    colors: {
      brand: "#FFF"
    }
  }
};
export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = useState<State>({
    email: "",
    password: "",
    captcha: ""
  });

  useEffect(()=>{
    message.config({
      top: 100,
      duration: 2,
      maxCount: 1,
    });
  },[]);

  const [error, setError] = useState<any>({
    email: false,
    password: false
  });

  const [captcha, setCaptchas] = useState("") as any;

  // const [open, setOpen] = useState(false);
  // const [modal, setModal] = useState({
  //   content: "",
  //   type: ""
  // });
  // const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValues({ ...values, [name]: event.target.value });
  // };
  const _email:any = useRef(null);
  const _password:any = useRef(null);
  const _captcha:any = useRef(null);

  const submit = () => {
    console.log(1,values)
    if(!values.email){
      return _email.current.focus();
    }else if(!values.password){
      return _password.current.focus();
    }else if(!values.captcha){
      return _captcha.current.focus();
    }
      // seterror({
      //   email: false
      // });
      axios.defaults.withCredentials = true;
      axios.put("/user/login", values).then((res: any) => {
        if (res.status === 200) {
          axios.get("/user/login").then((data: any) => {
            localStorage.setItem("userInfo", JSON.stringify(data.data));
            Router.push("/loginSucess");
          });
        }
      }).catch((err: any) => {
        const result = {
          'captcha error':"验证码错误",
          "password or email incorrect":"邮箱或密码错误",
          "Your account has expired.":"您的账户已过期",
        }[err.response.data]||err.response.data;

        message.error(result);

        // setError(err.response.data);
        // setOpen(true);
        // setModal({
        //   content: err.response.data,
        //   type: "error"
        // });
        setCaptchas(new Date().getTime());
      });
  };



  return (
    <div>
      {/*<form className={classes.container} noValidate autoComplete="off">*/}
        <section className={classes.main}>
            <div className={classes.msg}>
              <p>用户登录</p>
              <dl>
                <dd>
                  邮箱
                  <Input onChange={e=>{
                    setValues({
                      ...values,
                      email:e.target.value
                    })
                  }} ref={_email} placeholder="请输入邮箱地址" />
                </dd>
                <dd>
                  密码
                  <Input onChange={e=>{
                    setValues({
                      ...values,
                      password:e.target.value
                    })
                  }} ref={_password} placeholder="请输入密码" type="password"/>
                </dd>
                <dd>
                  验证码
                  <Input onChange={e=>{
                    setValues({
                      ...values,
                      captcha:e.target.value
                    })
                  }} ref={_captcha} placeholder="请输入验证码" maxLength={4}/>
                  <img src={`/user/captcha?${captcha}`}
                       alt=""
                       onClick={() => {
                         setCaptchas(new Date().getTime());
                       }}
                  />
                </dd>
              </dl>
              <a href="" className={classes.forget}>忘记密码？</a>
              <a href="javascript:"
                 onClick={submit}
                 className={classes.submit}>登录</a>
            </div>
        </section>

      {/*<SimpleDialog*/}
      {/*  dialogInfo={error} setOpen={error}/>*/}


      {/*  <Grid container className={classes.grids}>*/}
      {/*    <Grid item md={4} className={classes.grid}>*/}
      {/*      <TextField*/}
      {/*        id="standard-dense"*/}
      {/*        autoComplete="email"*/}
      {/*        label="邮箱"*/}
      {/*        fullWidth={true}*/}
      {/*        variant="outlined"*/}
      {/*        // error={error.email}*/}
      {/*        // helperText={"邮箱不能为空"}*/}
      {/*        className={clsx(classes.textField, classes.dense)}*/}
      {/*        onChange={(event: any)=> {*/}
      {/*          if(event.target.value === ''){*/}
      {/*            seterror({*/}
      {/*              email: true*/}
      {/*            });*/}
      {/*          }else{*/}
      {/*            seterror({*/}
      {/*              email: false*/}
      {/*            });*/}
      {/*          }*/}
      {/*          console.log(error)*/}
      {/*          handleChange("email")*/}
      {/*        }}*/}
      {/*        margin="dense"*/}
      {/*      />*/}
      {/*      <TextField*/}
      {/*        id="standard-dense"*/}
      {/*        variant="outlined"*/}
      {/*        // error={error.password}*/}
      {/*        // helperText={"密码不能为空"}*/}
      {/*        label="密码"*/}
      {/*        fullWidth={true}*/}
      {/*        className={clsx(classes.textField, classes.dense)}*/}
      {/*        onChange={(event:any) => {*/}
      {/*          if(event.target.value === ''){*/}
      {/*            seterror({*/}
      {/*              password: true*/}
      {/*            });*/}
      {/*          }else{*/}
      {/*            seterror({*/}
      {/*              password: false*/}
      {/*            });*/}
      {/*          }*/}
      {/*          handleChange("password")*/}
      {/*        }}*/}
      {/*        margin="dense"*/}
      {/*      />*/}

      {/*      <TextField*/}
      {/*        id="standard-dense"*/}
      {/*        variant="outlined"*/}
      {/*        label="验证码"*/}
      {/*        // error={error.captcha}*/}
      {/*        // helperText={"密码不能为空"}*/}
      {/*        fullWidth={true}*/}
      {/*        className={clsx(classes.textField, classes.dense)}*/}
      {/*        onChange={(event:any) => {*/}
      {/*          if(event.target.value === ''){*/}
      {/*            seterror({*/}
      {/*              captcha: true*/}
      {/*            });*/}
      {/*          }else{*/}
      {/*            seterror({*/}
      {/*              captcha: false*/}
      {/*            });*/}
      {/*          }*/}
      {/*          handleChange("captcha")*/}
      {/*        }}*/}
      {/*        margin="dense"*/}
      {/*      />*/}
      {/*      <img src={`/user/captcha?${captcha}`}*/}
      {/*           alt=""*/}
      {/*           onClick={() => {*/}
      {/*             setCaptchas(new Date().getTime());*/}
      {/*           }}*/}
      {/*      />*/}

      {/*      <Grommet theme={customTheme} className={classes.buttonWrap}>*/}
      {/*        <Box align="center" pad="medium">*/}
      {/*          <Button*/}
      {/*            hoverIndicator*/}
      {/*            label={"登录"}*/}
      {/*            className={classes.button}*/}
      {/*            onClick={submit}*/}
      {/*          />*/}
      {/*        </Box>*/}
      {/*      </Grommet>*/}
      {/*    </Grid>*/}
      {/*  </Grid>*/}
      {/*</form>*/}

      {/*<Dialog*/}
      {/*  open={open}*/}
      {/*  // onClose={handleClose}*/}
      {/*  aria-labelledby="alert-dialog-title"*/}
      {/*  aria-describedby="alert-dialog-description"*/}
      {/*>*/}
      {/*  <DialogTitle id="alert-dialog-title">{"提示"}</DialogTitle>*/}
      {/*  <DialogContent>*/}
      {/*    <DialogContentText id="alert-dialog-description">*/}
      {/*      {modal.content}*/}
      {/*    </DialogContentText>*/}
      {/*  </DialogContent>*/}
      {/*  <DialogActions>*/}
      {/*    <Button onClick={() => {*/}
      {/*      setOpen(false);*/}
      {/*    }} color="primary">*/}
      {/*      取消*/}
      {/*    </Button>*/}
      {/*    <Button onClick={() => {*/}
      {/*      setOpen(false);*/}
      {/*    }} color="primary" autoFocus>*/}
      {/*      确定*/}
      {/*    </Button>*/}
      {/*  </DialogActions>*/}
      {/*</Dialog>*/}

    </div>
  );
}
