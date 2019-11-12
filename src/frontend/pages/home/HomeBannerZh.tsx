import React, { useEffect } from "react";

import { makeStyles, createStyles } from "@material-ui/styles";

import { Typography, Modal } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

import { Grommet, Button } from "grommet";
import http from "../../../../http";


const useStyles = makeStyles((theme: any) =>
  createStyles({
    main:{
      '& .swiper-pagination-bullet-active':{
        width: '40px',
        borderRadius: '5px',
        background: '#D3323E',
      }
    }
  })
);

const HomeBanner = (res: any) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function onHandleOpen() {
    setOpen(true);
  }

  function onHandleClose() {
    setOpen(false);
  }

  useEffect(()=>{
    new Swiper('.swiper-container', {
      autoplay: true,
      loop : true,
      pagination: {
        el: '.swiper-pagination',
        clickable :true,
      },
    })
  },[]);
  const {url} = res;
  const img = res.content[0].zh_img;
  return <div className={"swiper-container "+classes.main}>
    <div className="swiper-wrapper">
      {
        img.map(itm=><div className="swiper-slide">
          <img width='100%' src={url + itm.url} alt=""/>
        </div>)
      }
    </div>
    <div className="swiper-pagination"/>
  </div>
};

export default HomeBanner;
