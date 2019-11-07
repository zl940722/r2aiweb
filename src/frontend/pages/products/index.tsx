import React from "react";

import ProductBanner from "./ProductBanner";
import ProductAbout from "./ProductAbout";
import ContentBanner from "./ContentBanner";
import ProductGrids from "./ProductGrids";

function Products() {
  return (
    <>
      <ProductBanner />
      <ProductAbout />
      <ContentBanner />
      <ProductGrids />
    </>
  );
}

export default Products;
