import React, { useContext } from "react";
import CardDesc from "../components/ProductDetails/CardDesc";

import ProductContext from "../context/productContext";

const ProductDetailspage = () => {
  const a = useContext(ProductContext);

  if (!Object.keys(a).length) {
    return null;
  }

  return (
    <>
      <CardDesc
        name={a.clicked.name}
        price={a.clicked.price}
        model={a.clicked.model}
        category={a.clicked.categoryId}
        desc={a.clicked.description}
      />
    </>
  );
};

export default ProductDetailspage;
