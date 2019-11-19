import React, { useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import Fab from "@material-ui/core/Fab";
import _ from "lodash";
import clsx from "clsx";
import { Box, Button, Grommet } from "grommet";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    buttonWrap: {
      width: "100%",
      paddingTop: "2.5rem"
    },
    button: {
      width: "10.5rem",
      height: "3.2rem",
      fontWeight: "bold",
      border: "1px solid #D3323E",
      background: "none !important",
      color: "#D3323E"
    }
  })
);
const customTheme = {
  button: {
    border: {
      radius: "1.6rem"
    },
    color: "#FFF"
  },
  global: {
    hover: {
      color: "#D3323E",
      background: "#FFF"
    },
    colors: {
      brand: "#FFF"
    }
  }
};

const CommonButton = (res: any) => {
  const classes = useStyles();
  const { label, className, onClick } = res;
  const customRes = _.omit(res, ["label", "className"]);
  return (
    <Grommet theme={customTheme} className={classes.buttonWrap}>
      <Box align="center" pad="medium">
        <Button
          {...customRes}
          onClick={onClick}
          hoverIndicator
          label={label}
          className={classes.button}
        />
      </Box>
    </Grommet>
  );
};

export default CommonButton;
