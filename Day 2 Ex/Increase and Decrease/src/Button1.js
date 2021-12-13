import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, color: "black" };
  }
  render() {
    return (
      <div>
        <button
          className="plus"
          onClick={() => {
            let newNum = this.state.number + 1;
            if (newNum > -11 && newNum < 11) {
              this.setState({ number: newNum });
              if (newNum > 0) {
                this.setState({ color: "green" });
              }
            }
            if (newNum === 0) {
              this.setState({ color: "black" });
            }
          }}
        >
          Increase
        </button>
        <input
          type="text"
          value={this.state.number}
          style={{ color: `${this.state.color}` }}
        ></input>
        <button
          className="minus"
          onClick={() => {
            let newNum = this.state.number - 1;
            if (newNum > -11 && newNum < 11) {
              this.setState({ number: newNum });
              if (newNum < 0) {
                this.setState({ color: "red" });
              }
            }
            if (newNum === 0) {
              this.setState({ color: "black" });
            }
          }}
        >
          Decrease
        </button>
      </div>
    );
  }
}

export default Button;
//! A label that displays the current value.
//! The counter range can only be from -10 to 10.
//! If the counter is negative the label will be a red color.
//! If the counter is positive the label will be a green color.
//! If the counter is 0 the label will be a black color
