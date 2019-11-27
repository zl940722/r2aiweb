import React from "react";
import ToUSE from "../src/frontend/pages/toUse/ToUse";
import fetch from "isomorphic-unfetch";

const Index = (res: any) => {
  return <ToUSE
    title='试用申请提交成功！'
    main={<>
      欢迎您亲身体验R2.ai新一代人工智能自动机器建模产品。我们将把产品试用账户发送至您的邮箱。<br/>
      您收到邮件后即可开始免费试用！如果试用需求数量非常高，试用账户的发送也许会有所延迟哦！
      </>}
    {...res}/>;
};

export default Index;
