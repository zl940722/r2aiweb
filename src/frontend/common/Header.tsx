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
  children?: null;
  link?: string | undefined;
}

const menus: InterfaceMenu[] = [
  {
    name: "产品",
    children: null,
    link: "/products"
  },
  {
    name: "云服务价单",
    children: null,
    link: "/pricing"
  },
  {
    name: "合作伙伴",
    children: null
  },
  {
    name: "R2资源",
    children: null
  },
  {
    name: "R2大学",
    children: null
  },
  {
    name: "新闻资讯",
    children: null
  },
  {
    name: "关于我们",
    children: null
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
              <Tab className={classes.tab} label={value.name} />
            </Link>
          );
        })}
      </Tabs>
    </div>
  );
}

export default Header;
