import React from "react";
import "./style.css";

class BoxToCircle extends React.Component {
  state = {
    counter: 0,
    classes: "box",
    colors: "rgb(255,0,0)",
  };
  componentDidMount() {
    this.setState({ counter: 0, classes: "box", colors: "rgb(255,0,0)" });
  }
  componentDidUpdate() {
    setTimeout(() => {
      const unit1 = Math.floor(Math.random() * 255);
      const unit2 = Math.floor(Math.random() * 255);
      const unit3 = Math.floor(Math.random() * 255);

      this.setState({
        counter: this.state.counter + 1,
        colors: `rgb(${unit1},${unit2},${unit3})`,
      });
      if (this.state.counter === 5) {
        this.setState({ classes: "circle" });
      }
    }, 1000);
  }

  render() {
    return (
      <div
        className={this.state.classes}
        style={{ backgroundColor: this.state.colors }}
      ></div>
    );
  }
}

export default BoxToCircle;
