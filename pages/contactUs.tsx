import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import _ from "lodash";
import { Grommet, Box, Button } from "grommet";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SimpleInput from "../src/frontend/Components/SimpleInput";
import SimpleSelect from "../src/frontend/Components/SimpleSelect";
import SimpleTextArea from "../src/frontend/Components/SimpleTextArea";
import SimpleButton from "../src/frontend/Components/SimpleButton";
import { string } from "prop-types";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      fontSize: "2.25rem",
      textAlign: "center",
      margin: "2rem 0"
    },
    bg: {
      backgroundSize: "cover",
      backgroundPosition: "50%",
      backgroundRepeat: "no-repeat",
      fontSize: "1rem"
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
const contactTypes = {
  "获取试用版": "获取试用版",
  "寻求合作": "寻求合作",
  "普通咨询": "普通咨询"
};

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
  const [values, setValues] = React.useState<any>({
    dropDown: false,
    language: "zh-CN",
    type: "获取试用版",
    name: "",
    mail: "",
    phone: "",
    company: "",
    message: ""
  });
  const arr: Array<string> = [];
  const [checkErrorList, setCheckErrorList] = React.useState(arr);
  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>, invalid: boolean) => {
    setValues({ ...values, [name]: event.target.value });
    const tempList: Array<string> = invalid ? _.chain(checkErrorList).concat(checkErrorList, name).uniq().value() : _.pull(checkErrorList, name);
    setCheckErrorList(tempList);
  };

  const [modal, setModal] = React.useState({
    open: false,
    content: "",
    type: ""
  });

  //["type", "name", "mail", "phone", "company", "message"]
  const submit = () => {
    console.log(checkErrorList);
    if (checkErrorList.length > 0) {
      setModal({
        open: true,
        content: "以上选项为必填，请正确填写。",
        type: "error"
      });
    } else {
      axios.post("user/sendMail", {
        "data": values,
        "mailType": "contact"
      }).catch((err: any) => {
        setModal({
          open: true,
          content: err.response.data,
          type: "error"
        });
      });
    }
  };

  const { type, name, mail, phone, company, message } = values;
  return (
    <div className={classes.bg}>
      <div className={classes.header}>联系合作</div>
      <form className={classes.container} noValidate>
        <Grid container className={classes.grids}>
          <Grid item lg={9} xs={10} className={classes.grid}>
            <SimpleSelect
              label="目的"
              xs={12}
              className={classes.dense}
              value={type}
              onChange={handleChange("type")}
              data={contactTypes}
              margin="normal"
            />
            <SimpleInput
              value={name}
              label="用户姓名"
              required={true}
              allowedLength={32}
              regex={/^[\s\S]*.*[^\s][\s\S]*$/}
              helperText="用户名不能为空"
              className={classes.dense}
              onChange={handleChange("name")}
              margin="dense"
            />
            <SimpleInput
              label="邮件"
              value={mail}
              required
              allowedLength={32}
              regex={/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/}
              helperText="请输入正确的邮箱"
              className={classes.dense}
              onChange={handleChange("mail")}
              margin="dense"
            />

            <SimpleInput
              label="电话"
              value={phone}
              required
              regex={/^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[35678]\d{2}|4(?:0\d|1[0-2]|9\d))|9[189]\d{2}|66\d{2})\d{6}$/}
              helperText="请输入正确的手机号码"
              className={classes.dense}
              onChange={handleChange("phone")}
              margin="dense"
            />
            <SimpleInput
              label="公司"
              required
              value={company}
              allowedLength={32}
              className={classes.dense}
              onChange={handleChange("company")}
              margin="dense"
            />

            <SimpleTextArea
              label="描述"
              value={message}
              rows={6}
              required
              allowedLength={128}
              regex={/^[\s\S]*.*[^\s][\s\S]*$/}
              helperText="描述不能为空"
              className={classes.dense}
              onChange={handleChange("message")}
              margin="dense"
            />
            <div className={classes.button}>
              <SimpleButton
                onClick={() => _.throttle(submit, 1000)}
                label={"提交"}
              />
            </div>
          </Grid>
        </Grid>
      </form>
      <Dialog
        open={modal.open}
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
            setModal({ ...modal, open: false });
          }} color="primary">
            取消
          </Button>
          <Button onClick={() => {
            setModal({ ...modal, open: false });
          }} color="primary" autoFocus>
            确定
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
