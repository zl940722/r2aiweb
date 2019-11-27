import React, { useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import Fab from "@material-ui/core/Fab";
import _ from "lodash";
import clsx from "clsx";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    button: {
      padding: "0 4.275rem",
      border: "0.0625rem solid #D3323E",
      backgroundColor: "transparent",
      color: "#D3323E",
      fontSize: 18
    }
  })
);


const SimpleButton = (res: any) => {
  const classes = useStyles();
  const { label, className } = res;
  const customRes = _.omit(res, ["label", "className"]);
  return (
    <Fab {...customRes} variant="extended" className={clsx(classes.button, className)}>
      {label}
    </Fab>
  );
};

export default SimpleButton;
