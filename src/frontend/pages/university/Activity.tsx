import React from "react";
import { makeStyles } from "@material-ui/styles";
import Router from "next/router";
import { Typography, Grid } from "@material-ui/core";
import { Button, Grommet } from "grommet";

const useStyles = makeStyles({
  content: {
    maxWidth: "75rem",
    margin: "0 auto",
    padding: "1.5rem 0 8.8rem",
    overflow: "hidden"
  },
  title: {
    padding: "3rem 0 1rem 0",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center"
  },
  des: {
    fontSize: "30px",
    color: "#333333",
    lineHeight: 2,
    textAlign: "center"
  },
  items: {
    margin: "5rem 0 8rem"
  },
  item: {
    maxWidth: "90%",
    boxSizing: "border-box"
  },
  itemDes: {
    lineHeight: 2,
    marginBottom: "2rem",
    fontSize: 38,
    color: "#091221"
  },
  itemBorder: {
    width: 62,
    border: "2px solid #314157"
  },
  itemTitle: {
    marginBottom: "2rem",
    fontWeight: "bold"
  },
  itemTitle2: {
    marginTop: "2rem",
    fontWeight: "bold"
  },
  itemH2: {
    marginTop: "2rem",
    fontWeight: "bold"
  },
  itemContext: {
    marginTop: "3rem",
    fontWeight: "bold"
  }, buttonWrap: {
    width: "100%",
    marginTop: "2rem",
    textAlign: "left"
  },
  button: {
    width: "10.6rem",
    height: "3.5rem",
    fontWeight: "bold",
    fontSize: 18
  }
});

const customTheme = {
  button: {
    border: {
      width: "3px",
      radius: "2.3rem"
    },
    color: "#2C4159"
  },
  text: {
    medium: {
      size: "1.8rem"
    }
  },
  global: {
    hover: {
      color: "#FFF",
      background: "#2C4159"
    },
    colors: {
      brand: "#2C4159"
    }
  },
  video: {
    scrubber: {
      color: "#2C4159"
    }
  }
};

function HomeAbout() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <div>
          <Typography className={classes.title}>
            线下培训
          </Typography>
          <Typography className={classes.des}>
            AI赋能：参与，成长，创新！
          </Typography>
          <Grid container className={classes.items} direction={"row"}>
            <Grid item sm={6} xs={12}>
              <div className={classes.item}>
                <Typography variant={"body1"} className={classes.itemDes}>
                  零基础机器学习
                </Typography>
                <div className={classes.itemBorder}>{}</div>
                <Typography variant={"body1"} className={classes.itemH2}>
                  旨在帮助零基础人员迅速学习、掌握机器学习相关知识。
                </Typography>
                <p>· 从头学习机器学习/ AI的基础知识</p>
                <p>· 通过真实经典案例掌握AI/ML的关键流程</p>
                <p>· 上手操作构建AI/ML项目</p>
                <p>· 了解如何追求AI/机器学习相关职业发展规划及建议</p>
                <Grommet className={classes.buttonWrap} theme={customTheme}>
                  <Button
                    onClick={() => Router.push("/train")}
                    hoverIndicator
                    label={"查看详情"}
                    className={classes.button}
                  />
                </Grommet>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.item}>
                <img
                  src="/static/images/university/1.png"
                  width={"100%"}
                  alt="R2.ai"
                />
              </div>
            </Grid>
          </Grid>

          <Grid container className={classes.items} direction={"row"}>
            <Grid item sm={6} xs={12}>
              <div className={classes.item}>
                <img
                  src="/static/images/university/2.png"
                  width={"100%"}
                  alt="R2.ai"
                />
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.item}>
                <Typography variant={"body1"} className={classes.itemDes}>
                  青少年人工智能精品课程
                </Typography>
                <div className={classes.itemBorder}>{}</div>
                <p>· 提升逻辑思维识</p>
                <p>· 培养良好性格</p>
                <p>· 提升孩子升学竞争力</p>
                <Grommet className={classes.buttonWrap} theme={customTheme}>
                  <Button
                    onClick={() => Router.push("/train")}
                    hoverIndicator
                    label={"查看详情"}
                    className={classes.button}
                  />
                </Grommet>
              </div>
            </Grid>

          </Grid>

          <Grid container className={classes.items} direction={"row"}>
            <Grid item sm={6} xs={12}>
              <div className={classes.item}>
                <Typography variant={"body1"} className={classes.itemDes}>
                  AI赋能总裁班
                </Typography>
                <div className={classes.itemBorder}>{}</div>
                <Typography variant={"body1"} className={classes.itemH2}>
                  权威内容，全面深入了解人工智能产业应用，破解企业难题
                </Typography>
                <p>· 名企技术团队核心管理者亲身授课</p>
                <p>· 专业出身，高屋建瓴，20+年经验让您少走弯路</p>
                <p>· 人工智能领域企业管理大咖与您分享海内外行业最佳实践</p>
                <Grommet className={classes.buttonWrap} theme={customTheme}>
                  <Button
                    hoverIndicator
                    onClick={() => Router.push("/train")}
                    label={"查看详情"}
                    className={classes.button}
                  />
                </Grommet>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.item}>
                <img
                  src="/static/images/university/1.png"
                  width={"100%"}
                  alt="R2.ai"
                />
              </div>
            </Grid>
          </Grid>

          <Grid container className={classes.items} direction={"row"}>
            <Grid item sm={6} xs={12}>
              <div className={classes.item}>
                <img
                  src="/static/images/university/2.png"
                  width={"100%"}
                  alt="R2.ai"
                />
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.item}>
                <Typography variant={"body1"} className={classes.itemDes}>
                  美国科技夏令营
                </Typography>
                <div className={classes.itemBorder}>{}</div>
                <Typography variant={"body1"} className={classes.itemH2}>
                  旨在培养学员自行观察、发现、思考及解决问题的能力。
                </Typography>
                <p>·名校探访</p>
                <p>· 美国前沿AI创业公司参访</p>
                <p>· 学习机器学习初级课程</p>
                <p>· 近距离感受美国高科技发展</p>
                <Grommet className={classes.buttonWrap} theme={customTheme}>
                  <Button
                    onClick={() => Router.push("/train")}
                    hoverIndicator
                    label={"查看详情"}
                    className={classes.button}
                  />
                </Grommet>
              </div>
            </Grid>

          </Grid>


        </div>


      </div>
    </>
  );
}

export default HomeAbout;
