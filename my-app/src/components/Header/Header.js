import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">HomePage</Link>
      <Link to="/products">Products</Link>
    </div>
  );
}

export default Header;
