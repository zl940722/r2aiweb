import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Activity from "./Activity";
import Information from "./Information";

interface TabContainerProps {
  children?: React.ReactNode;
}

function TabContainer(props: TabContainerProps) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    }
  })
);

export default function SimpleTabs(res: any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar color={"secondary"} position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="R2活动"/>
          <Tab label="R2资讯"/>
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><Activity {...res}/></TabContainer>}
      {value === 1 && <TabContainer><Information {...res}/></TabContainer>}
    </div>
  );
}
