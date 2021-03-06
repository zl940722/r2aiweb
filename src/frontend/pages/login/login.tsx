import React, { ReactElement, useEffect, useReducer, useRef, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";
import { Input, message, Modal, PageHeader } from "antd";
import SimpleDialog from "../../../../src/frontend/Components/SimpleDialog";

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
      margin: "40px auto",
      padding: "64px",
      borderRadius: ".3rem",
      cursor: "pointer"
    },
    buttonWrap: {
      width: "100%",
      paddingTop: "40px"
    },
    button: {
      width: "168px",
      height: "51px",
      fontWeight: "bold",
      background: "#061222 !important"
    },
    main: {
      backgroundImage: `url(/static/images/login/login.png)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center 155px",
      height: "795px",
      width: "1225px",
      // margin: "5.3125rem auto",
      margin: "0 auto",
      padding: "155px 0 85px"
      // minHeight:'calc(100vh - 140px - 16.125rem)',
    },
    msg: {
      paddingTop: "45px",
      marginLeft: "664px",
      "& p": {
        color: "#333",
        fontSize: "30px"
      },
      "& dl": {
        color: "#333",
        fontSize: "18px",
        "& dd": {
          position: "relative",
          "& img": {
            position: "absolute",
            right: "3.75rem",
            width: "121px",
            height: "50px",
            bottom: 0
          }
        }
      },
      "& input": {
        display: "block",
        width: "500px",
        borderWidth: "0 0 1px 0",
        margin: "16px 0 52px 0",
        "&:hover,&:focus": {
          borderWidth: "0 0 1px 0 !important"
        }
      }
    },
    submit: {
      background: "#6177A5",
      width: "500px",
      lineHeight: "68px",
      color: "#fff",
      fontSize: "24px",
      textAlign: "center",
      borderRadius: "0.2rem",
      display: "inline-block",
      "&:hover": {
        background: "#193169",
        color: "#fff !important"
      }
    },
    forget: {
      color: "#5C8EE9",
      fontSize: "18px",
      display: "block",
      textAlign: "right",
      paddingRight: "48px",
      position: "relative",
      top: "-32px"
    }
  })
);

interface State {
  email?: string;
  password?: string;
  captcha?: string;
}

export default function (): ReactElement {
  const classes = useStyles();
  const [values, setValues] = useState<State>({
    email: "",
    password: "",
    captcha: ""
  });

  useEffect(() => {

    message.config({
      top: 100,
      duration: 2,
      maxCount: 1
    });
  }, []);

  const [captcha, setCaptchas] = useState("") as any;
  //登录
  const _email: any = useRef(null);
  const _password: any = useRef(null);
  const _captcha: any = useRef(null);

  const [dialogInfo, setDialogOpen] = useState({
    open: false,
    content: "",
    type: ""
  });

  //forget
  const __email: any = useRef(null);
  const __captcha: any = useRef(null);
  const [forget, upForget]: any = useReducer((state, action) => {
    setValues({});
    setCaptchas(Date.now());
    return action;
  }, false);

  const submit = () => {
    if (!values.email) {
      return _email.current.focus();
    } else if (!values.password) {
      return _password.current.focus();
    } else if (!values.captcha) {
      return _captcha.current.focus();
    }
    axios.defaults.withCredentials = true;
    axios
      .put("/user/login", values)
      .then(() => {
        const reqp: any = getRequest()
        location.href = reqp.redirect || '/';
      })
      .catch((err: any) => {
        const result =
          {
            "captcha error": "验证码错误",
            "password or email incorrect": "邮箱或密码错误",
            "please active first": "请先激活账户"
          }[err.response.data] || err.response.data;

        message.error(result);
        setCaptchas(new Date().getTime());
      });
  };

  const submit_forget = () => {
    if (!values.email) {
      return __email.current.focus();
    } else if (!values.captcha) {
      return __captcha.current.focus();
    }
    axios.defaults.withCredentials = true;
    axios
      .post("/user/forget", values)
      .then((res: any) => {
        if (res.status === 200) {
          // Modal.success({
          //   content: "操作成功，请查看最新邮件操作"
          // });
          setDialogOpen({
            open: true,
            content: "操作成功，请查看最新邮件操作",
            type: "success"
          });
          upForget(false);
        }
      })
      .catch((err: any) => {
        const result =
          {
            "captcha error": "验证码错误",
            "password or email incorrect": "用户不存在",
            "already send a mail": "邮件已发送，请勿重复点击"
          }[err.response.data] || err.response.data;

        message.error(result);
        setCaptchas(new Date().getTime());
      });
  };

  function getRequest() {
    const url = window.location.search;
    const jsonList = {};
    if (url.indexOf("?") > -1) {
      const str = url.slice(url.indexOf("?") + 1);
      const strs = str.split("&");
      for (let i = 0; i < strs.length; i++) {
        jsonList[strs[i].split("=")[0]] = strs[i].split("=")[1];//如果出现乱码的话，可以用decodeURI()进行解码
      }
    }
    return jsonList;
  }

  return (
    <section className={classes.main}>
      <div className={classes.msg} style={{ display: forget ? "none" : "" }}>
        <p>用户登录</p>
        <dl>
          <dd>
            邮箱
            <Input
              onChange={e => {
                setValues({
                  ...values,
                  email: e.target.value
                });
              }}
              value={values.email}
              ref={_email}
              placeholder="请输入邮箱地址"
            />
          </dd>
          <dd>
            密码
            <Input
              onChange={e => {
                setValues({
                  ...values,
                  password: e.target.value
                });
              }}
              value={values.password}
              ref={_password}
              placeholder="请输入密码"
              type="password"
            />
          </dd>
          <dd>
            验证码
            <Input
              onChange={e => {
                setValues({
                  ...values,
                  captcha: e.target.value
                });
              }}
              value={values.captcha}
              ref={_captcha}
              placeholder="请输入验证码"
              maxLength={4}
            />
            <img
              src={`/user/captcha?${captcha}`}
              alt=""
              onClick={() => {
                setCaptchas(new Date().getTime());
              }}
            />
          </dd>
        </dl>
        <a
          href="javascript:"
          onClick={() => upForget(true)}
          className={classes.forget}
        >
          忘记密码？
        </a>
        <a href="javascript:" onClick={submit} className={classes.submit}>
          登录
        </a>
      </div>

      <div className={classes.msg} style={{ display: forget ? "" : "none" }}>
        <div style={{ cursor: "pointer" }}
          onClick={() => upForget(false)}>
          <PageHeader
            style={{
              left: "-24px",
              position: "relative"
            }}
            onBack={() => upForget(false)}
            title="找回密码"
            subTitle=""
          />
        </div>
        <dl style={{ marginTop: "2rem" }}>
          <dd>
            邮箱
            <Input
              onChange={e => {
                setValues({
                  ...values,
                  email: e.target.value
                });
              }}
              ref={__email}
              value={values.email}
              placeholder="请输入邮箱地址"
            />
          </dd>
          <dd>
            验证码
            <Input
              onChange={e => {
                setValues({
                  ...values,
                  captcha: e.target.value
                });
              }}
              ref={__captcha}
              value={values.captcha}
              placeholder="请输入验证码"
              maxLength={4}
            />
            <img
              src={`/user/captcha?${captcha}`}
              alt=""
              onClick={() => {
                setCaptchas(new Date().getTime());
              }}
            />
          </dd>
        </dl>
        <a href="javascript:" onClick={submit_forget} className={classes.submit}>
          确定
        </a>
      </div>
      <SimpleDialog
        dialogInfo={dialogInfo} setOpen={() => setDialogOpen({
        open: false,
        content: "",
        type: ""
      })}/>
    </section>
  );
}
