import React from "react";
import ToUSE from "../src/frontend/pages/toUse";
import fetch from "isomorphic-unfetch";

const Index = (res: any) => {
  return <ToUSE {...res}/>;
};

Index.getInitialProps = async function(props) {
   let PRODUCT_URL = process.env.PRODUCT_URL || 'http://localhost:7777';
   if(!PRODUCT_URL){
     const result: any = await fetch('/product');
     PRODUCT_URL = await result.json();
   }

   console.log(11,PRODUCT_URL);

  return {
    PRODUCT_URL
  };
};

export default Index;
