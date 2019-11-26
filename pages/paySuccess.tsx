import React from "react";
import { Button } from "grommet";


const Index: any = () => {
  return <div style={{ background: "#F5F5F5", textAlign: "center", margin: "200px 300px 380px", padding: 200 }}>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
      <img style={{ width: 32, height: 32,marginRight:20 }} src={"/static/images/price/succ.png"}/><h1
      style={{ color: "#333333" }}>产品购买成功！</h1>
    </div>
    <p style={{marginTop:20,lineHeight:3}}>
      感谢您购买R2.ai新一代人工智能自动机器建模产品。我们将把产品账户发送至您的邮箱。<br/>
      您收到邮件后即可开始使用！有问题可以随时通过邮件联系我们哦！
    </p>
    <Button
      style={{border:'1px solid #D3323E',width:138,height:38,borderRadius:20,color:'#D3323E',marginTop:20}}
      onClick={() => {

      }} color="primary">
      立即登录
    </Button>
  </div>;
};


export default Index;