import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import _ from "lodash";

import SimpleInput from "../src/frontend/Components/SimpleInput";
import SimpleSelect from "../src/frontend/Components/SimpleSelect";
import SimpleTextArea from "../src/frontend/Components/SimpleTextArea";
import SimpleButton from "../src/frontend/Components/SimpleButton";
import SimpleDialog from "../src/frontend/Components/SimpleDialog";


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
      margin: "0 auto 80px"
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
export default function ContactUs() {
  const classes = useStyles();
  const [values, setValues] = React.useState<any>({
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
    if (name !== "type") {
      let tempList: Array<string> = invalid ? _.chain(checkErrorList).concat(name).uniq().value() : _.pull(checkErrorList, name);
      setCheckErrorList(tempList);
    }
  };

  const [dialogInfo, setDialogOpen] = React.useState({
    open: false,
    content: "",
    type: ""
  });
  const required = ["name", "mail", "phone", "company", "message"];

  const submit = () => {
    const requiredValues = _.chain(values).pick(required).values().compact().value();
    if (requiredValues.length < required.length || checkErrorList.length > 0) {
      setDialogOpen({
        open: true,
        content: "以上选项包含必填项，请正确填写。",
        type: "warning"
      });
    } else {
      axios.post("user/sendMail", {
        "data": values,
        "emailType": "contact"
      }).then(() =>{
        setDialogOpen({
          open: true,
          content: "联系成功",
          type: "tooltip"
        });
        setValues({
          language: "zh-CN",
          type: "获取试用版",
          name: "",
          mail: "",
          phone: "",
          company: "",
          message: ""
        })
      }).catch((err: any) => {
          setDialogOpen({
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
      <div className={'all_title'} style={{margin:'63px auto'}}>联系我们</div>
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
              required={_.includes(required, "name")}
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
              required={_.includes(required, "mail")}
              allowedLength={32}
              regex={/^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/}
              helperText="请输入正确的邮箱"
              className={classes.dense}
              onChange={handleChange("mail")}
              margin="dense"
            />

            <SimpleInput
              label="电话"
              value={phone}
              required={_.includes(required, "phone")}
              regex={/^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[35678]\d{2}|4(?:0\d|1[0-2]|9\d))|9[189]\d{2}|66\d{2})\d{6}$/}
              helperText="请输入正确的手机号码"
              className={classes.dense}
              onChange={handleChange("phone")}
              margin="dense"
            />
            <SimpleInput
              label="公司"
              value={company}
              allowedLength={32}
              className={classes.dense}
              onChange={handleChange("company")}
              required={_.includes(required, "company")}
              margin="dense"
            />

            <SimpleTextArea
              label="描述"
              value={message}
              rows={6}
              allowedLength={128}
              regex={/^[\s\S]*.*[^\s][\s\S]*$/}
              helperText="描述不能为空"
              className={classes.dense}
              onChange={handleChange("message")}
              required={_.includes(required, "message")}
              margin="dense"
            />
            <div className={classes.button}>
              <SimpleButton
                onClick={_.debounce(submit, 1000)}
                label={"提交"}
              />
            </div>
          </Grid>
        </Grid>
      </form>
      <SimpleDialog
        dialogInfo={dialogInfo} setOpen={() => setDialogOpen({
        open: false,
        content: "",
        type: ""
      })}/>
    </div>
  );
}
