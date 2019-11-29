import React from "react";
import { makeStyles } from "@material-ui/styles";

import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#F5F5F5"
  },
  content: {
    maxWidth: "75rem",
    margin: "0 auto",
    padding: "7.5rem 0",
    overflow: "hidden"
  },
  title: {
    fontWeight: "bold"
  },
  listItemTitle: {
    width: "12rem",
    color: "#061222",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 24
  },
  listItemText: {
    fontSize: "1rem",
    lineHeight: 2
  },
  grid: {
    maxWidth: "7.5rem"
  },
  grid_img: {
    paddingTop: "1rem",
    textAlign: "center"
  },
  grid_name: {
    margin: "1.8rem 0",
    fontSize: "18px",
    fontWeight: "bold"
  }
});

function AppDetailPartTwo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <p  className={'all_title'}>
          场景验证
        </p>
        <List>
          <ListItem alignItems='flex-start'>
            <ListItemIcon>
              <Typography
                variant={"h5"}
                align={"center"}
                className={classes.listItemTitle}
              >
                项目背景
              </Typography>
            </ListItemIcon>
            <ListItemText
              className={classes.listItemText}
              primary={
                <div style={{fontSize: 16}}>

                  一个ACO型医疗系统，其医疗团队只能在事后判定超出HbA1c控制范围的患者，缺乏预测性决策支持和事前主动性预防措施，直接导致每年花费大量物力人力财力去做弥补工作。该团队拥有丰富的数据存储库，但临床分析团队只有一名分析师，在建模预测方面没有任何经验。


                </div>
              }
            />
          </ListItem>
          <ListItem alignItems='flex-start'>
            <ListItemIcon>
              <Typography
                variant={"h5"}
                align={"center"}
                className={classes.listItemTitle}
              >
                客户需求
              </Typography>
            </ListItemIcon>
            <ListItemText
              className={classes.listItemText}
              primary={
                <ul style={{ listStyleType: 'disc', paddingInlineStart: 20, lineHeight: 2.2, fontSize: 16 }}>
                  <li>机器学习模型能快速处理大量数据，以及测量多种变量的趋势特征</li>
                  <li>模型预测结果需要非常精准，预测效果直接影响患者医疗方案、医疗资源配置、和医疗成本效率</li>
                  <li>建模过程自动化，能处理从数据清洗、自动选参到建模完成的全部工作，并能在生产环境中做模型监测优化</li>
                </ul>
              }
            />
          </ListItem>
          <ListItem alignItems='flex-start'>
            <ListItemIcon>
              <Typography
                variant={"h5"}
                align={"center"}
                className={classes.listItemTitle}
              >
                R2方案优势
              </Typography>
            </ListItemIcon>
            <ListItemText
              className={classes.listItemText}
              primary={
                <ul style={{ listStyleType: 'disc', paddingInlineStart: 20, lineHeight: 2.2, fontSize: 16 }}>
                  <li>降低人工智能方案开发门槛，使非数据科学家也可以使用R2.ai软件自动建立精准机器学习模型</li>
                  <li>依靠并行计算架构以及R2.ai独有的优化引擎，建模速度快、并节省企业计算资源</li>
                  <li>建模质量高、预测结果准确。R2.ai同时有优秀的自我学习能力，能在模型应用过程中不断优化</li>
                </ul>
              }
            />
          </ListItem>
          <ListItem alignItems='flex-start'>
            <ListItemIcon>
              <Typography
                variant={"h5"}
                align={"center"}
                className={classes.listItemTitle}
              >
                项目价值
              </Typography>
            </ListItemIcon>
            <ListItemText
              className={classes.listItemText}
              primary={
                <Grid container>
                  <Grid item sm={3}>
                    <div className={classes.grid}>
                      <div className={classes.grid_img}>
                        <img
                          src="/static/images/appDetail/1.png"
                          width={48}
                          height={48}
                          alt="全自动建模
"
                        />
                      </div>
                      <Typography
                        variant={"subtitle1"}
                        align={"center"}
                        className={classes.grid_name}
                      >
                        全自动建模
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className={classes.grid}>
                      <div className={classes.grid_img}>
                        <img
                          src="/static/images/appDetail/2.png"
                          width={48}
                          height={48}
                          alt="全自动建模
"
                        />
                      </div>
                      <Typography
                        variant={"subtitle1"}
                        align={"center"}
                        className={classes.grid_name}
                      >
                        建模快成本低
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div className={classes.grid}>
                      <div className={classes.grid_img}>
                        <img
                          src="/static/images/appDetail/3.png"
                          width={48}
                          height={48}
                          alt="全自动建模
"
                        />
                      </div>
                      <Typography
                        variant={"subtitle1"}
                        align={"center"}
                        className={classes.grid_name}
                      >
                        精准预测模型
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              }
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default AppDetailPartTwo;
