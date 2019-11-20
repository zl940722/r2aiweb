import React from "react";
import { withRouter } from "next/router";
import axios from "axios";


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
      <div style={{ background: "#061122", textAlign: "center", padding: "29rem" }}>
        <h1 style={{ color: "#fff" }}>注册成功,请登录！</h1>
      </div>
    );
  }
}


export default withRouter(Index);

