import React, {useMemo } from "react";
import { makeStyles } from "@material-ui/styles";
import "./global.css";
import Link from "next/link";
import _ from "lodash";
import classNames from "classnames";
import { Menu, Dropdown, Icon, Button } from "antd";
import Router from "next/router";
import axios from "axios";

const { SubMenu } = Menu;

const menuStyle: any = { width: 99, textAlign: 'center', fontSize: 16 };

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
    color: "#000",
    "& span": {
      color: "#000"
    },
    '& ul': {
      display: 'flex',
    },

  },
  tab: {
    height: 70,
    fontSize: "1rem"
    // color: "#000000"
  },
  logo: {
    cursor: 'pointer',
    margin: '0 6% 0 4%',
  },
  a: {
    textDecoration: "none",
    color: "#333"
  },
  avatar: {
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
    paddingRight: 5,
  },
  index: {
    position: "absolute",
    top: 0,
    zIndex: 2,
    width: "100%",
    minWidth: "1200px",
    background: "transparent",
    color: "#fff",
    "& span": {
      color: "#fff"
    },
    "& > ul": {
      background: "transparent",
      boxShadow: "none",
      border: 0,
      color: "#fff",
      "& > li": {
        color: "#fff"
      }
    },
    "& > a": {
      color: "#fff"
    },
    '& i': {
      color: "#fff"
    },
    '& button:hover': {
      background: 'transparent',
    }
  },
  cursor: {
    cursor: 'pointer',
    position: 'relative'
  },
  login: {
    color: "inherit",
    marginRight: 20,
    textDecoration: "none"
  },
  res: {
    color: "inherit",
    textDecoration: "none"
  },
  product: {
    background: 'transparent',
    cursor: 'pointer'
  }
});

interface InterfaceMenu {
  id: number;
  name: string;
  children?: any;
  link?: string;
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
        name: "产品",
        children: null,
        link: "/products"
      },
      {
        id: 4,
        name: "技术能力",
        children: null,
        link: "/technical"
      }
    ],
    link: "/products"
  },
  {
    id: 5,
    name: "解决方案",
    children: [
      {
        id: 3,
        name: "银行",
        children: null,
        link: "/appDetail/bank"
      }, {
        id: 4,
        name: "保险",
        children: null,
        link: "/appDetail/insurance"
      }, {
        id: 4,
        name: "医疗",
        children: null,
        link: "/appDetail/medical"
      }, {
        id: 4,
        name: "物联网",
        children: null,
        link: "/appDetail/internet"
      }
    ],
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
      link: "/news/release"
    }, {
      id: 82,
      name: "参评获奖",
      children: null,
      link: "/news/prize"
    }, {
      id: 83,
      name: "活动参会",
      children: null,
      link: "/news/activity"
    }],
    link: "/news/release"
  },
  {
    id: 9,
    name: "R2社区",
    children: [{
      id: 41,
      name: "活动信息",
      children: null,
      link: "/resources/message"
    }, {
      id: 42,
      name: "产品干货",
      children: null,
      link: "/resources/product"
    }, {
      id: 43,
      name: "案例分析",
      children: null,
      link: "/resources/case"
    }],
    link: "/resources/product"
  },
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
    link: "/company"
  }
];

const Header = (props) => {

  const classes = useStyles();
  const current = props.route;

  const index = props.route === "/";

  function logout() {
    axios.delete("/user/logout");
    location.href = "/";
  }

  const menu = useMemo(()=>(
    <Menu style={{
      display: 'flex',
      flex: 'none',
      flexDirection: 'column',
      // width: 100,
      justifyContent: 'center',
      marginLeft: 'auto'
    }}>
      <Menu.Item>
        {/*<Link href='/modifyPassword'>*/}
        {/*  <a>修改密码</a>*/}
        {/*</Link>*/}
        <a href="/modifyPassword">
          修改密码
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="javascript:" onClick={logout}>
          退出登录
        </a>
      </Menu.Item>
    </Menu >
  ),[]);

  const handleClick = (e) => e.key && Router.push(e.key);
  return (
    <div className={classNames(classes.root, index ? classes.index : "")}>
      <Menu
        onClick={handleClick}
        style={{ color: "#000000" }}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Link href={"/"}>
          <a className={classes.logo}>
            <img
              src="/static/images/common/logo@2x.png"
              width={66}
              alt="R2.ai"
            />
          </a>
        </Link>

        {
          _.map(menus, (value: InterfaceMenu, index) => {
            const menuLink = value.link;
            return (
              value.children ?
                <SubMenu key={index} style={menuStyle}
                  title={value.name} onTitleClick={() => menuLink && Router.push(menuLink)}>
                  {
                    menuLink &&
                    <Menu.Item key={menuLink} style={{ display: 'none' }} />
                  }
                  {
                    _.map(value.children, (res: InterfaceMenu) => <Menu.Item key={res.link} style={menuStyle}>{res.name}</Menu.Item>)
                  }
                </SubMenu>
                : <Menu.Item key={value.link} style={menuStyle}>
                  {value.name}
                </Menu.Item>
            );
          })
        }

        <span className='main_user'>
          {
            props.user.active ?
              <>
                <div style={{
                  flex: 'auto',
                  width: 0,
                  display: 'flex',
                  position: 'relative',
                  justifyContent: 'flex-end'
                }}>
                  <Dropdown className={classes.cursor} overlay={menu} getPopupContainer={(el: any) => el.parentElement} placement='bottomRight'>
                    <span className={classes.avatar}><Icon style={{
                      cursor: 'pointer',
                      border: '1px solid',
                      borderRadius: '50%',
                      padding: 2,
                      marginRight: 2
                    }} type="user" title={(props.user.email || '').split('@')[0]} />
                      {(props.user.email || '').split('@')[0]}
                    </span>
                  </Dropdown>
                </div>
                <Button style={{
                  cursor: 'pointer',
                  display: (props.user.canLogin ? '' : 'none')
                }} className={classes.product} shape="round" icon="arrow-right" onClick={() => location.href = props.PRODUCT_URL}>使用产品</Button>
                {/*<a className={classes.res} style={{marginLeft:10}} href={props.PRODUCT_URL}>使用产品</a>*/}
              </> :
              <div><a className={classes.login} href={"/login"}>登录</a> <a className={classes.res}
                href={"/register"}>注册</a>
              </div>
          }
        </span>
      </Menu>
    </div>
  );
};


export default Header;
