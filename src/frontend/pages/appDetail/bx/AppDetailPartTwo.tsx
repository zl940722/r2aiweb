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
    lineHeight: 2.2,
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
        <p className={'all_title'}>
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
                  大型保险公司需要建立智能健康大数据管理平台，需要有效利用保险数据，医疗数据，个人健康数据等大数据，为个人购买医疗保险进行风险画像，从而准确推荐险种和预测风险。
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
                  <li>客户拥有大量数据，但缺乏数据科学专家来建立精准机器学习模型；</li>
                  <li>客户需要快速建立个性化的精准医疗险风险预测模型；</li>
                  <li>机器学习模型须具有友好API，可以轻松镶嵌入客户现有商务流程。</li>
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
                  <li>降低人工智能方案开发门槛，使非数据科学家也可以使用R2.ai软件自动建立精准机器学习模型；</li>
                  <li>建模质量高、速度快，预测结果准确，并节省企业计算资源；</li>
                  <li>模型平稳过渡客户商务流程，模型输出结果可以自动进入用户终端应用程序。</li>
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
