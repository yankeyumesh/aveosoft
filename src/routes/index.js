import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import ProductDetailspage from "../pages/ProductDetails";
import ProductPage from "../pages/Products";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/product-details">
          <ProductDetailspage />
        </Route>
        <Route path="/products">
          <ProductPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
