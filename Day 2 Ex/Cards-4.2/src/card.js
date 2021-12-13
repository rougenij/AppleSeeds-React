import React from "react";
import "./style.css";
const Card = (props) => {
  return (
    <div className="main-container">
      <img src={props.imageURL} className="picture" />
      <h2 className="title">{props.title}</h2>
      <h4 className="description">{props.description}</h4>
      <div className="links">
        <a href={props.firstLink} className="linkone">
          Share
        </a>
        <a href={props.secondLink} className="linktwo">
          Explore
        </a>
      </div>
    </div>
  );
};

export default Card;

//! Card
//Image
//Title
//Description
//Two Links --> Share and Explore
