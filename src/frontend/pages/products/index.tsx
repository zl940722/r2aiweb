import React from "react";

import ProductBanner from "./ProductBanner";
import ProductAbout from "./ProductAbout";
import ContentBanner from "./ContentBanner";
import ProductGrids from "./ProductGrids";

function Products(res) {
  return (
    <>
      <ProductBanner />
      <ProductAbout />
      <ContentBanner {...res} />
      <ProductGrids />
    </>
  );
}

export default Products;
