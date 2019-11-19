import React from "react";
import { makeStyles } from "@material-ui/styles";
import "./global.css";
import Link from "next/link";
import _ from "lodash";
import classNames from "classnames";
import { Menu } from "antd";
import Router from "next/router";
import Avatar from "@material-ui/core/Avatar";
import { Tab } from "@material-ui/core";

const { SubMenu } = Menu;
const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#fff",
      color: "#000",
      "& span": {
        color: "#000"
      }
    },
    tab: {
      height: 70,
      fontSize: "1rem"
      // color: "#000000"
    },
    a: {
      textDecoration: "none",
      color: "#333"
    },
    avatar: {
      margin: 10,
      background: "#304057"
    },
    index: {
      position: "absolute",
      top: 0,
      zIndex: 2,
      width: "100%",
      background: "transparent",
      color: "#fff",
      "& span": {
        color: "#fff"
      },
      "& ul":{
        background:'transparent',
        boxShadow: 'none',
        border:0,
        color:'#fff',
        "& li":{
          color:'#fff',
        }
      }
    }
  })
;

interface InterfaceMenu {
  id?: number;
  name?: string;
  children?: any;
  childrens?: any;
  link?: string | undefined;
}

const menus: InterfaceMenu[] = [
  {
    id: 1,
    name: "首页",
    children: null,
    link: "/"
  },
  {
    id: 2,
    name: "产品技术",
    children: [
      {
        id: 3,
        name: "技术能力",
        children: null,
        link: "/technical"
      }, {
        id: 4,
        name: "产品",
        children: null,
        link: "/products"
      }
    ],
    link: "/products"
  },
  {
    id: 5,
    name: "解决方案",
    children: null,
    link: "/application"
  },
  {
    id: 6,
    name: "云服务",
    children: null,
    link: "/pricing"
  },
  {
    id: 7,
    name: "合作伙伴",
    children: null,
    link: "/partner"
  },
  {
    id: 8,
    name: "新闻资讯",
    children: [{
      id: 81,
      name: "产品发布",
      children: null,
      link: "/news/product"
    },{
      id: 82,
      name: "参评获奖",
      children: null,
      link: "/news/prize"
    },{
      id: 83,
      name: "活动参会",
      children: null,
      link: "/news/activity"
    }],
  },
  {
    id: 9,
    name: "R2社区",
    children: [{
      id: 41,
      name: "活动信息",
      children: null,
      link: "/resources/message"
    },{
      id: 42,
      name: "产品干货",
      children: null,
      link: "/resources/product"
    },{
      id: 43,
      name: "案例分析",
      children: null,
      link: "/resources/case"
    }],
  },
  // {
  //   id: 5,
  //   name: "R2大学",
  //   children: null,
  //   link: "/university"
  // },
  {
    id: 10,
    name: "关于我们",
    children: [
      {
        id: 11,
        name: "公司介绍",
        children: null,
        link: "/company"
      }, {
        id: 12,
        name: "团队介绍",
        children: null,
        link: "/team"
      }, {
        id: 13,
        name: "联系我们",
        children: null,
        link: "/contactUs"
      }, {
        id: 14,
        name: "职业机会",
        children: null,
        link: "/job"
      }
    ],
    link: "/aboutUs"
  },
  {
    id: 15,
    name: "注册",
    children: null,
    link: "/register"
  }
];

const Header = (props) => {
  // @ts-ignore
  const classes = useStyles();
  const [current, setcurrent] = React.useState("/");

  const index = props.route === "/";


  const handleClick = e => {
    console.log("click ", e);
    setcurrent(e.key);
    Router.push(e.key);
  };

  return (
    <div className={classNames(classes.root, index ? classes.index : "")}>
      <Menu
        onClick={handleClick}
        style={{ color: "#000000" }}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Link href={"/"}>
          <img
            src="/static/images/common/logo@2x.png"
            width={66}
            style={{ marginRight: "20rem", marginLeft: "100px" }}
            alt="R2.ai"
          />
        </Link>

        {
          _.map(menus, (value: InterfaceMenu, index) => {
            return (
              value.children ?
                <SubMenu title={<span className="submenu-title-wrapper"> {value.name}</span>
                }
                >
                  {
                    _.map(value.children, (res: any) => {
                      return (
                        <Menu.Item key={res.link}>{res.name}</Menu.Item>);
                    })
                  }

                </SubMenu>

                : <Menu.Item key={value.link}>
                  {value.name}
                </Menu.Item>


            );
          })
        }
        {
          props.user.active ?
            <Avatar className={classes.avatar}>{props.user.email}</Avatar> :
            <a href={"/login"}>登录</a>
        }
        <a>注册</a>
      </Menu>
    </div>

  );
};


Header.getInitialProps = async function() {
  const userInfo: any = localStorage.getItem("userInfo");
  const user: any = JSON.parse(userInfo);

  return {
    user
  };
};

export default Header;
