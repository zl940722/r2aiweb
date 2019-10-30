import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import provinces from './province'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bg: {
      background: "#131d2d",
      backgroundSize: "cover",
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 440
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 400
    },
    grids: {
      width: 1900,
      margin: "0 auto",
    },
    grid: {
      flex: 1,
      background: "#fff",
      margin: "2.5rem auto",
      padding: "4rem",
      borderRadius: ".3rem",
      // boxShadow: ".2rem .2rem .2rem #ddd",
      cursor: "pointer"
    },
    buttonWrap: {
      width: "100%",
      paddingTop: "2.5rem"
    },
    button: {
      width: "10.5rem",
      height: "3.2rem",
      fontWeight: "bold",
      background:'#061222 !important'
    }
  })
);

const product = [
  {
    value: "zh",
    label: "简易版"
  },  {
    value: "zh",
    label: "专业版"
  }
];


interface State {
  name: string;
  age: string;
  multiline: string;
  country: string;
}

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    name: "",
    age: "",
    multiline: "Controlled",
    country: "zh"
  });

  const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className={classes.bg} >
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container className={classes.grids}>
          <Grid item md={4} className={classes.grid}>
            <TextField
              id="standard-select-currency"
              select
              label="购买产品"
              className={classes.textField}
              value={values.country}
              onChange={handleChange("country")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
            >
              {product.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-select-currency"
              select
              label="月租/年租"
              className={classes.textField}
              value={values.country}
              onChange={handleChange("country")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
            >
              {provinces.map((option: any) => (
                <MenuItem key={option.code} value={option.code}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>



            <TextField
              id="standard-dense"
              label="产品价格"
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("name")}
              margin="dense"
            />

            <TextField
              id="standard-dense"
              label="自动续购"
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("name")}
              margin="dense"
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
