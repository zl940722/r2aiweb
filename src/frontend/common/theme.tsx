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
      // MuiAvatar: {
      //   root: {
      //     width: "auto",
      //     height: "auto",
      //     borderRadius: "none"
      //   }
      // },
      MuiSelect: {
        selectMenu: {
          height: "31px !important",
          lineHeight: "31px"
        }
      },
      MuiDialog: {
        paperWidthSm: {
          width: 600,
          textAlign: "center",
          padding: 25
        }
      },
      MuiDialogActions: {
        root: {
          justifyContent: "center"
        }
      },
      MuiTypography: {
        body1: {
          fontFamily: "inherit"
        },
        h6: {
          fontSize: 24
        }
      },
      MuiDialogContentText: {
        root: {
          textAlign: "left"
        }
      }
    }
  })
;

export default theme;
