import React from "react";
import { Link, useParams } from "react-router-dom";
import storeProducts from "./Store";
import "../style.css";

function ProductDetails() {
  const { id } = useParams();
  return (
    <div className="product-details">
      <div className="product-title">
        <h3>{storeProducts[id - 1].title}</h3>
      </div>
      <div className="product-image">
        <img src={storeProducts[id - 1].imageUrl} alt="Product" />
      </div>
      <div className="product-price">
        <h4>{storeProducts[id - 1].price}</h4>
      </div>
      <div className="product-size">
        <h4>{storeProducts[id - 1].size}</h4>
      </div>
      <Link to="/products">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetails;

// title
// imageUrl
//price
//size
//id
