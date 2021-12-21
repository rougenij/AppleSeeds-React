import React from "react";
import { Link } from "react-router-dom";
import storeProducts from "../Store";
import "./Products.css";

class Products extends React.Component {
  state = { data: [] };

  componentDidMount() {
    this.setState({ data: storeProducts });
  }

  handleProducts = () => {
    return this.state.data.map((product) => {
      return (
        <Link to={`${this.props.location.pathname}/${product.id}`}>
          <div key={product.id} className="product">
            <h3>{product.title}</h3>
            <img src={product.imageUrl} alt="Product" />
          </div>
        </Link>
      );
    });
  };

  render() {
    return (
      <div className="product-maincontainer">
        <div>
          <h1>Products Page</h1>
        </div>
        <div className="product-list">{this.handleProducts()}</div>
      </div>
    );
  }
}

export default Products;
