import React, { useEffect, useState } from "react";

import { makeStyles, createStyles } from "@material-ui/styles";
import _ from "lodash";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import { Carousel } from "antd";
import './banner.css'

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
  const img = _.get(res, "content.0.zh_img", []);

  const [result,upResult] = useState(<img src={img[0].url} width='100%' alt=""/>);
  const [isSwiper,upIsSwiper] = useState(false);

  useEffect(()=>{
    if(!!(window as any).ActiveXObject || "ActiveXObject" in window){//IE
      upResult(<Carousel>
        {
          img.map((itm,index) => <div key={index}>
            <img width='100%' src={itm.url} alt=""/>
          </div>)
        }
      </Carousel>)
    }else{
      upResult(<div className={"swiper-container " + classes.main}>
        <div className="swiper-wrapper">
          {
            img.map((itm,index) => <div key={index} className="swiper-slide">
              <img width='100%' src={itm.url} alt=""/>
            </div>)
          }
        </div>
        <div className="swiper-pagination"/>
      </div>);
      upIsSwiper(true);
    }

  },[]);

  useEffect(()=>{
    if(isSwiper){
      new Swiper(".swiper-container", {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    }
  },[isSwiper]);

  return result;

};

export default HomeBannerZh;
