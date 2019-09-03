import React from "react";

import HomeBanner from "./HomeBanner";
import HomeAbout from "./HomeAbout";
import ContentBanner from "./ContentBanner";
import Assessment from "./Assessment";

function Home() {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <ContentBanner />
      <Assessment />
    </>
  );
}

export default Home;
