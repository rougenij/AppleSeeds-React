import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./style.css";
import HomePage from "./components/HomePage/HomePage";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/products" exact component={Products} />
          <Route path="/product/:id" exact component={ProductDetails} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
