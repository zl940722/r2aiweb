import React from "react";
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
// import SimpleSelect from "../src/frontend/Components/SimpleSelect";
// import SimpleTextArea from "../src/frontend/Components/SimpleTextArea";
import SimpleButton from "../../Components/SimpleButton";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bg: {
      background: "#fff",
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
      width: "10.5rem",
      height: "3.2rem",
      fontWeight: "bold",
      border: "1px solid #D3323E",
      background: "#F5F5F5 !important",
      color: "#D3323E"
    },
    main: {
      display: "flex",
      alignItems: "baseline",
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

  const handleChange = (name: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
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

  const [cityList, setcityList] = React.useState([]) as any;
  const [areaList, setareaList] = React.useState([]) as any;
  const [captcha, setCaptchas] = React.useState("") as any;

  const submit = () => {
    if (values.address === "" || values.area === "" || values.city === ""
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

      console.log(values.email, "zzz", list, "list");

      axios.post("/user/captcha", { "captcha": values.captcha })
        .then((res: any) => {
          console.log(res, "dasd");
          if (res.status === 200) {
            axios.post("/user/register", list)
              .then((res: any) => {
                console.log(res, "dasd");
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
              setModal({
                content: error.response.data,
                type: "error"
              });
              setCaptchas(new Date().getTime());
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
  const contactTypes = {
    "获取试用版": "获取试用版",
    "寻求合作": "寻求合作",
    "普通咨询": "普通咨询"
  };

  return (
    <div className={classes.bg}>
      <h1 style={{ textAlign: "center", marginTop: 100 }}>免费试用申请</h1>
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container className={classes.grids}>
          <Grid item lg={9} xs={12} className={classes.center}>
            <Grid item lg={10} xs={12} spacing={1} className={classes.grid}>


              <SimpleInput
                value={values.email}
                label="用户邮箱"
                required={true}
                allowedLength={32}
                regex={/^[\s\S]*.*[^\s][\s\S]*$/}
                helperText="用户邮箱不能为空"
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
                helperText="用户名不能为空"
                className={classes.dense}
                onChange={handleChange("username")}
                margin="dense"
              />

              <SimpleInput
                label="密码"
                required={true}
                value={values.password}
                allowedLength={12}
                regex={/^[\s\S]*.*[^\s][\s\S]*$/}
                helperText="密码不能为空"
                className={classes.dense}
                onChange={handleChange("password")}
                margin="dense"
              />

              <SimpleInput
                label="公司全称"
                required={true}
                value={values.companyName}
                allowedLength={32}
                regex={/^[\s\S]*.*[^\s][\s\S]*$/}
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

              {

                show.province ?

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
                    data={provinces}
                    margin="normal"
                  />
                  : null
              }
              {

                show.city ?

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
                  />

                  : null
              }
              {

                show.area ?

                  <SimpleSelect
                    label="区"
                    xs={12}
                    className={classes.dense}
                    value={values.area}
                    onChange={handleChange("area")}
                    data={areaList}
                    margin="normal"
                  />
                  : null
              }
              <SimpleInput
                value={values.address}
                label="公司地址"
                required={true}
                allowedLength={32}
                regex={/^[\s\S]*.*[^\s][\s\S]*$/}
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
                regex={/^[\s\S]*.*[^\s][\s\S]*$/}
                helperText="业务部门不能为空"
                className={classes.dense}
                onChange={handleChange("department")}
                margin="dense"
              />
              <SimpleInput
                value={values.phone}
                label="联系电话"
                required={true}
                allowedLength={32}
                regex={/^[\s\S]*.*[^\s][\s\S]*$/}
                helperText="联系电话不能为空"
                className={classes.dense}
                onChange={handleChange("phone")}
                margin="dense"
              />
              <SimpleInput
                value={values.captcha}
                label="验证码"
                required={true}
                allowedLength={32}
                regex={/^[\s\S]*.*[^\s][\s\S]*$/}
                helperText="验证码不能为空"
                className={classes.dense}
                onChange={handleChange("captcha")}
                margin="dense"
              />
              {/*<Grid item xs={12}><TextField*/}
              {/*  variant="outlined"*/}
              {/*  id="standard-dense"*/}
              {/*  label="验证码"*/}
              {/*  fullWidth={true}*/}
              {/*  className={clsx(classes.textField, classes.dense)}*/}
              {/*  onChange={handleChange("captcha")}*/}
              {/*  margin="dense"*/}
              {/*/></Grid>*/}
              <img src={`/user/captcha?${captcha}`}
                   alt=""
                   onClick={() => {
                     setCaptchas(new Date().getTime());
                   }}
              />
              <p>本人同意签署贵公司的<a href="">SAAS用户协议</a></p>


              <Grommet theme={customTheme} className={classes.buttonWrap}>
                <Box align="center" pad="medium">
                  <SimpleButton
                    onClick={submit}
                    label={"立即注册"}
                  />
                </Box>
              </Grommet>
            </Grid>
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
