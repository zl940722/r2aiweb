import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Typography } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles({
  item: {
    height: "36.25rem",
    backgroundSize: "cover"
  },
  itemContent: {
    maxWidth: "75rem",
    margin: "0 auto",
    paddingTop: "1rem",
    overflow: "hidden",
    textAlign: "left"
  },
  title: {
    margin: "5rem 0 2.8rem",
    fontWeight: "bold",
    textAlign: "center"
  },
  body: {
    lineHeight: 1.8,
    fontWeight: "bold"
  }
});

const lists = [
  {
    name: "保险",
    des:
      "“AI+保险”即人工智能与保险行业的结合。保险业面临的挑战一直是沉重的数据处理和复杂的业务流程。保险行业完全有可能采用人工智能技术，设计新险种，精准营销，简化运营，改善服务，促使保险企业增效降本。保险行业拥有大量数据。并且AI应用场景广泛，拥有自主开发AI应用的能力，将成为AI在保险业的重要需求。R2.ai正是提供AI应用开发平台的世界领先产品，我们的产品可以快速、高质、简便和经济地将大数据转化为人工智能解决方案。您只需要定义问题并提供数据，其余的工作包括从数据清洗、自动选参到模型构建都将由我们的产品自动为您完成。R2平台将大大降低AI开发应用门槛，使企业无需投入大量人力、物力、和时间便可自主拥有精准AI解决方案，并在使用过程中不断自动优化 。\n"
  }
];

function AppDetailBanner() {
  const classes = useStyles();
  const data = lists[0];
  return (
    <>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
      >
        <div
          className={classes.item}
          style={{
            backgroundImage: "url(/static/images/appDetail/banner@1x.jpg)"
          }}
        >
          <div className={classes.itemContent}>
            <Typography variant={"h3"} className={classes.title}>
              {data.name}
            </Typography>
            <Typography variant={"h5"} className={classes.body}>
              {data.des}
            </Typography>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default AppDetailBanner;
