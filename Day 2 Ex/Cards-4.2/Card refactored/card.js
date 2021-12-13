import React from "react";
import "./style.css";

class Card extends React.Component {
  render() {
    return (
      <div className="main-container">
        <img src={this.props.imageURL} className="picture" />
        <h2 className="title">{this.props.title}</h2>
        <h4 className="description">{this.props.description}</h4>
        <div className="links">
          <a href={this.props.firstLink} className="linkone">
            Share
          </a>
          <a href={this.props.secondLink} className="linktwo">
            Explore
          </a>
        </div>
      </div>
    );
  }
}

export default Card;

//For props to be defined we have to add this keyword
