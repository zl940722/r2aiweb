import React, { useEffect, useState } from "react";
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
    reqired: { color: "red", width: "0.5rem", textAlign: "center", position: 'relative', top: 3, paddingLeft: 1 },
    labelCss: {
      width: "6.6rem",
      textAlign: "right",
      marginRight: "0.75rem",
      paddingTop: '-20px',
      whiteSpace: 'nowrap',
      display: 'flex',
      flex: 'none',
      justifyContent: 'flex-end',
    },
    selectTextField: {
      minHeight: "68px",
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
    label, labelCss, data, className, disabled = false, placeholder, onChange
  } = res;
  const [value, setValue] = useState(placeholder || '')
  const textFiledProps = _.omit(res, ["label", "labelCss", "inputCss", "data", "className", 'placeholder', 'onChange']);
  return (
    <div className={classes.main}>
      {
        label ? <div className={labelCss || classes.labelCss}>
          <span>{label}</span>
          <span className={classes.reqired}>{"*"}</span>
        </div> : null
      }
      <TextField
        id="standard-select-currency"
        margin="normal"
        variant="outlined"
        fullWidth={true}
        disabled={disabled}
        className={clsx(classes.selectTextField, className)}
        {...textFiledProps}
        select
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e)
        }}
      >
        {<MenuItem key={placeholder} value={placeholder} style={{ display: 'none' }}>{placeholder}</MenuItem>}
        {disabled ? null : _.map(data, (value, key) => (
          <MenuItem key={key} value={value.code}>
            {value.name}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default SimpleSelect;
