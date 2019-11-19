import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Activity from "./Activity";
import Link from "next/link";

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
      backgroundColor: theme.palette.background.paper,
    },
    bar:{
      lineHeight:'5rem',
      backgroundColor:'#091221',
      marginBlockStart: 0,
      marginBlockEnd: 0,
      fontSize:'1rem',
      cursor:'pointer',
      '& a':{
        color:'#fff',
        textDecoration:'#fff',
      },
      '& dl':{
        maxWidth:'75rem',
        display:'flex',
        margin:'auto',
        '& dd':{
          marginInlineStart: 0,
          marginRight:'3.75rem',
        }
      }
    },
    on:{
      '& a':{
        color:'#ccc'
      }
    }
  })
);

export default function(res: any) {
  const classes = useStyles();
  const {list,tabs=[],route} = res;

  const link = route.includes('news')?'news':'resources';

  return (
    <div className={classes.root}>
      <div className={classes.bar}>
        <dl>
          {tabs.map(itm=>{
            return <dd
              key={itm.key}
              className={route.includes(itm.key)?classes.on:''}>
                 <Link href={`/${link}/${itm.key}`}>{itm.name}</Link>
            </dd>
          })}
        </dl>
      </div>
      <Activity list={list} route={route}/>
    </div>
  );
}
