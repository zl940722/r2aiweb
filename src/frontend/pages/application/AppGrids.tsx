import React from "react";
import { makeStyles } from "@material-ui/styles";

import Link from "next/link";

import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    maxWidth: "75rem",
    margin: "0 auto",
    padding: "5rem 0",
    overflow: "hidden"
  },
  title: {
    fontWeight: "bold"
  },
  subtitle: {
    marginTop: "1.2rem"
  },
  grids: {
    // margin: "0 40px",
    padding: "4rem 0 6rem"
  },
  grid: {
    display: "flex",
    alignItems: "end",
    cursor: "pointer"
  },
  grid_img: {
    height: 200,
    textAlign: "center",
    marginTop: '5%',
    marginRight:20
  },
  grid_name: {
    fontSize: "1.8rem"
  },
  grid_h: { fontSize: "1.6rem" },
  grid_p: { fontSize: "1.2rem"},
  grid_p2: { fontSize: "1.2rem",color:'#d3333e'}
});

const app_lists = [
  {
    id: 1,
    imgUrl: "/static/images/application/AI金融@2x.webp",
    name: "银行",
    text: "工智能和机器学习为银行提供了前所未有的机会，以赢得市场份额，降低成本并增强客户体验，同时还遵守法规并打击金融犯罪。"
  },
  {
    id: 2,
    imgUrl: "/static/images/application/AI保险@2x.webp",
    name: "保险",
    text: "由AI驱动的保险公司有能力提高盈利能力，提高效率并创造更好的客户体验。通过以通常所需时间的一小部分来部署分析，保险公司可以降低损失率，提供更准确的定价并实现更高的转换率。"
  },
  {
    id: 3,
    imgUrl: "/static/images/application/AI医疗@2x.webp",
    name: "医疗",
    text: "医疗保健组织拥有数十亿个数据点，可用于以更高的准确性提供更好的结果。AI帮助医疗机构为患者提供最佳结果，同时降低成本并提高护理质量。"
  },
  {
    id: 4,
    imgUrl: "/static/images/application/AI电信@2x.webp",
    name: "物联网",
    text: "物联网是在计算机互联网的基础上，利用RFID、无线数据通信等技术构造一个覆盖世界上万事万物的“InternetofThings”。在这个网络中，物品(商品)能够彼此进行“交流”，而无需人的干预。"
  }
];

function AppGrids() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        {/*<Typography variant={"h4"} align={"center"} className={classes.title}>*/}
        {/*  应用场景*/}
        {/*</Typography>*/}
        {/*<Typography*/}
        {/*  variant={"h5"}*/}
        {/*  align={"center"}*/}
        {/*  className={classes.subtitle}*/}
        {/*>*/}
        {/*  为各行各业企业进行快速易用高质的AI赋能*/}
        {/*</Typography>*/}
        <Grid container  spacing={6} className={classes.grids}>
          {app_lists.map((value, index) => (
            <Link
              key={index}
              href={`/appDetail?id=${value.id}`}
              // as={`/appDetail/${value.id}`}
            >
              <Grid item md={6} className={classes.grid}>
                <div className={classes.grid_img}>
                  <img src={`${value.imgUrl}`} width={100} alt={value.name}/>
                </div>
                <div className={classes.grid_name}>
                  <h2 className={classes.grid_h}> {value.name}</h2>
                  <p className={classes.grid_p}>  {value.text}</p>
                  <p className={classes.grid_p2}>查看详情 ></p>
                </div>
              </Grid>
            </Link>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default AppGrids;
