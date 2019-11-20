import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#0C151B"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  },
  overrides: {
    MuiAvatar: {
      root: {
        width: "auto",
        background: "#0c151a !important",
        height: "auto",
        borderRadius: "none"
      }
    },
    MuiSelect: {
      selectMenu: {
        height: '31px !important',
      }
    },
  }
});

export default theme;
