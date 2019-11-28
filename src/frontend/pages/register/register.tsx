import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import provinces from "./province";
import citise from "./city";
import areas from "./area";
import axios from "axios";
import _ from "lodash";
import { Grommet, Box, Button } from "grommet";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


import SimpleInput from "../../Components/SimpleInput";
import SimpleSelect from "../../Components/SimpleSelectCountry";
import CommonButton from "../../Components/SimpleButton";
import { Modal } from "antd";
import Agreement from "../../../../pages/agreement";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bg: {
      background: "#fff",
      backgroundSize: "cover",
      backgroundPosition: "50%",
      backgroundRepeat: "no-repeat"
    },
    container: {
      width:1200,
      margin:'62px auto 98px',
      padding:'60px 180px 50px',
      backgroundColor:'#F5F5F5',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 400
    },
    grids: {
      maxWidth: "1920px",
      margin: "0 auto"
    },
    center: {
      margin: "0 auto"
    },
    grid: {
      flex: 1,
      background: "#f5f5f5",
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
      display: "flex",
      justifyContent: "center",
      marginTop: "2.5rem"
    },
    main: {
      display: "flex",
      alignItems: "center",
      "&  select": {
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        paddingLeft: "1rem"
      }
    },
    labelCss: {
      width: "6.6rem",
      textAlign: "right",
      marginRight: "0.75rem"
    },
    selectTextField: {
      minHeight: "4.25rem",
      backgroundColor: "#FFFFFF"
    },
    captcha: {
      position: "relative"
    }
  })
);

const country = [
  {
    code: "zh",
    name: "中国"
  }
];
//
const industry = [
  {
    code: "Healthcare",
    name: "医疗"
  }, {
    code: "Insurance",
    name: "保险"
  }, {
    code: "Automotive",
    name: "汽车"
  }, {
    code: "Financial",
    name: "金融"
  }, {
    code: "Pharmaceutical",
    name: "制药"
  }, {
    code: "Environmental",
    name: "环境"
  }, {
    code: "Telecom",
    name: "电信"
  }, {
    code: "Logistics",
    name: "物流"
  }, {
    code: "Technology",
    name: "科技"
  }
];

// interface State {
//   name: string;
//   age: string;
//   multiline: string;
//   country: string;
//   province: string;
//   city: string
// }

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState<any>({
    address: "",
    area: "",
    captcha: "",
    city: "",
    companyName: "",
    country: "",
    department: "",
    email: "",
    industry: "",
    language: "zh-CN",
    phone: "",
    productName: "",
    province: "",
    password: "",
    username: ""
  });
  const arr: Array<string> = [];
  const [checkErrorList, setCheckErrorList] = React.useState(arr);
  const handleChange = (name: any) => (event: React.ChangeEvent<HTMLInputElement>, invalid: boolean) => {
    setValues({ ...values, [name]: event.target.value });
    if (name !== "industry" || name !== "area" || name !== "city" || name !== "country" || name !== "province") {
      let tempList: Array<string> = invalid ? _.chain(checkErrorList).concat(name).uniq().value() : _.pull(checkErrorList, name);
      setCheckErrorList(tempList);
    }
  };

  const [show, setshow] = React.useState({
    province: false,
    city: false,
    area: false
  }) as any;

  const [open, setOpen] = React.useState(false);
  const [modal, setModal] = React.useState({
    content: "",
    type: ""
  });

  const [dialogInfo, setDialogOpen] = useState(false);

  const [cityList, setcityList] = React.useState([]) as any;
  const [areaList, setareaList] = React.useState([]) as any;
  const [captcha, setCaptchas] = React.useState("") as any;

  const required = ["email", "password", "phone"];

  const submit = () => {

    const requiredValues = _.chain(values).pick(required).values().compact().value();
    console.log(requiredValues, checkErrorList, 999999999999);
    if ((/^\w{6,18}$/).test(values.password) == false
      || (/^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[35678]\d{2}|4(?:0\d|1[0-2]|9\d))|9[189]\d{2}|66\d{2})\d{6}$/).test(values.phone) == false
      || (/^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/).test(values.email) == false) {
      setOpen(true);
      setModal({
        content: "请正确填写以上信息",
        type: "error"
      });
    } else if (values.address === "" || values.area === "" || values.city === ""
      || values.companyName === "" || values.country === "" || values.department === "" || values.email === ""
      || values.industry === "" || values.phone === "" || values.province === ""
      || values.password === "" || values.username === "") {
      setOpen(true);
      setModal({
        content: "以上选项为必填，请正确填写。",
        type: "error"
      });
    } else {
      const list: any = {
        "address": values.address,
        "area": values.area,
        "captcha": values.captcha,
        "city": values.city,
        "companyName": values.companyName,
        "country": values.country,
        "department": values.department,
        "email": values.email,
        "industry": values.industry,
        "language": "zh-CN",
        "phone": values.phone,
        "productName": values.productName,
        "province": values.province,
        "password": values.password,
        "username": values.username
      };

      axios.post("/user/captcha", { "captcha": values.captcha })
        .then((res: any) => {
          if (res.status === 200) {
            axios.post("/user/register", list)
              .then((res: any) => {
                if (res.status === 200) {
                  setOpen(true);
                  setModal({
                    content: "注册成功,请去邮箱激活！",
                    type: "success"
                  });
                }
              }).catch((error: any) => {
              if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              }
              setOpen(true);
              const message = error.response.data;
              let errMes;
              if (message == "You are an official user") {
                errMes = "你已经是正式用户,请登录。";
              } else if (message == "need active") {
                errMes = "你已注册，请去邮箱激活。";
              } else {
                errMes = error.response.data;
              }
              setModal({
                content: errMes,
                type: "error"
              });
              setCaptchas(new Date().getTime());
            });
          }
        }).catch((err: any) => {
        setOpen(true);
        console.log(err.response.data);
        setModal({
          content: "验证码错误",
          type: "error"
        });
        setCaptchas(new Date().getTime());
      });
    }


  };
  const contactTypes = {
    "获取试用版": "获取试用版",
    "寻求合作": "寻求合作",
    "普通咨询": "普通咨询"
  };

  return (
    <div className={classes.bg}>
      <h1 className={'all_title'} style={{ textAlign: "center", margin: '85px auto 0' }}>免费试用申请</h1>
      <form className={classes.container} noValidate autoComplete="off">
              <SimpleInput
                value={values.email}
                label="用户邮箱"
                required={true}
                allowedLength={32}
                regex={/^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/}
                helperText="请输入正确的邮箱"
                className={classes.dense}
                onChange={handleChange("email")}
                margin="dense"
              />
              <SimpleInput
                label="用户姓名"
                required={true}
                value={values.username}
                allowedLength={32}
                regex={/^[\s\S]*.*[^\s][\s\S]*$/}
                helperText="请输入正确的用户姓名"
                className={classes.dense}
                onChange={handleChange("username")}
                margin="dense"
              />

              <SimpleInput
                label="密码"
                type="password"
                required={true}
                regex={/^\w{6,1000}$/}
                value={values.password}
                allowedLength={12}
                helperText="密码不能少于六位"
                className={classes.dense}
                onChange={handleChange("password")}
                margin="dense"
              />

              <SimpleInput
                label="公司全称"
                required={true}
                value={values.companyName}
                allowedLength={32}
                helperText="公司全称不能为空"
                className={classes.dense}
                onChange={handleChange("companyName")}
                margin="dense"
              />

              <SimpleSelect
                label="国家"
                xs={12}
                className={classes.dense}
                value={values.country}
                onChange={(e: any) => {
                  setshow({ province: true });
                  setValues({
                    email: values.email,
                    username: values.username,
                    password: values.password,
                    companyName: values.companyName,
                    productName: values.productName,
                    country: e.target.value
                  });

                }}
                data={country}
                margin="normal"
              />
              <SimpleSelect
                label="省"
                xs={12}
                className={classes.dense}
                value={values.province}
                onChange={(event: any) => {
                  let bb: any = [];
                  _.forEach(citise, function(o) {
                    if (event.target.value === _.toInteger(o.parentCode)) {
                      bb.push(o);
                      setshow({ province: true, city: true });
                      setcityList(bb);
                      setValues({
                        email: values.email,
                        username: values.username,
                        password: values.password,
                        country: values.country,
                        companyName: values.companyName,
                        productName: values.productName,
                        province: event.target.value
                      });
                    }

                  });

                }}
                disabled={!show.province}
                data={provinces}
                margin="normal"
              />
              <SimpleSelect
                label="市"
                xs={12}
                className={classes.dense}
                value={values.city}
                onChange={(event: any) => {
                  setValues({
                    email: values.email,
                    username: values.username,
                    password: values.password,
                    companyName: values.companyName,
                    productName: values.productName,
                    country: values.country,
                    province: values.province,
                    city: event.target.value
                  });
                  let bb: any = [];
                  _.forEach(areas, function(o) {
                    if (event.target.value === _.toInteger(o.parentCode)) {
                      bb.push(o);
                      setshow({ province: true, city: true, area: true });
                      setareaList(bb);
                    }

                  });
                }}
                data={cityList}
                margin="normal"
                disabled={!show.city}
              />
              <SimpleSelect
                label="区"
                xs={12}
                className={classes.dense}
                value={values.area}
                onChange={handleChange("area")}
                data={areaList}
                margin="normal"
                disabled={!show.area}
              />
              <SimpleInput
                value={values.address}
                label="公司地址"
                required={true}
                allowedLength={32}
                helperText="公司地址不能为空"
                className={classes.dense}
                onChange={handleChange("address")}
                margin="dense"
              />

              <SimpleSelect
                label="所处行业"
                xs={12}
                className={classes.dense}
                value={values.industry}
                onChange={handleChange("industry")}
                data={industry}
                margin="normal"
              />

              <SimpleInput
                value={values.department}
                label="业务部门"
                required={true}
                allowedLength={32}
                helperText="业务部门不能为空"
                className={classes.dense}
                onChange={handleChange("department")}
                margin="dense"
              />
              <SimpleInput
                value={values.phone}
                label="联系电话"
                required={true}
                allowedLength={11}
                regex={/^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[35678]\d{2}|4(?:0\d|1[0-2]|9\d))|9[189]\d{2}|66\d{2})\d{6}$/}
                helperText="请输入正确的联系电话"
                className={classes.dense}
                onChange={handleChange("phone")}
                margin="dense"
              />


              <div className={classes.captcha}>
                <SimpleInput
                  label="请输入验证码"
                  required={true}
                  value={values.captcha}
                  allowedLength={32}
                  className={classes.dense}
                  onChange={handleChange("captcha")}
                  margin="dense"
                />

                <img src={`/user/captcha?${captcha}`}
                     style={{ marginTop: "11px", position: "absolute", right: 10, top: 16 }}
                     alt=""
                     onClick={() => {
                       setCaptchas(new Date().getTime());
                     }}
                />
              </div>
              <p style={{ marginTop: 40 }} onClick={() => {
                setDialogOpen(true);
              }}>本人同意签署贵公司的<a>SAAS用户协议</a></p>
              <div className={classes.button}>
                <CommonButton
                  onClick={submit}
                  label={"立即注册"}
                />
              </div>
      </form>
      <Modal
        width={"80%"}
        title=""
        visible={dialogInfo}
        onOk={() => {
          setDialogOpen(false);
        }}
        onCancel={() => {
          setDialogOpen(false);
        }}
        footer={null}
        style={{ top: 0 }}

      >
        <Agreement/>
      </Modal>

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
          {/*<Button*/}
          {/*  style={{ border: "1px solid #D3323E", width: 138, height: 38, borderRadius: 20, color: "#D3323E" }}*/}
          {/*  onClick={() => {*/}
          {/*    setOpen(false);*/}
          {/*  }} color="primary">*/}
          {/*  取消*/}
          {/*</Button>*/}
          <Button
            style={{ border: "1px solid #D3323E", width: 138, height: 38, borderRadius: 20, color: "#D3323E" }}
            onClick={() => {
              setOpen(false);
            }} color="primary">
            确定
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
