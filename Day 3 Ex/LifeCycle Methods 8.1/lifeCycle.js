import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  state = { favoritecolor: "red" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }
  componentDidUpdate() {
    document.querySelector(
      "#empty"
    ).textContent = `The updated favorite is ${this.state.favoritecolor}`;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="empty"></div>
      </div>
    );
  }
}

export default Header;
