import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import { Grommet, Box, Button } from "grommet";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Router from "next/router";
import SimpleInput from "../../Components/SimpleInput";
import SimpleSelect from "../../Components/SimpleSelectCountry";
import SimpleButton from "../../Components/SimpleButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(3),
      display: "flex",
      flexFlow: 'unset',
      alignItems: "center",
      marginLeft: 0
    },
    bg: {
      background: "#fff",
      backgroundSize: "cover"

    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 800
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
      background: "#F5F5F5",
      margin: "6.5rem auto 13.5rem",
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
    captcha: {
      position: "relative"
    }
  })
);


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

const pay = [
  {
    code: "Monthly",
    name: "月租"
  }, {
    code: "Annual",
    name: "年租"
  }
];


export default function TextFields(props: any) {

  console.log("cxx111", props.router.query.id);
  const [mPrice, setmPrice] = React.useState(0);
  const [yPrice, setyPrice] = React.useState(0);
  const [userInfo, setuserInfo] = React.useState({
    active: false,
    email: "",
    id: ""
  });


  console.log("aaaa", mPrice, yPrice);
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: userInfo.email,
    username: "",
    product: "专业版",
    rent: "",
    price: "",
    captcha: ""
  }) as any;
  const [captcha, setCaptchas] = React.useState("") as any;
  const handleChange = (name: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [payMethod, setpayMethod] = React.useState("alipay");

  const [rent, setrent] = React.useState("");

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setpayMethod(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const [modal, setModal] = React.useState({
    content: "",
    type: ""
  });
  const [resData, setResData] = React.useState({}) as any;
  const buy = () => {

    if (values.price === "" || values.captcha === "") {
      setOpen(true);
      setModal({
        content: "以上选项为必填，请正确填写。",
        type: "error"
      });
    } else {
      axios.post("/user/captcha", { "captcha": values.captcha })
        .then(() => {
          pays();
        })
        .catch((error) => {
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
  };

  const pays = () => {
    axios.get("/user/login").then((data: any) => {
      setuserInfo(data.data);
      const list: any = {
        email: data.data.email,
        orderType: rent,
        price: values.price * 100,
        renew: false,
        totalPrice: values.price * 100,
        productId: "prod_E7zzObgS7kjaMK",
        language: "zh-CN",
        duration: 1,
        productName: "专业版"
      };

      if (payMethod === "alipay") {
        console.log(1);
        axios.post("/alipay/createCharge", list)
          .then(async (response: any) => {
            if (response.status === 200) {
              console.log(response, "responseresponse");
              await setResData(response);
              await setOpen(true);
              await setModal({
                content: "支付完成前，请不要关闭此支付验证窗口。 支付完成后，请根据您支付的情况点击下面按钮。",
                type: "alipay"
              });
              window.open(response.data.url, "", "width=1100,height=600");
            } else {
              setOpen(true);
              setModal({
                content: "支付错误",
                type: "error"
              });
            }
          })
          .catch((error: any) => {
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
          });


      } else if (payMethod === "unionPay") {
        console.log(2);

        axios.post("/unionPay/createCharge", list)
          .then((response: any) => {
            setResData(response);
            setOpen(true);
            setModal({
              content: "支付完成前，请不要关闭此支付验证窗口。 支付完成后，请根据您支付的情况点击下面按钮。",
              type: "unionPay"
            });
            window.open(response.data.url, "", "width=1100,height=600");
          })
          .catch((error: any) => {
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
          });


      } else if (payMethod === "wechat") {
        console.log(4);
        axios.post("/wechat/createCharge", list)
          .then((response: any) => {
            setResData(response);
            setOpen(true);
            setModal({
              content: "支付完成前，请不要关闭此支付验证窗口。 支付完成后，请根据您支付的情况点击下面按钮。",
              type: "wechat"
            });
            window.open(response.data.url, "", "width=1100,height=600");
            // seturl(response.data.url);
          })
          .catch((error: any) => {
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
          });

      }

    }).catch((error: any) => {
      console.log(error, "error");
    });
  };

  return (
    <div className={classes.bg}>
      <h1 style={{ textAlign: "center", marginTop: 100 }}>产品购买</h1>
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container className={classes.grids}>
          <Grid item md={6} className={classes.grid}>

            <SimpleInput
              label="购买产品"
              required={true}
              value={values.product}
              allowedLength={32}
              regex={/^[\s\S]*.*[^\s][\s\S]*$/}
              disabled
              className={classes.dense}
              onChange={handleChange("product")}
              margin="dense"
            />
            <SimpleSelect
              label="月租/年租"
              xs={12}
              className={classes.dense}
              value={rent}
              onChange={(e) => {
                setrent(e.target.value);

                axios.get("/price").then((response: any) => {
                  const { essentialPrice, essentialPriceYear } = response.data;
                  console.log(response.data);
                  setmPrice(essentialPrice);
                  setyPrice(essentialPriceYear);
                  console.log(rent, "rent", e.target.value);
                  if (e.target.value === "Monthly") {
                    setValues({ price: essentialPrice });
                  } else {
                    setValues({ price: essentialPriceYear });
                  }
                });

              }}
              data={pay}
              margin="normal"
            />


            <SimpleInput
              label="产品价格"
              required={true}
              value={values.price}
              allowedLength={32}
              regex={/^[\s\S]*.*[^\s][\s\S]*$/}
              disabled
              className={classes.dense}
              onChange={handleChange("price")}
              margin="dense"
            />


            <div className={classes.captcha}>
              <SimpleInput
                label="请输入验证码"
                required={true}
                value={values.captcha}
                allowedLength={32}
                regex={/^[\s\S]*.*[^\s][\s\S]*$/}
                className={classes.dense}
                onChange={handleChange("captcha")}
                margin="dense"
              />

              <img src={`/user/captcha?${captcha}`}
                   style={{ marginTop: "11px",position:'absolute',right:10,top:16 }}
                   alt=""
                   onClick={() => {
                     setCaptchas(new Date().getTime());
                   }}
              />
            </div>

            {/*<TextField*/}
            {/*  id="standard-dense"*/}
            {/*  variant="outlined"*/}
            {/*  label="请输入验证码"*/}
            {/*  style={{ width: 600 }}*/}
            {/*  fullWidth={true}*/}
            {/*  className={clsx(classes.textField, classes.dense)}*/}
            {/*  onChange={handleChange("captcha")}*/}
            {/*  margin="dense"*/}
            {/*/>*/}
            {/*<img src={`/user/captcha?${captcha}`}*/}
            {/*     alt=""*/}
            {/*     onClick={() => {*/}
            {/*       setCaptchas(new Date().getTime());*/}
            {/*     }}*/}
            {/*/>*/}

            <div>
              <FormControl component="fieldset" className={classes.formControl}>
                <div style={{marginRight:20,width:'6.6rem'}}>请选择支付方式</div>
                <RadioGroup aria-label="gender" name="gender1" value={payMethod} onChange={handleChanges}>
                  <Grid container spacing={10}>
                    <Grid item md={4}>
                      <FormControlLabel value="unionPay" control={<Radio/>} label={<img style={{ width: 120 }}
                                                                                        src='/static/images/price/yinlian@2x.png'/>}/>
                    </Grid>
                    <Grid item md={4}>
                      <FormControlLabel value="alipay" control={<Radio/>} label={<img style={{ width: 120 }}
                                                                                      src='/static/images/price/zhifubao@2x.png'/>}/>
                    </Grid>
                    <Grid item md={4}>
                      <FormControlLabel value="wechat" control={<Radio/>}
                                        label={<img style={{ width: 120 }} src='/static/images/price/weixin@2x.png'/>}/>
                    </Grid>
                  </Grid>
                </RadioGroup>
              </FormControl>

            </div>

            <p>本人同意签署贵公司的<a href="/agreement">SAAS用户协议</a></p>
            <div className={classes.button}>
              <SimpleButton
                onClick={buy}
                label={"提交订单"}
              />
            </div>
          </Grid>
        </Grid>
        <div>

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
              <SimpleButton
                style={{ height: "2.375rem",padding:'10px !important'}}
                onClick={() => {
                  setOpen(false);
                }}
                label={"取消"}
              />
              <SimpleButton
                style={{ height: "2.375rem",}}
                onClick={() => {
                  console.log("modalSubmit", resData);
                  if (modal.type === "alipay") {
                    axios.get("/alipay/orderQuery", {
                      params: { orderId: resData.data.orderId }
                    }).then(result => {
                      Router.push("/paysuccess");
                      // history.push('/paysuccess');
                    }).catch(() => {
                      console.log("失败");
                    });
                  } else if (modal.type === "unionPay") {
                    axios.get("/unionPay/orderQuery", {
                      params: { orderId: resData.data.orderId }
                    }).then(result => {
                      console.log("unionPay");
                      Router.push("/paysuccess");
                    }).catch(() => {
                      console.log("失败");
                    });
                  } else if (modal.type === "wechat") {
                    axios.get("/wechat/orderQuery", {
                      params: { orderId: resData.data.orderId }
                    }).then(result => {
                      console.log("wechat");
                      Router.push("/paysuccess");
                    }).catch(() => {
                      console.log("失败");
                    });
                  } else if ((modal.type === "error")) {
                    setOpen(false);
                  }
                }}
                label={"确定"}
              />
            </DialogActions>
          </Dialog>
        </div>
      </form>
    </div>
  );
}


