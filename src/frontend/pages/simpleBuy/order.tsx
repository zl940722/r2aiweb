import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Modal, PageHeader } from "antd";
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

import SimpleInput from "../../Components/SimpleInput";
import SimpleSelect from "../../Components/SimpleSelectCountry";
import SimpleButton from "../../Components/SimpleButton";
import Agreement from "../../../../pages/agreement";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(3),
      display: "flex",
      flexFlow: "unset",
      alignItems: "center",
      marginLeft: 0
    },
    all: {
      width: 1400,
      margin: "0 auto"
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
      width: "100%",
      margin: "2.5rem auto",
      background: "#F5F5F5"
    },
    grid: {
      flex: 1,
      background: "#F5F5F5",
      width: "100%",
      margin: "2.5rem auto ",
      // padding: "1rem",
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


// const customTheme = {
//   button: {
//     border: {
//       radius: "1.6rem"
//     },
//     color: "#FFF"
//   },
//   global: {
//     hover: {
//       color: "#2C4159",
//       background: "#FFF"
//     },
//     colors: {
//       brand: "#FFF"
//     }
//   }
// };

const pay = [
  {
    code: "Monthly",
    name: "月租"
  }, {
    code: "Annual",
    name: "年租"
  }
];

const products = [
  {
    code: "prod_E7zz1vwTiZxOgO",
    name: "简易版"
  }, {
    code: "prod_E7zzObgS7kjaMK",
    name: "专业版"
  }
];

export default function Orders(props: any) {
  const classes = useStyles();
  const {user={}} = props;
  const level = (user.level >1 ? +user.level:+props.router.asPath.split("=")[1])||2;

  const [mPrice, setmPrice] = useState(0);
  const [yPrice, setyPrice] = useState(0);
  const [userInfo, setuserInfo] = useState({
    active: false,
    email: "",
    id: ""
  });

  const [values, setValues] = useState({
    email: userInfo.email,
    username: "",
    product: "简易版",
    rent: "",
    price: "",
    captcha: ""
  }) as any;
  const [captcha, setCaptchas] = useState("") as any;
  const handleChange = (name: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [payMethod, setpayMethod] = useState("alipay");

  const [rent, setrent] = useState('Monthly');

  const [product, setProduct] = useState(products[level - 2].code);

  const [productName, setProductName] = useState("");

  useEffect(() => {
    // setrent("Monthly");
    if (level == 2) {
      setProduct("prod_E7zz1vwTiZxOgO");
      setProductName("Basic");
      axios.get("/price").then((response: any) => {
        const { basicPrice} = response.data;
        setValues({ price: basicPrice });
      });

    } else {
      setProduct("prod_E7zzObgS7kjaMK");
      setProductName("Essential");
      axios.get("/price").then((response: any) => {
        const {essentialPrice } = response.data;
        setValues({ price: essentialPrice });
      });
    }
  }, [level]);

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setpayMethod(event.target.value);
  };
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState({
    content: "",
    type: "",
    cancelText: "",
    okText: "确认"
  });
  const [resData, setResData] = useState({}) as any;
  const buy = () => {
    if (values.price === "" || values.captcha === "") {
      setOpen(true);
      setModal({
        content: "以上选项为必填，请正确填写。",
        type: "error",
        cancelText: "",
        okText: "确认"
      });
    } else {
      axios.get('/buy',{
        params:{
          captcha: values.captcha,
          orderType: rent,
          price: values.price * 100,
          renew: false,
          totalPrice: values.price * 100,
          productId: product,
          language: "zh-CN",
          duration: 1,
          productName,
          payMethod,
          level,
        }
      }).then((result)=>{
        let {response} = result.data;
        setResData(response);
        setOpen(true);
        setModal({
          content: "支付完成前，请不要关闭此支付验证窗口。 支付完成后，请根据您支付的情况点击下面按钮。",
          type: payMethod,
          cancelText: "支付遇到问题？",
          okText: "支付完成"
        });
        window.open(response.url, "", "width=1100,height=600");
      }).catch((result)=>{
        let {error,content=''} = JSON.parse(result.request.responseText);
        switch (error) {
          case 'captcha error':
            content = '验证码错误';
            break;
          case 'not login'://未登录
            location.href = '/login';
            break;
          case 'pay fail':
            content = content||'支付错误';
            break;
          case 'type error':
            content = '选择套餐错误，请刷新后重试';
            break;
        }

        setOpen(true);
        setModal({
          content,
          type: "error",
          cancelText: "",
          okText: "确认"
        });
        setCaptchas(new Date().getTime());
      })


      // axios.post("/user/captcha", { "captcha": values.captcha })
      //   .then(() => {
      //     pays();
      //   })
      //   .catch((error) => {
      //     if (error.response) {
      //       console.log(error.response.data);
      //       console.log(error.response.status);
      //       console.log(error.response.headers);
      //     }
      //     setOpen(true);
      //     setModal({
      //       content: "验证码错误",
      //       type: "error",
      //       cancelText: "",
      //       okText: "确认"
      //     });
      //     setCaptchas(new Date().getTime());
      //   });
    }
  };

  // const pays = () => {
  //   axios.get("/user/login").then((data: any) => {
  //     setuserInfo(data.data);
  //     const list: any = {
  //       email: data.data.email,
  //       orderType: rent,
  //       price: values.price * 100,
  //       renew: false,
  //       totalPrice: values.price * 100,
  //       productId: product,
  //       language: "zh-CN",
  //       duration: 1,
  //       productName: productName
  //     };
  //     if (payMethod === "alipay") {
  //       axios.post("/alipay/createCharge", list)
  //         .then(async (response: any) => {
  //           if (response.status === 200) {
  //             await setResData(response);
  //             await setOpen(true);
  //             await setModal({
  //               content: "支付完成前，请不要关闭此支付验证窗口。 支付完成后，请根据您支付的情况点击下面按钮。",
  //               type: "alipay",
  //               cancelText: "支付遇到问题？",
  //               okText: "支付完成"
  //             });
  //             window.open(response.data.url, "", "width=1100,height=600");
  //           } else {
  //             setOpen(true);
  //             setModal({
  //               content: "支付错误",
  {/*              type: "error",*/}
  {/*              cancelText: "",*/}
  {/*              okText: "确认"*/}
  {/*            });*/}
  {/*          }*/}
  //         })
  //         .catch((error: any) => {
  //           if (error.response) {
  //             console.log(error.response.data);
  //             console.log(error.response.status);
  //             console.log(error.response.headers);
  //           }
  //           setOpen(true);
  //           setModal({
  //             content: error.response.data,
  //             type: "error",
  //             cancelText: "",
  //             okText: "确认"
  //           });
  //         });
  //
  //
  //     } else if (payMethod === "unionPay") {
  //       axios.post("/unionPay/createCharge", list)
  //         .then((response: any) => {
  {/*          setResData(response);*/}
  //           setOpen(true);
  //           setModal({
  //             content: "支付完成前，请不要关闭此支付验证窗口。 支付完成后，请根据您支付的情况点击下面按钮。",
  //             type: "unionPay",
  //             cancelText: "支付遇到问题？",
  //             okText: "支付完成"
  {/*          });*/}
  //           window.open(response.data.url, "", "width=1100,height=600");
  //         })
  //         .catch((error: any) => {
  //           if (error.response) {
  {/*            console.log(error.response.data);*/}
  {/*            console.log(error.response.status);*/}
  {/*            console.log(error.response.headers);*/}
  //           }
  //           setOpen(true);
  //           setModal({
  //             content: error.response.data,
  //             type: "error",
  //             cancelText: "",
  //             okText: "确认"
  //           });
  {/*        });*/}


  //     } else if (payMethod === "wechat") {
  //       axios.post("/wechat/createCharge", list)
  //         .then((response: any) => {
  {/*          setResData(response);*/}
  //           setOpen(true);
  //           setModal({
  {/*            content: "支付完成前，请不要关闭此支付验证窗口。 支付完成后，请根据您支付的情况点击下面按钮。",*/}
  //             type: "wechat",
  //             cancelText: "支付遇到问题？",
  //             okText: "支付完成"
  //           });
  //           window.open(response.data.url, "", "width=1100,height=600");
  //           // seturl(response.data.url);
  //         })
  //         .catch((error: any) => {
  //           if (error.response) {
  //             console.log(error.response.data);
  //             console.log(error.response.status);
  //             console.log(error.response.headers);
  //           }
  //           setOpen(true);
  //           setModal({
  //             content: error.response.data,
  //             type: "error",
  //             cancelText: "",
  //             okText: "确认"
  //           });
  //         });
  //
  //     }
  //   }).catch((error: any) => {
  //     console.log("error", error);
  //   });
  // };
  const [dialogInfo, setDialogOpen] = useState(false);
  return (
    <div className={classes.all}>
      <div className={classes.bg}>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            Router.back();
          }}>
          <PageHeader
            style={{
              left: "-24px",
              position: "relative",
              fontSize: 14
            }}
            onBack={() => {
              Router.back();
            }}
            title={`返回价单列表`}
            subTitle=""
          />
        </div>
        <h1 style={{ textAlign: "center", marginTop: 40, fontWeight: "bold", fontSize: 36 }}>产品购买</h1>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container className={classes.grids}>
            <Grid item md={6} className={classes.grid}>
              <SimpleSelect
                label="购买产品"
                xs={12}
                disabled={user.canLogin&&+user.type>1}
                className={classes.dense}
                value={product}
                onChange={(e) => {
                  setProduct(e.target.value);
                  axios.get("/price").then((response: any) => {
                    console.log(response.data, "response.data");
                    const { basicPrice, basicPriceYear, essentialPrice, essentialPriceYear } = response.data;
                    if (e.target.value === "prod_E7zz1vwTiZxOgO") {
                      setmPrice(basicPrice);
                      setyPrice(basicPriceYear);
                      setProductName("Basic");
                    } else {
                      setmPrice(essentialPrice);
                      setyPrice(essentialPriceYear);
                      setProductName("Essential");
                    }

                    if (e.target.value === "prod_E7zz1vwTiZxOgO") {
                      if (rent === "Monthly") {
                        setValues({ price: basicPrice });
                      } else {
                        setValues({ price: basicPriceYear });
                      }

                    } else {
                      if (rent === "Monthly") {
                        setValues({ price: essentialPrice });
                      } else {
                        setValues({ price: essentialPriceYear });
                      }

                    }
                  });
                }}
                data={products}
                margin="normal"
              />

              <SimpleSelect
                label="月租/年租"
                xs={12}
                className={classes.dense}
                value={rent}
                onChange={(e) => {
                  setrent(e.target.value);

                  axios.get("/price").then((response: any) => {
                    console.log(response.data, "response.data");
                    const { basicPrice, basicPriceYear, essentialPrice, essentialPriceYear } = response.data;
                    if (product === "prod_E7zz1vwTiZxOgO") {
                      setmPrice(basicPrice);
                      setyPrice(basicPriceYear);
                    } else {
                      setmPrice(essentialPrice);
                      setyPrice(essentialPriceYear);
                    }

                    if (e.target.value === "Monthly") {
                      if (product === "prod_E7zz1vwTiZxOgO") {
                        setValues({ price: basicPrice });
                      } else {
                        setValues({ price: essentialPrice });
                      }
                    } else {
                      if (product === "prod_E7zz1vwTiZxOgO") {
                        setValues({ price: basicPriceYear });
                      } else {
                        setValues({ price: essentialPriceYear });
                      }

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
                disabled
                className={classes.dense}
                onChange={handleChange("price")}
                margin="dense"
              />

              <div className={classes.captcha}>
                <SimpleInput
                  label="验证码"
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

              <div>
                <FormControl component="fieldset" className={classes.formControl}>
                  <div style={{ marginRight: 20, width: "6.6rem" }}>选择支付方式</div>
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
                                          label={<img style={{ width: 120 }}
                                                      src='/static/images/price/weixin@2x.png'/>}/>
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </FormControl>

              </div>

              <div style={{ marginTop: 40 }} onClick={() => {
                setDialogOpen(true);
              }}>
                <p>本人同意签署贵公司的<a>SAAS用户协议</a></p>
              </div>

              <div className={classes.button}>
                <SimpleButton
                  onClick={buy}
                  label={"提交订单"}
                />
              </div>
            </Grid>
          </Grid>
          <div>
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
              <DialogTitle style={{ fontSize: 24 }} id="alert-dialog-title">{"提示"}</DialogTitle>
              <DialogContent>
                <DialogContentText style={{ textAlign: "left" }} id="alert-dialog-description">
                  {modal.content}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                {
                  modal.cancelText !== "" ?
                    <div>
                      <Button
                        style={{ width: 138, height: 38, borderRadius: 20, color: "#D3323E", fontSize: 16 }}
                        onClick={() => {
                          if (modal.type === "alipay") {
                            axios.get("/alipay/orderQuery", {
                              params: { orderId: resData.orderId }
                            }).then(result => {
                              Router.push("/paySuccess");
                            }).catch(() => {
                              setOpen(false);
                              console.log("失败");
                            });
                          } else if (modal.type === "unionPay") {
                            axios.get("/unionPay/orderQuery", {
                              params: { orderId: resData.orderId }
                            }).then(result => {
                              console.log(result, "result");
                              if (result.data == "success") {
                                Router.push("/paySuccess");
                              } else {
                                setOpen(false);
                              }
                            }).catch(() => {
                              setOpen(false);
                              console.log("失败");
                            });
                          } else if (modal.type === "wechat") {
                            axios.get("/wechat/orderQuery", {
                              params: { orderId: resData.orderId }
                            }).then(result => {
                              Router.push("/paySuccess");
                            }).catch(() => {
                              setOpen(false);
                              console.log("失败");
                            });
                          } else if ((modal.type === "error")) {
                            setOpen(false);
                          }
                        }} color="primary">
                        {modal.cancelText}
                      </Button>
                      <Button
                        style={{
                          border: "1px solid #D3323E",
                          width: 138,
                          height: 38,
                          borderRadius: 20,
                          color: "#D3323E",
                          fontSize: 16
                        }}
                        onClick={() => {
                          if (modal.type === "alipay") {
                            axios.get("/alipay/orderQuery", {
                              params: { orderId: resData.orderId }
                            }).then(result => {
                              Router.push("/paySuccess");
                            }).catch(() => {
                              setOpen(false);
                              console.log("失败");
                            });
                          } else if (modal.type === "unionPay") {
                            axios.get("/unionPay/orderQuery", {
                              params: { orderId: resData.orderId }
                            }).then(result => {
                              console.log(result, "result");
                              if (result.data == "success") {
                                Router.push("/paySuccess");
                              } else {
                                setOpen(false);
                              }
                            }).catch(() => {
                              setOpen(false);
                              console.log("失败");
                            });
                          } else if (modal.type === "wechat") {
                            axios.get("/wechat/orderQuery", {
                              params: { orderId: resData.orderId }
                            }).then(result => {
                              Router.push("/paySuccess");
                            }).catch(() => {
                              setOpen(false);
                              console.log("失败");
                            });
                          } else if ((modal.type === "error")) {
                            setOpen(false);
                          }
                        }} color="primary">
                        {modal.okText}
                      </Button>
                    </div> :
                    <Button
                      style={{
                        border: "1px solid #D3323E",
                        width: 138,
                        height: 38,
                        borderRadius: 20,
                        color: "#D3323E",
                        fontSize: 16
                      }}
                      onClick={() => {
                        if (modal.type === "alipay") {
                          axios.get("/alipay/orderQuery", {
                            params: { orderId: resData.orderId }
                          }).then(result => {
                            Router.push("/paySuccess");
                          }).catch(() => {
                            setOpen(false);
                            console.log("失败");
                          });
                        } else if (modal.type === "unionPay") {
                          axios.get("/unionPay/orderQuery", {
                            params: { orderId: resData.orderId }
                          }).then(result => {
                            console.log(result, "result");
                            if (result.data == "success") {
                              Router.push("/paySuccess");
                            } else {
                              setOpen(false);
                            }
                          }).catch(() => {
                            setOpen(false);
                            console.log("失败");
                          });
                        } else if (modal.type === "wechat") {
                          axios.get("/wechat/orderQuery", {
                            params: { orderId: resData.orderId }
                          }).then(result => {
                            Router.push("/paySuccess");
                          }).catch(() => {
                            setOpen(false);
                            console.log("失败");
                          });
                        } else if ((modal.type === "error")) {
                          setOpen(false);
                        }
                      }} color="primary">
                      {modal.okText}
                    </Button>
                }
              </DialogActions>
            </Dialog>
          </div>
        </form>
      </div>
    </div>
  );
}


