import React, { useEffect } from "react";

import { makeStyles, createStyles } from "@material-ui/styles";

import Swiper from 'swiper'
import 'swiper/css/swiper.css'

const useStyles = makeStyles(() =>
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

export default function(res: any){
  const classes = useStyles();

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
  const {url,content=[{}]} = res;
  const {zh_img:img=[]} = content[0];
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
