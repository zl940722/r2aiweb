import React from "react";
import { makeStyles } from "@material-ui/styles";

import Link from "next/link";

import { Tabs, Tab } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#0C151B"
    },
    tab: {
      height: 70,
      fontSize: "1rem",
      color: "#FFF"
    },
    a: {
      textDecoration: "none",
      color: "#333"
    },
    avatar: {
      margin: 10,
      background: "#304057"
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
    name: "产品",
    children: null,
    // children: [
    //   {
    //     id: 9,
    //     name: "R2 Learn",
    //     children: null,
    //     link: "/products"
    //   }, {
    //     id: 10,
    //     name: "应用场景",
    //     children: null,
    //     link: "/application"
    //   }
    // ],
    link: "/products"
  },
  {
    id: 2,
    name: "云服务价单",
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
    id: 4,
    name: "R2资源",
    children: null,
    link: "/resources"
  },
  {
    id: 5,
    name: "R2大学",
    children: null,
    link: "/university"
  },
  {
    id: 6,
    name: "新闻资讯",
    children: null,
    link: "/news"
  },
  {
    id: 7,
    name: "关于我们",
    children: [
      {
        id: 11,
        name: "R2 公司",
        children: null,
        link: "/company"
      }, {
        id: 12,
        name: "R2 团队",
        children: null,
        link: "/team"
      }, {
        id: 13,
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

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    console.log(event);
    setValue(newValue);
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("header", props);

  return (
    <div className={classes.root}>
      <Link href={"/"}>
        <img
          src="/static/images/common/logo@2x.png"
          width={60}
          style={{ position: "absolute", top: 16, left: 80 }}
          alt="R2.ai"
        />
      </Link>
      <Tabs value={value} onChange={handleChange} centered>
        {menus.map((value: InterfaceMenu, index) => {
          return (
            value.children ?
              <div key={value.id}>
                <Tab className={classes.tab} label={value.name} onClick={handleClick}/>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClick={handleClose}
                >

                  {
                    value.children.map((res: any) => {
                      return (
                        <a className={classes.a} href={res.link}>
                          <MenuItem key={res.id}>{res.name}</MenuItem>
                        </a>
                      );
                    })
                  }
                </Menu>
              </div>
              :
              <a className={classes.a} key={index} href={value.link || ""}><Tab className={classes.tab}
                                                                                label={value.name}/></a>
          );

        })}
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