import React from "react";
import ToUSE from "../src/frontend/pages/toUse";
import fetch from "isomorphic-unfetch";

const Index = (res: any) => {
  return <ToUSE {...res}/>;
};

Index.getInitialProps = async function(props) {
   let PRODUCT_URL = process.env.PRODUCT_URL || 'http://localhost:7777';
   if(!process.env.PRODUCT_URL){
     const result: any = await fetch('/product');
     PRODUCT_URL = await result.text();
   }

  return {
    PRODUCT_URL
  };
};

export default Index;
