import React, { useEffect } from "react";

import { makeStyles, createStyles } from "@material-ui/styles";
import _ from "lodash";
import Swiper from "swiper";
import "swiper/css/swiper.css";

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      "& .swiper-pagination-bullet-active": {
        width: "40px",
        borderRadius: "5px",
        background: "#D3323E"
      }
    }
  })
);

const HomeBannerZh = (res: any) => {
  const classes = useStyles();

  useEffect(() => {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }, []);
  const img = _.get(res, "content.0.zh_img", []);
  return <div className={"swiper-container " + classes.main}>
    <div className="swiper-wrapper">
      {
        img.map(itm => <div className="swiper-slide">
          <img width='100%' src={itm.url} alt=""/>
        </div>)
      }
    </div>
    <div className="swiper-pagination"/>
  </div>;
};

export default HomeBannerZh;
