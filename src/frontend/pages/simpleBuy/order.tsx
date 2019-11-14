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
import FormLabel from "@material-ui/core/FormLabel";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Router from "next/router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(3)
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
      width: "10.5rem",
      height: "3.2rem",
      fontWeight: "bold",
      border:'1px solid #D3323E',
      background: "#F5F5F5 !important",
      color:'#D3323E'
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
    value: "Monthly",
    label: "月租"
  }, {
    value: "Annual",
    label: "年租"
  }
];


export default function TextFields(props: any) {

  // let userRes: any = props.router.query.user || {};
  // let userE: any;
  //
  // if (Object.keys(userRes).length !== 0) {
  //   userE = JSON.parse(userRes);
  // } else {
  //   userE = {
  //     email: "",
  //     id: ""
  //   };
  // }


  console.log("cxx111", props.router.query.id);
  const [mPrice, setmPrice] = React.useState(0);
  const [yPrice, setyPrice] = React.useState(0);
  const [userInfo, setuserInfo] = React.useState({
    active: false,
    email: "",
    id: ""
  });


  // axios.get("/price").then((response: any) => {
  //   const { basicPrice, basicPriceYear } = response.data;
  //   console.log(response.data);
  //   setmPrice(basicPrice);
  //   setyPrice(basicPriceYear);
  // });

  console.log("aaaa", mPrice, yPrice);
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: userInfo.email,
    username: "",
    product: "简易版",
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
  // const [url, seturl] = React.useState("") as any;
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
      console.log(data, "1234568");
      const list: any = {
        email: data.data.email,
        orderType: rent,
        price: values.price * 100,
        renew: false,
        totalPrice: values.price * 100,
        productId: "prod_E7zz1vwTiZxOgO",
        language: "zh-CN",
        duration: 1,
        productName: "简易版"
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
      console.log("error", error);
    });
  };


  return (
    <div className={classes.bg}>
      {/*<p style={{color:'#D3323E',textAlign:'center'}} onClick={()=> {*/}
      {/*  */}
      {/*}}>返回价单列表</p>*/}
      <h1 style={{ textAlign: "center", marginTop: 100 }}>产品购买</h1>
      <form className={classes.container} noValidate autoComplete="off">

        <Grid container className={classes.grids}>

          <Grid item md={6} className={classes.grid}>


            {/*<TextField*/}
            {/*  id="standard-dense"*/}
            {/*  label="用户邮箱"*/}
            {/*  value={values.email}*/}
            {/*  disabled*/}
            {/*  fullWidth={true}*/}
            {/*  className={clsx(classes.textField, classes.dense)}*/}
            {/*  onChange={handleChange("email")}*/}
            {/*  margin="dense"*/}
            {/*/>*/}
            <TextField
              id="standard-dense"
              variant="outlined"
              label="购买产品"
              value={values.product}
              disabled
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("product")}
              margin="dense"
            />
            <TextField
              id="standard-select-currency"
              variant="outlined"
              select
              label="月租/年租"
              className={classes.textField}
              value={rent}
              onChange={(e) => {
                setrent(e.target.value);

                axios.get("/price").then((response: any) => {
                  const { basicPrice, basicPriceYear } = response.data;
                  setmPrice(basicPrice);
                  setyPrice(basicPriceYear);
                  if (e.target.value === "Monthly") {
                    setValues({ price: basicPrice });
                  } else {
                    setValues({ price: basicPriceYear });
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
              {pay.map((option: any) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>


            <TextField
              id="standard-dense"
              variant="outlined"
              label="产品价格"
              value={values.price}
              disabled
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("price")}
              margin="dense"
            />

            <TextField
              id="standard-dense"
              variant="outlined"
              label="请输入验证码"
              fullWidth={true}
              style={{ width: 600 }}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("captcha")}
              margin="dense"
            />
            <img src={`/user/captcha?${captcha}`}
                 style={{marginTop:'11px'}}
                 alt=""
                 onClick={() => {
                   setCaptchas(new Date().getTime());
                 }}
            />

            <div>
              <FormControl component="fieldset" className={classes.formControl}>
                {/*<FormLabel component="legend">请选择支付方式</FormLabel>*/}
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

            {/*<p>本人同意签署贵公司的<a href="www.baidu.com">SAAS用户协议</a></p>*/}
            <Grommet theme={customTheme} className={classes.buttonWrap}>
              <Box align="center" pad="medium">
                <Button
                  onClick={buy}
                  hoverIndicator
                  label={"提交订单"}
                  className={classes.button}
                />
              </Box>
            </Grommet>
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
              <Button onClick={() => {
                setOpen(false);
              }} color="primary">
                取消
              </Button>
              <Button onClick={() => {
                console.log("modalSubmit", resData);
                if (modal.type === "alipay") {
                  axios.get("/alipay/orderQuery", {
                    params: { orderId: resData.data.orderId }
                  }).then(result => {
                    Router.push("/paySuccess");
                  }).catch(() => {
                    console.log("失败");
                  });
                } else if (modal.type === "unionPay") {
                  axios.get("/unionPay/orderQuery", {
                    params: { orderId: resData.data.orderId }
                  }).then(result => {
                    console.log("unionPay");
                    Router.push("/paySuccess");
                  }).catch(() => {
                    console.log("失败");
                  });
                } else if (modal.type === "wechat") {
                  axios.get("/wechat/orderQuery", {
                    params: { orderId: resData.data.orderId }
                  }).then(result => {
                    console.log("wechat");
                    Router.push("/paySuccess");
                  }).catch(() => {
                    console.log("失败");
                  });
                } else if ((modal.type === "error")) {
                  setOpen(false);
                }
              }} color="primary" autoFocus>
                确定
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </form>
    </div>
  );
}


