import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 440,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 400,
    },
    grids: {
      width: 1900,
      margin: "0 auto",
    },
    grid: {
      flex: 1,
      // maxWidth: "23.75rem",
      margin: "2.5rem auto",
      padding: "4rem",
      border: "1px solid #CCC",
      borderRadius: ".3rem",
      boxShadow: ".2rem .2rem .2rem #ddd",
      cursor: "pointer"
    },
  }),
);

const currencies = [
  {
    value: 'zh',
    label: '中国',
  }
];

const industry = [
  {
    value: 'zh',
    label: '中国',
  }
];

interface State {
  name: string;
  age: string;
  multiline: string;
  currency: string;
}

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: 'zh',
  });

  const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Grid container className={classes.grids}>
        <Grid item md={4} className={classes.grid}>
      <TextField
        id="standard-dense"
        label="用户邮箱"
        fullWidth={true}
        className={clsx(classes.textField, classes.dense)}
        onChange={handleChange('name')}
        margin="dense"
      />
          <TextField
            id="standard-dense"
            label="用户姓名"
            fullWidth={true}
            className={clsx(classes.textField, classes.dense)}
            onChange={handleChange('name')}
            margin="dense"
          />
          <TextField
            id="standard-dense"
            label="公司全称"
            fullWidth={true}
            className={clsx(classes.textField, classes.dense)}
            onChange={handleChange('name')}
            margin="dense"
          />
          <TextField
            id="standard-select-currency"
            select
            label="国家地区"
            className={classes.textField}
            value={values.currency}
            onChange={handleChange('currency')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your currency"
            margin="normal"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-dense"
            label="公司地址"
            fullWidth={true}
            className={clsx(classes.textField, classes.dense)}
            onChange={handleChange('name')}
            margin="dense"
          />
          <TextField
            id="standard-select-currency"
            select
            label="所处行业"
            className={classes.textField}
            value={values.currency}
            onChange={handleChange('currency')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-dense"
            label="业务部门"
            fullWidth={true}
            className={clsx(classes.textField, classes.dense)}
            onChange={handleChange('name')}
            margin="dense"
          />
          <TextField
            id="standard-dense"
            label="联系电话"
            fullWidth={true}
            className={clsx(classes.textField, classes.dense)}
            onChange={handleChange('name')}
            margin="dense"
          />
        </Grid>
      </Grid>
    </form>
  );
}
