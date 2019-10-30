import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import provinces from './province'
import { Grommet, Box, Button } from "grommet";
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

const country = [
  {
    value: "zh",
    label: "中国"
  }
];
//
const industry = [
  {
    value: 'Healthcare',
    label: '医疗',
  },  {
    value: 'Insurance',
    label: '保险',
  },  {
    value: 'Automotive',
    label: '汽车',
  },  {
    value: 'Financial',
    label: '金融',
  },  {
    value: 'Pharmaceutical',
    label: '制药',
  },  {
    value: 'Environmental',
    label: '环境',
  },  {
    value: 'Telecom',
    label: '电信',
  },  {
    value: 'Logistics',
    label: '物流',
  },  {
    value: 'Technology',
    label: '科技',
  }
];

interface State {
  name: string;
  age: string;
  multiline: string;
  country: string;
}
const customTheme = {
  button: {
    border: {
      radius: "1.6rem"
    },
    color: "#FFF"
  },
  global: {
    hover: {
      color: "#2C4159",
      background: "#FFF"
    },
    colors: {
      brand: "#FFF"
    }
  }
};
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
    <div className={classes.bg}>
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container className={classes.grids}>
          <Grid item md={4} className={classes.grid}>
            <TextField
              id="standard-dense"
              label="用户邮箱"
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("name")}
              margin="dense"
            />
            <TextField
              id="standard-dense"
              label="用户姓名"
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("name")}
              margin="dense"
            />
            <TextField
              id="standard-dense"
              label="密码"
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("name")}
              margin="dense"
            />
            <TextField
              id="standard-dense"
              label="公司全称"
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("name")}
              margin="dense"
            />
            <TextField
              id="standard-select-currency"
              select
              label="国家地区"
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
              {country.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-select-currency"
              select
              label="省"
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
              id="standard-select-currency"
              select
              label="市"
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
              {country.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="standard-select-currency"
              select
              label="区"
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
              {country.map(option => (
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
              onChange={handleChange("name")}
              margin="dense"
            />
            <TextField
              id="standard-select-currency"
              select
              label="所处行业"
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
              {industry.map(option => (
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
              onChange={handleChange("name")}
              margin="dense"
            />
            <TextField
              id="standard-dense"
              label="联系电话"
              fullWidth={true}
              className={clsx(classes.textField, classes.dense)}
              onChange={handleChange("name")}
              margin="dense"
            />
            <p>本人同意签署贵公司的<a href="www.baidu.com">SAAS用户协议</a></p>
            <Grommet theme={customTheme} className={classes.buttonWrap}>
              <Box align="center" pad="medium">
                <Button
                  hoverIndicator
                  label={"立即试用"}
                  className={classes.button}
                />
              </Box>
            </Grommet>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
