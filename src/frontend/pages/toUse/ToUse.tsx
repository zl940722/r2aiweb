import React from "react";

import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>createStyles({
  main:{
    width:1200,
    height:380,
    backgroundColor:'#F5F5F5',
    margin:'102px auto 118px',
    padding:'73px 250px',
    boxSizing: 'border-box',
    color:'#333',
    '& img':{
      width: 32,
      height:32,
      marginRight:14,
    },
    '& h1':{
      fontSize:30,
      fontWeight:500,
      margin:0,
    },
    '& p':{
      fontSize:16,
      fontWeight:400,
      lineHeight:'28px',
      marginTop:46,
    },
    '& a':{
      width:168,
      height:50,
      border:'1px solid rgba(211, 50, 62, 1)',
      color:'#D3323E',
      fontSize:18,
      fontWeight:500,
      display:'block',
      margin:'auto',
      lineHeight:'50px',
      textAlign:'center',
      borderRadius:25,
      marginTop:44,
    }
  },
  top:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));


const Index = (props) => {
  const classes = useStyles();
    return <div>
      <div className={classes.main}>
        <div className={classes.top}>
          <img src={"/static/images/price/succ.png"} alt=''/>
          <h1>试用申请提交成功！</h1>
        </div>
        <p>
          欢迎您亲身体验R2.ai新一代人工智能自动机器建模产品。我们将把产品试用账户发送至您的邮箱。<br/>
          您收到邮件后即可开始免费试用！如果试用需求数量非常高，试用账户的发送也许会有所延迟哦！
        </p>
        <a href={props.PRODUCT_URL} target='_blank'>产品登录</a>
      </div>
    </div>
  }
;

export default Index;
