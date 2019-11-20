import React, { useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import _ from "lodash";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    main: {
      display: "flex",
      alignItems: "baseline",
      "&  select": {
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        paddingLeft: "1rem"
      }
    },
    labelCss: {
      width: "6.6rem",
      textAlign: "right",
      marginRight: "0.75rem"
    },
    selectTextField: {
      minHeight: "4.25rem",
      backgroundColor: "#FFFFFF"
    },
    menu: {
      width: 400
    }
  })
);

const SimpleSelect = (res: any) => {
  const classes = useStyles();
  const {
    label, labelCss, data, className
  } = res;
  const textFiledProps = _.omit(res, ["label", "labelCss", "inputCss", "data", "className"]);
  return (
    <div className={classes.main}>
      {
        label ? <div className={labelCss || classes.labelCss}>
          <span>{label}</span>
        </div> : null
      }
      <TextField
        id="standard-select-currency"
        margin="normal"
        variant="outlined"
        fullWidth={true}
        className={clsx(classes.selectTextField, className)}
        {...textFiledProps}
        select
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
      >
        {_.map(data, (value, key) => (
          <MenuItem key={key} value={value.code}>
            {value.name}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default SimpleSelect;
