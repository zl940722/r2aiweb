import React from "react";
import { makeStyles } from "@material-ui/styles";

import Link from "next/link";
import _ from "lodash";
import { Tabs, Tab } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";

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
    // children: null,
    children: null,
    link: "/"
  },
  {
    id: 1,
    name: "产品技术",
    // children: null,
    children: [
      {
        id: 9,
        name: "技术能力",
        children: null,
        link: "/products"
      }, {
        id: 10,
        name: "产品",
        children: null,
        link: "/products"
      }
    ],
    link: "/products"
  },
  {
    id: 2,
    name: "解决方案",
    children: null,
    link: "/application"
  },
  {
    id: 2,
    name: "云服务",
    children: null,
    link: "/pricing"
  },
  {
    id: 3,
    name: "合作伙伴",
    children: null,
    link: "/partner"
  },
  {
    id: 6,
    name: "新闻资讯",
    children: null,
    link: "/news"
  },
  {
    id: 4,
    name: "R2社区",
    children: null,
    link: "/resources"
  },
  // {
  //   id: 5,
  //   name: "R2大学",
  //   children: null,
  //   link: "/university"
  // },
  {
    id: 7,
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
    id: 8,
    name: "注册",
    children: null,
    link: "/register"
  }
];

const Header = (props) => {
  // @ts-ignore
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const index = props.route === "/";

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classNames(classes.root, index ? classes.index : "")}>
      <Link href={"/"}>
        <a>
        <img
          src="/static/images/common/logo@2x.png"
          width={88}
          style={{ position: "absolute", top: 16, left: 80 }}
          alt="R2.ai"
        />
        </a>
      </Link>
      <Tabs value={value} onChange={handleChange} centered>
        {
          _.map(menus, (value: InterfaceMenu, index) => {
            return (
              value.children ?
                <div key={value.id}>
                  <Tab key={value.id} style={{ position: "relative" }} className={classes.tab} label={value.name}
                       onClick={handleClick}/>
                  <div style={{ position: "absolute" }}>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClick={handleClose}
                    >
                      <div key={value.id}>
                        {
                          _.map(value.children, (res: any) => {
                            return (
                              <a key={res.id} className={classes.a} href={res.link}>
                                <MenuItem>{res.name}</MenuItem>
                              </a>
                            );
                          })
                        }
                      </div>
                    </Menu>
                  </div>
                </div>
                :
                <a className={classes.a} key={index} href={value.link || ""}><Tab className={classes.tab}
                                                                                  label={value.name}/></a>
            );
          })
        }
        {
          props.user.active ?
            <Avatar className={classes.avatar}>{props.user.email}</Avatar> :
            <a className={classes.a} href={"/login"}><Tab className={classes.tab}
                                                          label={"登录"}/></a>
        }
      </Tabs>
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
