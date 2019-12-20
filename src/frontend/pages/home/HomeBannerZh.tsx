import React, { useReducer, useState } from "react";
import _ from "lodash";
import { Carousel } from "antd";
import './banner.css'

const HomeBannerZh = (res: any) => {
  const [List,upList] = useState(_.get(res, "content.0.zh_img", []));
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  return <Carousel adaptiveHeight autoplay autoplaySpeed={5000} draggable={false} >
    {
      List.map((itm, index) => <div key={index}>
        <img width='100%' src={itm.url} alt=""
             onError={()=>{
               if(!List[index].url.startsWith('/r2')){
                 List[index].url = '/r2'+List[index].url;
                 upList(List);
                 // @ts-ignore
                 forceUpdate();
               }
             }}
        />
      </div>)
    }
  </Carousel>
};

export default HomeBannerZh;
