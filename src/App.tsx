import React from 'react';
import { Route } from "react-router-dom";
import { ProductsPage } from "./components/products/ProductsPage";
import { LoginPage } from "./components/login/LoginPage";
import { Home } from "./components/home/Home";

const App = () => {
  return (
    <>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/products">
        <ProductsPage />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
};

export default App;
