import React, { ReactElement, useEffect, useReducer, useRef, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";
import { Input, message, Modal, PageHeader } from "antd";

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
    main: {
      backgroundImage: `url(/static/images/login/login.png)`,
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center 5.3125rem',
      height: "45rem",
      width: "76.5625rem",
      // margin: "5.3125rem auto",
      margin: "0 auto",
      padding:'5.3125rem 0',
      // minHeight:'calc(100vh - 140px - 16.125rem)',
    },
    msg: {
      paddingTop: "2.8125rem",
      marginLeft: "41.5rem",
      "& p": {
        color: "#333",
        fontSize: "1.875rem"
      },
      "& dl": {
        color: "#333",
        fontSize: "1.125rem",
        "& dd": {
          position: "relative",
          "& img": {
            position: "absolute",
            right: "3.75rem",
            width: "7.5625rem",
            height: "3.125rem",
            bottom: 0
          }
        }
      },
      "& input": {
        display: "block",
        width: "31.3125rem",
        borderWidth: "0 0 1px 0",
        margin: "1rem 0 3.25rem 0",
        "&:hover,&:focus": {
          borderWidth: "0 0 1px 0 !important"
        }
      }
    },
    submit: {
      background: "#6177A5",
      width: "31.25rem",
      lineHeight: "4.25rem",
      color: "#fff",
      fontSize: "1.5rem",
      textAlign: "center",
      borderRadius: "0.2rem",
      display: "inline-block",
      '&:hover':{
        background: "#193169",
        color: "#fff !important",
      }
    },
    forget: {
      color: "#5C8EE9",
      fontSize: "1.125rem",
      display: "block",
      textAlign: "right",
      paddingRight: "3rem",
      position: "relative",
      top: "-2rem"
    }
  })
);
interface State {
  email?: string;
  password?: string;
  captcha?: string;
}
export default function ():ReactElement {
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
        location.href = "/";
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
          Modal.success({
            content: "操作成功，请查看最新邮件操作"
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
        <PageHeader
          style={{
            left: "-1.5rem",
            position: "relative"
          }}
          onBack={() => upForget(false)}
          title="找回密码"
          subTitle=""
        />
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
    </section>
  );
}
