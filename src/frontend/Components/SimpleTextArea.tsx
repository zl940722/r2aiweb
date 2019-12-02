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
      marginRight: "0.75rem",
      display: 'flex',
      flex: 'none',
      justifyContent: 'flex-end',
    },
    textAreaField: {
      minHeight: "4.25rem",
      "& div": {
        backgroundColor: "#FFFFFF"
      }
    }
  })
);

const SimpleTextArea = (res: any) => {
  const classes = useStyles();
  const {
    label, regex, value, labelCss, helperText, onChange, required, allowedLength, className
  } = res;
  const [changed, setChanged] = React.useState(false);
  const changeFun = (...args) => {
    setChanged(true);
    onChange(...args);
  };
  const textFiledProps = _.omit(res, ["label", "labelCss", "regex", "required", "helperText", "onChange", "allowedLength", "className"]);
  const checkError = (value, render) => {
    const error = required ? regex && !regex.test(value) : value && regex && !regex.test(value);
    const lengthError = allowedLength && (value && value.length) > allowedLength ? "超过长度限制" : "";
    const inputInValid = error || !!lengthError;
    return { error: render ? changed && error : error, lengthError, inputInValid };
  };
  const { error, lengthError } = checkError(value, true);
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
        className={clsx(classes.textAreaField, className)}
        {...textFiledProps}
        multiline={true}
        error={error || !!lengthError}
        helperText={error ? helperText : lengthError}
        onChange={(e) => changeFun(e, checkError(e.target.value, false)["inputInValid"])}
      />
    </div>
  )
    ;
};

export default SimpleTextArea;
