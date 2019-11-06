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
      margin: "0 auto"
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

const country = [
  {
    value: "zh",
    label: "中国"
  }
];
//
const industry = [
  {
    value: "Healthcare",
    label: "医疗"
  }, {
    value: "Insurance",
    label: "保险"
  }, {
    value: "Automotive",
    label: "汽车"
  }, {
    value: "Financial",
    label: "金融"
  }, {
    value: "Pharmaceutical",
    label: "制药"
  }, {
    value: "Environmental",
    label: "环境"
  }, {
    value: "Telecom",
    label: "电信"
  }, {
    value: "Logistics",
    label: "物流"
  }, {
    value: "Technology",
    label: "科技"
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


  return (
    <div className={classes.bg} style={{ backgroundImage: "url(/static/images/register/loginBg.png)" }}>
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container className={classes.grids}>
          <Grid item md={4} className={classes.grid}>
            <TextField
              id="standard-dense"
              variant="outlined"
              label="用户邮箱"
              fullWidth={true}
              value={values.email}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("email")}
              margin="dense"
            />
            <TextField
              id="standard-dense"
              variant="outlined"
              label="用户姓名"
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("username")}
              margin="dense"
            />
            <TextField
              id="standard-dense"
              variant="outlined"
              label="密码"
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("password")}
              margin="dense"
            />
            <TextField
              id="standard-dense"
              variant="outlined"
              label="公司全称"
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("companyName")}
              margin="dense"
            />
            <TextField
              variant="outlined"
              id="standard-select-currency"
              select
              label="国家地区"
              value={values.country}
              className={classes.textField}
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
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
            >
              {country.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {
              show.province ? <TextField
                variant="outlined"
                id="standard-select-currency"
                select
                label="省"
                className={classes.textField}
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
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
              >
                {provinces.map((option: any) => (
                  <MenuItem key={option.code} value={option.code}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField> : null
            }
            {
              show.city ? <TextField
                variant="outlined"
                id="standard-select-currency"
                select
                label="市"
                value={values.city}
                className={classes.textField}
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
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
              >
                {cityList.map(option => (
                  <MenuItem key={option.code} value={option.code}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField> : null
            }
            {
              show.area ? <TextField
                variant="outlined"
                id="standard-select-currency"
                select
                label="区"
                className={classes.textField}
                value={values.area}
                onChange={handleChange("area")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
              >
                {areaList.map(option => (
                  <MenuItem key={option.code} value={option.code}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField> : null
            }


            <TextField
              variant="outlined"
              id="standard-dense"
              label="公司地址"
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("address")}
              margin="dense"
            />
            <TextField
              variant="outlined"
              id="standard-select-currency"
              select
              label="所处行业"
              className={classes.textField}
              value={values.industry}
              onChange={handleChange("industry")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
            >
              {industry.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              variant="outlined"
              id="standard-dense"
              label="业务部门"
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("department")}
              margin="dense"
            />
            <TextField
              variant="outlined"
              id="standard-dense"
              label="联系电话"
              fullWidth={true}
              value={values.phone}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("phone")}
              margin="dense"
            />
            <TextField
              variant="outlined"
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
            <p>本人同意签署贵公司的<a href="www.baidu.com">SAAS用户协议</a></p>
            <Grommet theme={customTheme} className={classes.buttonWrap}>
              <Box align="center" pad="medium">
                <Button
                  onClick={submit}
                  hoverIndicator
                  label={"立即注册"}
                  className={classes.button}
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
