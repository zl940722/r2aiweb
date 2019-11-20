import React, { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import SimpleButton from "./SimpleButton";

const info = {
  warning: "温馨提醒",
  error: "出现错误",
  Agree: "确定",
  Disagree: "取消"
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {},
  header: {
    fontSize: "1.5rem",
    textAlign: "center",
    width: "35.75rem",
    marginTop: "2.5rem",
    marginBottom: "1rem"
  },
  content: {
    padding: "1rem 3rem 3.25rem 3rem"
  },
  footer: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingBottom: "2.5rem"
  },
  button: {
    height: "2.375rem",
    padding: "0 3rem"
  }
}));

export default function SimpleDialog(res: any) {
  const classes = useStyles();
  const { dialogInfo: { open, content, type }, setOpen, className, disagreeText, agreeText } = res;
  const headerText = info[type];
  return (
    <div>
      <Dialog
        open={open}
        className={className}
        disableAutoFocus
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={classes.header}>{headerText}</div>
        <DialogContent className={classes.content}>
          <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
        </DialogContent>
        <div className={classes.footer}>
          {disagreeText ?
            <Button onClick={setOpen} color="primary">{disagreeText || info["Disagree"]}</Button> : null}
          <SimpleButton onClick={setOpen} label={agreeText || info["Agree"]}
                        autoFocus className={classes.button}/>
        </div>
      </Dialog>
    </div>
  );
}
