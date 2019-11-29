import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography, Grid } from "@material-ui/core";
import { Button, Grommet } from "grommet";
import Router from "next/router";
import axios from "axios";
import './pricing.css'
import SimpleDialog from "../../Components/SimpleDialog";
import moment from "moment";

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
  const [dialogInfo, setDialogOpen] = useState({
    open: false,
    content: "",
    type: ""
  });
  const toBuy = (level,value) => {
    return () => {
      if (user.active) {
        if (level === 1) {
          axios.post("/probation/applyProbation", { params: { userId: user.id } }).then((response: any) => {
              if (response.data.status === 200) {
                Router.push({
                  pathname: "/toUse",
                });
              }else{
                setDialogOpen({
                  open: true,
                  content: "申请失败，请刷新后重试",
                  type: "error"
                });
              }
            }).catch(() => {
              setDialogOpen({
                open: true,
                content: "请求失败，请刷新后重试",
                type: "error"
              });
            });
        } else if ([2,3].includes(level)) {
          Router.push({
            pathname: "/simpleBuy",
            query: {
              level,
            }
          });
        } else if (level === 4) {
          Router.push(`/contactSale`);
        }
      } else {
        Router.push(`/login`);
      }
    };
  };

  const {type,endTime} = user;
  const classes = useStyles();
  const end = endTime&&new Date(endTime)<new Date();//过期了

  return <div className={classes.content}>
        <div>
            <Grid container className={classes.root} spacing={0}>
              <dl className={classes._item}>
                {data.map((value: any, index: number) => {
                  const disabled = () =>{
                    if(!type)return false;
                    if(type === 1){//试用用户
                      return index === 1
                    }else if(index === 1){
                      return true
                    }else if(end){//过期了
                      return false;
                    }else if([2,3].includes(index)){//买了，可以续费
                      return type !==index
                    }
                    return false
                  };
                  return <dd key={index} className={index?'content':'title'}>
                      <p className={classes.itemsContext1}>{value.name_zh}</p>
                      <p className={classes.itemsContext2}>{value.price_zh}</p>
                      <p className={classes.itemsContext3}>{value.price_description_zh}</p>
                        {value.button_zh &&<Grommet className={classes.buttonWrap} theme={customTheme}>
                             <Button
                               hoverIndicator
                               disabled={disabled()}
                               label={value.button_zh}
                               className='button'
                               style={{fontSize:'1rem'}}
                               onClick={toBuy(value.level, value)}
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
      <SimpleDialog
      dialogInfo={dialogInfo} setOpen={setDialogOpen}/>
      </div>
}

export default Pricing;
