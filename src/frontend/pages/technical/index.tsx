import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Paper, Typography, Grid, Popper, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: "auto",
    flexDirection: "column",
    "& >div:nth-child(even)": {
      backgroundColor: "#fff"
    },
    "& >div:nth-child(odd)": {
      backgroundColor: "#F5F5F5"
    }
  },
  banner: {
    maxHeight: "650px",
    maxWidth: "100%",
    overflow: "hidden",
    margin: "0 auto",
    display: "flex",
    flex: "none",
    justifyContent: "center",
    position: "relative",
    "& >img": {
      maxWidth: "100%",
      maxHeight: "100%",
      minWidth: "1000px"
    }
  },
  center: {
    margin: "0 auto"
  },
  content: {
    padding: "80px 0 120px"
  },
  title: {
    marginBottom: "30px"
  },
  textContent: {
    margin: "30px 0 70px"
  },
  text: {
    padding: "30px",
    backgroundColor: "#F5F5F5"
  },
  iconContent: {
    marginTop: "30px"
  },
  icon: {
    height: "37px",
    width: "33px",
    marginBottom: "10px",
    display: "flex",
    flex: "none",
    justifyContent: "center",
    alignItems: "center",
    "& >img": {
      maxHeight: "100%",
      maxWidth: "100%"
    }
  },
  pointer: {
    cursor: "pointer"
  },
  imageContent: {
    maxHeight: "230px",
    maxWidth: "204px"
  },
  r2: {
    position: "absolute",
    width: "195px",
    height: "196px",
    "& img": {
      maxHeight: "100%",
      maxWidth: "100%"
    }
  },
  images: {
    marginTop: "80px"
  },
  card: {
    maxWidth: "320px"
  }
});

function HomeAbout() {
  const classes = useStyles();
  const [img, setImg] = useState(-1);
  const [index, setIndex] = useState(-1);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const imgOver = (n: number) => () => setImg(n);
  const onOver = (n: number) => (e) => {
    setIndex(n);
    setAnchorEl(n === -1 ? null : e.target);
  };

  const title = [
    "综合性的机器学习平台",
    "智能部署",
    "协作共享",
    "自动智能交互特征工程",
    "安全使用",
    "大数据自动可视化"
  ];

  const content = [
    [
      "端到端一站式平台",
      "机器学习模型构建",
      "多行业应用"
    ],
    [
      "全方位监控",
      "智能化迭代",
      "批量化部署"
    ],
    [
      "多角色协作",
      "团队管理",
      "项目管理"
    ],
    [
      "个性化特征生成",
      "智能自定义特征",
      "特征关联展示"
    ],
    [
      "用户数据安全",
      "用户权限管理",
      "私有环境部署"
    ],
    [
      "大数据实时分析",
      "自动数据处理",
      "自动可视化"
    ]
  ];

  return (
    <Paper className={classes.root}>
      <div className={classes.banner}>
        <img src="/static/images/technical/banner.png" alt="technical banner"/>
      </div>
      <Grid container className={classes.content} component='div'>
        <Grid container xs={12} className={classes.title}>
          <Grid item xs={12} md={9} lg={7} xl={5} className={classes.center}>
            <Typography component={"h4"} variant='h4' align='center'>
              R2独门秘笈
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={12} md={9} lg={7} xl={5} className={classes.center}>
            <Typography component={"div"} align='center'>
              为各行业企业、个人提供世界领先的人工智能开发及应用平台，帮助客户以最简单、便捷、高效的方式， <br/>建立最优质的机器学习模型，为每个有价值的业务场景自主构建AI应用，实现业务升级和企业AI赋能。
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid container xs={10} xl={8} className={`${classes.center} ${classes.iconContent}`} wrap='nowrap'>
            <Grid container xs={4} className={classes.pointer} direction='column' alignItems='center'
                  onMouseOver={imgOver(0)} onMouseOut={imgOver(-1)}>
              <div className={classes.icon}>
                <img src={`/static/images/technical/auto${img === 0 ? "a" : ""}.png`} alt="auto"/>
              </div>
              <Typography component={"div"} align='center' style={{ color: `${img === 0 ? "#D3323E" : "#333333"}` }}>
                全链自动优化
              </Typography>
            </Grid>
            <Grid container xs={4} className={classes.pointer} direction='column' alignItems='center'
                  onMouseOver={imgOver(1)} onMouseOut={imgOver(-1)}>
              <div className={classes.icon}>
                <img src={`/static/images/technical/algo${img === 1 ? "a" : ""}.png`} alt="algo"/>
              </div>
              <Typography component={"div"} align='center' style={{ color: `${img === 1 ? "#D3323E" : "#333333"}` }}>
                自研算法
              </Typography>
            </Grid>
            <Grid container xs={4} className={classes.pointer} direction='column' alignItems='center'
                  onMouseOver={imgOver(2)} onMouseOut={imgOver(-1)}>
              <div className={classes.icon}>
                <img src={`/static/images/technical/simulate${img === 2 ? "a" : ""}.png`} alt="simulate"/>
              </div>
              <Typography component={"div"} align='center' style={{ color: `${img === 2 ? "#D3323E" : "#333333"}` }}>
                业务场景模拟优化
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} className={classes.textContent}>
          <Grid item xs={10} xl={8} className={`${classes.center} ${classes.text}`}>
            <Typography component={"li"}>
              全流程赋能：为流程中每个步骤提供低门槛、高效率的工具和运行环境支持。
            </Typography>
            <Typography component={"li"}>
              专注业务：将业务人员、科学家和开发人员从底层架构和过程实现中解脱出来，更加专注业务本身。
            </Typography>
            <Typography component={"li"}>
              模型周期全面覆盖：从模型训练到管理，从应用到监控模型全面周期，帮助企业实现一站式模型生命周期管理，构建流程标准，提升效率。
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.content} component='div'>
        <Grid container xs={12} className={classes.title}>
          <Grid item xs={12} md={9} lg={7} xl={5} className={classes.center}>
            <Typography component={"h4"} variant='h4' align='center'>
              R2六脉神剑
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={12} md={9} lg={7} xl={5} className={classes.center}>
            <Typography component={"div"} align='center'>
              为各行业企业、个人提供世界领先的人工智能开发及应用平台，实现业务升级和企业AI赋能。
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} className={classes.images}>
          <Grid container xs={12} justify='center' alignItems='center' style={{ marginBottom: "-55px" }}>
            <Grid item className={`${classes.imageContent} ${classes.pointer}`} component={"img"}
                  src={`/static/images/technical/1xz${index === 1 ? "a" : ""}.png`} alt="1xz" onMouseOver={onOver(1)}
                  onMouseOut={onOver(-1)}/>
            <Grid item className={`${classes.imageContent} ${classes.pointer}`} component={"img"}
                  src={`/static/images/technical/6xz${index === 6 ? "a" : ""}.png`} alt="6xz" onMouseOver={onOver(6)}
                  onMouseOut={onOver(-1)}/>
          </Grid>
          <Grid container xs={12} justify='center' alignItems='center'>
            <Grid item className={`${classes.imageContent} ${classes.pointer}`} component={"img"}
                  src={`/static/images/technical/2xz${index === 2 ? "a" : ""}.png`} alt="2xz" onMouseOver={onOver(2)}
                  onMouseOut={onOver(-1)} style={{ marginRight: "95px", textAlign: "end" }}/>
            <Grid item className={`${classes.imageContent} ${classes.pointer}`} component={"img"}
                  src={`/static/images/technical/5xz${index === 5 ? "a" : ""}.png`} alt="5xz" onMouseOver={onOver(5)}
                  onMouseOut={onOver(-1)} style={{ marginLeft: "95px" }}/>
            <Grid item className={classes.r2} component={"img"} src={`/static/images/technical/r2.png`} alt="r2"/>
          </Grid>
          <Grid container xs={12} justify='center' alignItems='center' style={{ marginTop: "-55px" }}>
            <Grid item className={`${classes.imageContent} ${classes.pointer}`} component={"img"}
                  src={`/static/images/technical/3xz${index === 3 ? "a" : ""}.png`} alt="3xz" onMouseOver={onOver(3)}
                  onMouseOut={onOver(-1)}/>
            <Grid item className={`${classes.imageContent} ${classes.pointer}`} component={"img"}
                  src={`/static/images/technical/4xz${index === 4 ? "a" : ""}.png`} alt="4xz" onMouseOver={onOver(4)}
                  onMouseOut={onOver(-1)}/>
          </Grid>
        </Grid>
        <Popper
          id="mouse-over-popover"
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          placement={index > 3 ? "right" : "left"}
        >
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h6">
                {title[index - 1]}
              </Typography>
              {content[index - 1] && content[index - 1].map(c => {
                return <Typography variant="body2" color="textSecondary" component='li'>
                  {c}
                </Typography>;
              })}
            </CardContent>
          </Card>
        </Popper>
      </Grid>
    </Paper>
  );
}

export default HomeAbout;
