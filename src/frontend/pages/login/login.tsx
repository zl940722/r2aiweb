import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import { Grommet, Box, Button } from "grommet";
import axios from "axios";
import Router from "next/router";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
  const [values, setValues] = React.useState<State>({
    email: "",
    password: "",
    captcha: ","
  });

  const [captcha, setCaptchas] = React.useState("") as any;

  const [open, setOpen] = React.useState(false);
  const [modal, setModal] = React.useState({
    content: "",
    type: ""
  });
  const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submit = () => {
    console.log(values.email, values.password, values.captcha);

    if (values.email === "" || values.password === "" || values.captcha === "") {
      setOpen(true);
      setModal({
        content: "以上选项为必填，请正确填写。",
        type: "error"
      });
    } else {

      axios.defaults.withCredentials = true;
      axios.put("/user/login", {
        email: values.email,
        password: values.password,
        captcha: values.captcha
      }).then((res: any) => {
        if (res.status === 200) {
          axios.get("/user/login").then((data: any) => {
            localStorage.setItem("userInfo", JSON.stringify(data.data));
            Router.push("/loginSucess");
          });
        }
      }).catch((err: any) => {
        setOpen(true);
        setModal({
          content: err.response.data,
          type: "error"
        });
        setCaptchas(new Date().getTime());
      });
    }



  };

  return (
    <div className={classes.bg} style={{ backgroundImage: "url(/static/images/register/loginBg.png)" }}>
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container className={classes.grids}>
          <Grid item md={4} className={classes.grid}>
            <TextField
              id="standard-dense"
              label="邮箱"
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("email")}
              margin="dense"
            />
            <TextField
              id="standard-dense"
              label="密码"
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("password")}
              margin="dense"
            />

            <TextField
              id="standard-dense"
              label="验证码"
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("captcha")}
              margin="dense"
            />
            <img src={`/user/captcha?${captcha}`}
                 alt=""
                 onClick={() => {
                   setCaptchas(new Date().getTime());
                 }}
            />

            <Grommet theme={customTheme} className={classes.buttonWrap}>
              <Box align="center" pad="medium">
                <Button
                  hoverIndicator
                  label={"登录"}
                  className={classes.button}
                  onClick={submit}
                />
              </Box>
            </Grommet>
          </Grid>
        </Grid>
      </form>

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
          <Button onClick={() => {
            setOpen(false);
          }} color="primary">
            取消
          </Button>
          <Button onClick={() => {
            setOpen(false);
          }} color="primary" autoFocus>
            确定
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
