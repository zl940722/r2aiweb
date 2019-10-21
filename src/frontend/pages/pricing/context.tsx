import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Grid, Card } from "@material-ui/core";
import { Button, Grommet } from "grommet";

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
  items: {},
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

function Pricing(res: any) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <div>
          <Grid container className={classes.root} spacing={0}>
            <Grid container className={classes.items} direction={"row"}>
              {res.data.map((value: any, index: any) => (
                <Grid key={index} item sm={2} xs={12} spacing={0}>
                  <Card className={classes.itemsDiv}>
                    <p className={classes.itemsContext3}>{value.data_volume_zh}</p>
                    <p className={classes.itemsContext3}>{value.user_number_zh}</p>
                    <p className={classes.itemsContext3}>{value.modeling_times_zh}</p>
                    <p className={classes.itemsContext3}>{value.predicted_row_number_zh}</p>
                    <p className={classes.itemsContext3}>{value.storage_space_zh}</p>
                    <p className={classes.itemsContext3}>{value.Run_same_time_zh}</p>
                    <p className={classes.itemsContext3}>{value.Item_number_zh}</p>
                    <p className={classes.itemsContext3}>{value.support_data_format}</p>
                    <p className={classes.itemsContext3}>{value.api === true ? "是" : "否"}</p>
                    <p className={classes.itemsContext3}>{value.priority_zh}</p>
                    <p className={classes.itemsContext3}>{value.technical_support_zh}</p>
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
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Pricing;
