import React from "react";


const Index: any = () => {
  return <div style={{ background: "#F5F5F5", textAlign: "center", margin: "200px 300px 380px", padding: 200 }}>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
      <img style={{ width: 32, height: 32 }} src={"/static/images/price/成功@2x.png"}/><h1
      style={{ color: "#333333" }}>产品购买成功！</h1>
    </div>
    <p>
      感谢您购买R2.ai新一代人工智能自动机器建模产品。我们将把产品账户发送至您的邮箱。<br/>
      您收到邮件后即可开始使用！有问题可以随时通过邮件联系我们哦！
    </p>
  </div>;
};


export default Index;