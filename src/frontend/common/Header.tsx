import React from "react";
import { makeStyles } from "@material-ui/styles";

import Link from "next/link";

import { Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#0C151B"
  },
  tab: {
    height: 70,
    fontSize: "1rem",
    color: "#FFF"
  }
});

interface InterfaceMenu {
  name?: string;
  children?: any;
  link?: string | undefined;
}

const menus: InterfaceMenu[] = [
  {
    name: "产品",
    children: [
      {
        name: "R2 Learn",
        children: null,
        link: "/products"
      }, {
        name: "应用场景",
        children: null,
        link: "/application"
      }
    ],
    link: "/products"
  },
  {
    name: "云服务价单",
    children: null,
    link: "/pricing"
  },
  {
    name: "合作伙伴",
    children: null,
    link: "/partner"
  },
  {
    name: "R2资源",
    children: null,
    link: "/resources"
  },
  {
    name: "R2大学",
    children: null,
    link: "/university"
  },
  {
    name: "新闻资讯",
    children: null,
    link: "/news"
  },
  {
    name: "关于我们",
    children: null,
    link: "/aboutUs"
  },
  {
    name: "登录",
    children: null,
    link: "/register"
  }
];

function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    console.log(event);
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Link href={"/"}>
        <img
          src="/static/images/common/logo@2x.png"
          width={88}
          height={43}
          alt="R2.ai"
        />
      </Link>
      <Tabs value={value} onChange={handleChange} centered>
        {menus.map((value: InterfaceMenu, index) => {
          return (
            <Link key={index} href={value.link || ""}>
              <Tab className={classes.tab} label={value.name}/>
            </Link>
          );
        })}
      </Tabs>
    </div>
  );
}

export default Header;
