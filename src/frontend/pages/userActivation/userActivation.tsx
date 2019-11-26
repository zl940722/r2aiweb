import React from "react";
import { withRouter } from "next/router";
import axios from "axios";
import Router from "next/router";
class Index extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      content: "注册成功,请登录！"
    };
  }

  componentDidMount() {
    const query: any = this.props.router.asPath.split("?");
    const data = query[1].split("&");
    axios.defaults.withCredentials = true;
    axios.get("/active", {
      params: {
        userId: (data[0].split("="))[1],
        token: (data[1].split(/=(?=.)/))[1]
      }
    }).then((res: any) => {
      Router.push("/login");
    }).catch(function(error: any) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });


  }

  render() {
    return (
      <div style={{ background: "#F5F5F5", textAlign: "center", margin: "200px 300px 380px", padding: 200 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ width: 32, height: 32, marginRight: 20 }} src={"/static/images/price/succ.png"}/><h1
          style={{ color: "#333333" }}>注册成功,请登录！</h1>
        </div>
      </div>

    );
  }
}


export default withRouter(Index);

