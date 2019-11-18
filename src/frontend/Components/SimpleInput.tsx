import React, { useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import _ from "lodash";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    main: {
      display: "flex",
      alignItems: "baseline"
    },
    reqired: { color: "red", width: "0.5rem", textAlign: "center" },
    labelCss: {
      width: "6.6rem",
      textAlign: "right",
      marginRight: "0.75rem"
    },
    textField: {
      minHeight: "4.25rem",
      backgroundColor: "#FFFFFF"
    }
  })
);

const SimpleInput = (res: any) => {
  const classes = useStyles();
  const {
    label, regex, value, labelCss, helperText, onChange, required, placeholder, allowedLength, className, inputCss = {
      // width: "45.125rem",
      height: "2.9375rem",
      backgroundColor: "#FFFFFF"
    }
  } = res;
  const [changed, setChanged] = React.useState(false);
  const changeFun = (...args) => {
    setChanged(true);
    onChange(...args);
  };
  const textFiledProps = _.omit(res, ["label", "labelCss", "inputCss", "regex", "required", "helperText", "placeholder", "onChange", "allowedLength", "className"]);
  const error = required ? changed && regex && !regex.test(value) : value && regex && !regex.test(value);
  const lengthError = allowedLength && (value && value.length) > allowedLength ? "超过长度限制" : "";
  const inputInValid = error || !!lengthError;
  return (
    <div className={classes.main}>
      {
        label ? <div className={labelCss || classes.labelCss}>
          <span>{label}</span>
          <span className={classes.reqired}>{required ? "*" : null}</span>
        </div> : null
      }
      <TextField
        id="standard-dense"
        variant="outlined"
        fullWidth={true}
        className={clsx(classes.textField, className)}
        {...textFiledProps}
        error={error || !!lengthError}
        inputProps={{ style: inputCss, placeholder }}
        helperText={error ? helperText : lengthError}
        onChange={(e) => changeFun(e, inputInValid)}
      />
    </div>
  )
    ;
};

export default SimpleInput;
