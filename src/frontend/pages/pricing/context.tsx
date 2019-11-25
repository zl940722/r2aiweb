import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Card } from "@material-ui/core";
import { Button, Grommet } from "grommet";
import './pricing.css'

const useStyles = makeStyles({
  content: {
    maxWidth: "75rem",
    margin: "0 auto",
    overflow: "hidden"
  },
  title: {
    fontSize: "2rem",
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
    display:'flex',
    width:"100%",
    fontSize:'0.875rem',
    lineHeight:'4.375rem',
    margin:0,
    '& dd':{
      flex:1,
      margin:0,
      '& ul':{
        listStyle:'none',
        marginBlockStart: 0,
        marginBlockEnd: 0,
        paddingInlineStart: 0,
        width:'auto',
        "& li":{
          textAlign:'left',
          border:"1px solid #ECECEC",
          textIndent:"1.1875rem",
        }
      }
    }
  },
  item: {
    maxWidth: "90%",
    boxSizing: "border-box"
  },
  itemsDiv: {
    width: 200,
    marginBottom: 40,
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
    color: "#0C151B",
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
  },
};

function Pricing(res: any) {
  const classes = useStyles();
  return <div className={classes.content}>
          <Grid container className={classes.root} spacing={0}>
            <dl className={classes.items}>
              {res.data.map((value: any, index: any) => (
                <dd key={index} className={index?'content':'title'}>
                  <ul className={classes.itemsDiv}>
                    <li className={classes.itemsContext3}>{value.data_volume_zh}</li>
                    <li className={classes.itemsContext3}>{value.user_number_zh}</li>
                    <li className={classes.itemsContext3}>{value.modeling_times_zh}</li>
                    <li className={classes.itemsContext3}>{value.predicted_row_number_zh}</li>
                    <li className={classes.itemsContext3}>{value.storage_space_zh}</li>
                    <li className={classes.itemsContext3}>{value.Run_same_time_zh}</li>
                    <li className={classes.itemsContext3}>{value.Item_number_zh}</li>
                    <li className={classes.itemsContext3}>{value.support_data_format}</li>
                    <li className={classes.itemsContext3}>{index?value.api === true ? "是" : "否":value.api}</li>
                    <li className={classes.itemsContext3}>{value.priority_zh}</li>
                    <li className={classes.itemsContext3}>{value.technical_support_zh}</li>
                    {
                      value.button &&
                      <Grommet className={classes.buttonWrap} theme={customTheme}>
                        <Button
                          hoverIndicator
                          label={value.button}
                          className={classes.button}
                        />
                      </Grommet>
                    }
                  </ul>
                </dd>
              ))}
            </dl>
          </Grid>
      </div>
}

export default Pricing;
