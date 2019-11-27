import React from "react";
import Products from "../src/frontend/pages/products";
import fetch from "isomorphic-unfetch";

const Index = (res)=> {
  return <Products {...res}/>;
};

Index.getInitialProps = async function(props) {
  let user, _user;
  if (typeof Window === "function") {
    const url = "/user/login";
    _user = await fetch(url);
  } else {
    _user = await fetch(process.env.AUTH_SERVICE || "http://localhost:8088", {
      headers: {
        cookie: props.req.headers.cookie
      }
    });
  }
  user = _user.status === 200 ? await _user.json() : {};
  return {
    user
  };
};


export default Index
