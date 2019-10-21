import React from "react";
import _ from "lodash";

import HomeBanner from "./HomeBanner";
import HomeBannerZh from "./HomeBannerZh";
import HomeAbout from "./HomeAbout";
import HomeAboutZh from './HomeAboutZh'
import ContentBanner from "./ContentBanner";
import ContentBannerZh from "./ContentBannerZh";
import Assessment from "./Assessment";
import AssessmentZh from './AssessmentZh'
import isEn from "../../../../language";

function Home(res: any) {

  const lists = res.data;

  const banner = _.find(lists, (data: any) => {
    return data.name === "banner";
  });

  const aboutUs = _.find(lists, (data: any) => {
    return data.name === "about_us";
  });

  const whatDo = _.find(lists, (data: any) => {
    return data.name === "what_do_we_do";
  });

  const whyDiff = _.find(lists, (data: any) => {
    return data.name === "why_diff";
  });

  const cloud = _.find(lists, (data: any) => {
    return data.name === "cloud";
  });

  const appraise = _.find(lists, (data: any) => {
    return data.name === "appraise";
  });


  return (
    <>
      {
        isEn ?
          <>
            <HomeBanner {...banner}/>
            <HomeAbout aboutUs={aboutUs} whatDo={whatDo} whyDiff={whyDiff}/>
            <ContentBanner {...cloud}/>
            <Assessment {...res} />
          </> :
          <>
            <HomeBannerZh {...banner}/>
            <HomeAboutZh aboutUs={aboutUs} whatDo={whatDo} whyDiff={whyDiff}/>
            <ContentBannerZh {...cloud}/>
            <AssessmentZh {...appraise} />
          </>
      }
    </>
  );
}

export default Home;
