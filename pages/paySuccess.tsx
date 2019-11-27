import React from "react";
import ToUSE from "../src/frontend/pages/toUse/ToUse";
import fetch from "isomorphic-unfetch";

const Index = (res: any) => {
  return <ToUSE
    title='产品购买成功！'
    main={<>
      感谢您购买R2.ai新一代人工智能自动机器建模产品。我们将把产品账户发送至您的邮箱。<br/>
      您收到邮件后即可开始使用！有问题可以随时通过邮件联系我们哦！
    </>}
    {...res}/>;
};

export default Index;
