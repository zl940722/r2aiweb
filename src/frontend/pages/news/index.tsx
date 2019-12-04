import React from "react";

// import Banner from "./Banner";
import Tabs from "./Tabs";
import Pagination from "../../common/Pagination";

export default function(res: any) {
  const link = res.route.includes("news") ? "news" : "resources";

  return (
    <>
      {/*<Banner link={link}/>*/}
      <img src={`/static/images/${link}/banner.png`} width='100%' alt=""/>
      <a id='main' style={{display:'block'}}/>
      <Pagination/>
      <Tabs {...res}/>
    </>
  );
}
