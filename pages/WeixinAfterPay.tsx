import React, { Component } from "react";
import axios from "axios";
import fetch from "isomorphic-unfetch";
import { withRouter } from "next/router";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

function crtTimeFtt(val) {
  if (val !== null) {
    const date = new Date(val);
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    weixinAfterPay: {
      background: "#fff",
      width: "100%",
      height: "100%"
    },
    weixin: {
      background: "#f5f5f5",
      margin: "80px 100px"
    },
    weixin_div: {
      display: "flex",
      height: "25rem",
      alignItems: "center",
      justifyContent: "center"
    },
    weixinLeft: {
      display: "flex",
      flexFlow: "column",
      alignitems: "center"
    },
    weixinCenter: {
      height: "70%",
      margin: "0 6rem",
      border: "1px dashed #5b77a9"
    },
    weixinRight: {
      // margin: "2.5rem auto",
      // cursor: "pointer"
    },
    weixinRight_title: {
      color: "#333",
      fontSize: "16px"
    },
    weixinRight_price: {
      color: "#333",
      fontSize: "32px"
    },
    weixinRight_adress: {
      color: "#333",
      fontSize: "16px"
    },
    weixinRight_time: {
      color: "#333",
      fontSize: "16px"
    },
    weixinRight_number: {
      color: "#333",
      fontSize: "16px"
    },
    imgs: {
      width: "123px",
      height: "123px",
      display: "block"
    }
  })
);

function Weixin(props: any) {
  const styles = useStyles();
  console.log(props.router.query.orderId, "props");
  const [state, setState] = React.useState({
    username: "",
    createTime: 0,
    id: 0,
    totalPrice: 0,
    productName: ""
  });

  React.useEffect(() => {
    axios({
      method: "get",
      url: `/order/getOrderById`,
      params: {
        orderId: props.router.query.orderId
      }
    }).then((result) => {
      let productNames = "";
      if (result.data.productName === "Basic") {
        productNames = "简易版";
      } else {
        productNames = "专业版";
      }
      setState({
        username: result.data.username,
        createTime: result.data.createTime,
        id: result.data.id,
        totalPrice: result.data.totalPrice,
        productName: productNames
      });
    })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className={styles.weixinAfterPay}>
      <div className={styles.weixin}>
        <div className={styles.weixin_div}>
          <div className={styles.weixinLeft}>
            <p style={{ color: "#333",fontSize:16 }}>二维码在15分钟后失效，请及时付款</p>
            <img src={props.router.query.url || ""} className={styles.imgs} alt=""/>
            <span style={{ color: "#333" ,fontSize:16,marginTop:20}}>请使用微信扫一扫完成支付</span>
          </div>
          <div className={styles.weixinCenter}>{}</div>
          <div className={styles.weixinRight}>
            <p className={styles.weixinRight_title}>{state.productName}</p>
            <p className={styles.weixinRight_price}><span
              style={{ fontSize: 16 }}>¥ </span>{(state.totalPrice / 100).toFixed(2)}</p>
            <p className={styles.weixinRight_adress}><span
              style={{ color: "#666" }}>收款方 </span><span>杭州睿拓智能科技有限公司</span></p>
            <p className={styles.weixinRight_time}>
              <span style={{ color: "#666" }}>下单时间 </span><span>{crtTimeFtt(state.createTime * 1000)}</span></p>
            <p className={styles.weixinRight_number}><span style={{ color: "#666" }}>订单号 </span><span>{state.id}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

}

//
// Weixin.getInitialProps = async function(props) {
//   let results;
//   console.log(props.router, "prop1s");
//
//
//   return {
//     results
//   };
// };

export default withRouter(Weixin);