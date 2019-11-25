import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid, Card } from "@material-ui/core";
import { Button, Grommet } from "grommet";
import Router from "next/router";

const useStyles = makeStyles({
  content: {
    margin: "0 auto",
    overflow: "hidden",
    width:'100%',
  },

  title2: {
    padding: "1.8125rem 0 1.8125rem 1.25rem",
    background: "#F5F5F5",
    fontSize: "1rem",
    fontWeight: "bold",
    textAlign: "left",
    color:"#333",
    border:"1px solid #ECECEC",
    borderWidth:'1px 0',
    width: "calc(100% - 4px)",
    position: "relative",
    left: "2px",
  },
  des: {
    fontSize: "30px",
    color: "#333333",
    lineHeight: 2,
    textAlign: "center"
  },
  root: {
    flexGrow: 1,
    // border:"1px solid",
  },

  items: {
    // margin: "2rem 0 0"
  },
  item: {
    maxWidth: "90%",
    boxSizing: "border-box"
  },
  _item:{
    display:"flex",
    width:"100%",
    margin:0,
    '& dd':{
      flex:1,
      textAlign:'center',
      paddingBottom:'5rem',
      margin:0,
      borderLeft:"1px solid #ECECEC",
    },
  },
  itemsDiv: {
    width: 200,
    height: 300,
    textAlign: "center"
  },
  itemsContext1: {
    fontSize: '1.5rem',
    color: "#333",
    fontWeight: "bold",
    padding:"2.6875rem 0 3rem",
    margin:0,
  },
  itemsContext2: {
    fontSize: '1.5rem',
    color: "#D3323E",
    fontWeight: "bold",
    margin:0,
  },
  itemsContext3: {
    fontSize: '1rem',
    color: "#D3323E",
    fontWeight: 400
  },
  buttonWrap: {
    width: "100%",
    marginTop: "3rem",
    textAlign: "center"
  },
  button: {
    width: '10.5rem',
    fontWeight: "bold",
    fontSize: '1rem',
    border:"2px solid rgba(49, 65, 87, 1)",
    padding:0,
    boxSizing: "border-box",
    height: "2.5rem",
  }
});

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

function Pricing(props: any) {
  const {user={},data=[]} = props;
  const toBuy = (id,value) => {
    return () => {
      if (user.active) {
        if (id === 4) {
          Router.push({
            pathname: "/toUse",
            query: {
              id: user.id
            }
          });
        } else if (id === 3) {
          Router.push({
            pathname: "/simpleBuy",
            query: {
              id: id,
              user: JSON.stringify(user)
            }
          });
        } else if (id === 2) {
          Router.push({
            pathname: "/essBuy",
            query: {
              id: id,
              user: JSON.stringify(user)
            }
          });
        } else if (id === 1) {
          Router.push(`/contactSales`);
        }
      } else {
        Router.push(`/login`);
      }
    };
  };


  const classes = useStyles();
  const {type} = user;
  return <div className={classes.content}>
        <div>
            <Grid container className={classes.root} spacing={0}>
              <dl className={classes._item}>
                {data.map((value: any, index: number) => {
                  const disabled = () =>{
                    if(!type)return false;
                    if(index === 1){
                      return type > 0;
                    }else if([2,3].includes(index)){
                      return type>1;
                    }
                    return false
                  };
                  return <dd key={index}>
                      <p className={classes.itemsContext1}>{value.name_zh}</p>
                      <p className={classes.itemsContext2}>{value.price_zh}</p>
                      <p className={classes.itemsContext3}>{value.price_description_zh}</p>
                        {value.button_zh &&<Grommet className={classes.buttonWrap} theme={customTheme}>
                             <Button
                               hoverIndicator
                               disabled={disabled()}
                               label={value.button_zh}
                               className={classes.button}
                               onClick={toBuy(value.id, value)}
                             />
                           </Grommet>}
                    </dd>
                })}
              </dl>
              <Typography className={classes.title2}>
                服务内容
              </Typography>
            </Grid>
        </div>
      </div>
}

export default Pricing;
