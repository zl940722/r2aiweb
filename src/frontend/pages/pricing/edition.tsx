import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid, Card } from "@material-ui/core";
import { Button, Grommet } from "grommet";
import Router from "next/router";

const useStyles = makeStyles({
  content: {
    maxWidth: "75rem",
    margin: "0 auto",
    padding: "1.5rem 0 0",
    overflow: "hidden"
  },
  title: {
    padding: "3rem 0 1rem 0",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center"
  }, title2: {
    padding: "2rem",
    width: "84%",
    background: "#F5F5F5",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "left"
  },
  des: {
    fontSize: "30px",
    color: "#333333",
    lineHeight: 2,
    textAlign: "center"
  },
  root: {
    flexGrow: 1
  },
  items: {
    margin: "2rem 0 0"
  },
  item: {
    maxWidth: "90%",
    boxSizing: "border-box"
  },
  itemsDiv: {
    width: 200,
    height: 300,
    textAlign: "center"
  },
  itemsContext1: {
    fontSize: 24,
    color: "#0C151B",
    fontWeight: "bold"
  },
  itemsContext2: {
    fontSize: 24,
    color: "#C24144",
    fontWeight: "bold"
  },
  itemsContext3: {
    fontSize: 16,
    color: "#C24144",
    fontWeight: "bold"
  }, buttonWrap: {
    width: "100%",
    marginTop: "3rem",
    textAlign: "center"
  },
  button: {
    width: "8.6rem",
    height: "2.5rem",
    fontWeight: "bold",
    fontSize: 16
  }
});

// const edition_type = [
//   {
//     id: 1,
//     name: "",
//     month: "",
//     year: "",
//     button: ""
//   }, {
//     id: 2,
//     name: "免费试用",
//     month: "0元/月",
//     year: "两周期限",
//     button: "立即试用"
//   }, {
//     id: 3,
//     name: "简易版",
//     month: "199.98元/月",
//     year: "2159.78元/年",
//     button: "立即购买"
//   }, {
//     id: 4,
//     name: "专业版",
//     month: "1999.98元/月",
//     year: "21599.78元/年",
//     button: "立即购买"
//   }, {
//     id: 5,
//     name: "企业版",
//     month: "根据需求定价",
//     year: "支持本地部署",
//     button: "联系销售"
//   }
// ];

const customTheme = {
  button: {
    border: {
      width: "3px",
      radius: "2.3rem"
    },
    color: "#2C4159"
  },
  text: {
    medium: {
      size: "1.8rem"
    }
  },
  global: {
    hover: {
      color: "#FFF",
      background: "#2C4159"
    },
    colors: {
      brand: "#2C4159"
    }
  },
  video: {
    scrubber: {
      color: "#2C4159"
    }
  }
};

function Pricing(res: any) {

  console.log(res, "dsadasdads");
  const toBuy = (id, value) => {
    return () => {
      console.log("df", id);
      if (id === 4) {
        Router.push({
          pathname: "/toUse",
          query: {
            id: res.user.user.id
          }
        });
      } else if (id === 3) {
        Router.push({
          pathname: "/simpleBuy",
          query: {
            id: id,
            user: JSON.stringify(res.user.user)
          }
        });
      } else if (id === 2) {
        Router.push({
          pathname: "/essBuy",
          query: {
            id: id,
            user: JSON.stringify(res.user.user)
          }
        });
      } else if (id === 1) {
        Router.push(`/contactSales`);
      }
    };
  };

  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <div>
          <Typography className={classes.title}>
            价格指南
          </Typography>
          <Grid container className={classes.root} spacing={0}>
            <Grid container className={classes.items} direction={"row"}>
              {res.data.map((value: any, index: any) => (
                <Grid key={index} item sm={2} xs={12} spacing={0}>
                  <Card className={classes.itemsDiv}>
                    <p className={classes.itemsContext1}>{value.name_zh}</p>
                    <p className={classes.itemsContext2}>{value.price_zh}</p>
                    <p className={classes.itemsContext3}>{value.price_description_zh}</p>
                    {
                      value.button_zh &&
                      <Grommet className={classes.buttonWrap} theme={customTheme}>
                        <Button
                          hoverIndicator
                          disabled={!res.user.user.active}
                          label={value.button_zh}
                          className={classes.button}
                          onClick={toBuy(value.id, value)}
                        />
                      </Grommet>
                    }
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Typography className={classes.title2}>
              服务内容
            </Typography>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Pricing;
