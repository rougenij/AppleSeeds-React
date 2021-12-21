import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style.css";
import HomePage from "./components/HomePage/HomePage";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import ProductDetails from "./components/ProductDetails";
import PageNotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" exact component={ProductDetails} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
