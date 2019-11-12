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
import NumZh from './NumZh'
import isEn from "../../../../language";
import WhatDoWeDoZH from "./WhatDoWeDoZH";
import WhyDifferent from "./WhyDifferent";
import WhyDifferentZH from "./WhyDifferentZH";
import WhatDoWeDo from "./WhatDoWeDo";

function Home(res: any) {

  const lists = res.data;
  const {url} = res;
  console.log(11,res)

  const banner = _.find(lists, (data: any) => {
    return data.name === "banner";
  });

  const user = _.find(lists, (data: any) => {
    return data.name === "user";
  });

  const modeling = _.find(lists, (data: any) => {
    return data.name === "modeling";
  });

  return (
    <>
      {
        isEn ?
          <>
            <HomeBanner {...banner} url={url}/>
            <NumZh user={user} modeling={modeling}/>
            <HomeAbout/>
            <WhatDoWeDo/>
            <WhyDifferent/>
            {/*<ContentBanner {...cloud}/>*/}
            {/*<Assessment {...res} />*/}
          </> :
          <>
            <HomeBannerZh {...banner} url={url}/>
            <NumZh user={user} modeling={modeling}/>
            <WhatDoWeDoZH/>
            <WhyDifferentZH/>
            {/*<ContentBannerZh {...cloud}/>*/}
            <AssessmentZh/>
          </>
      }
    </>
  );
}

export default Home;
