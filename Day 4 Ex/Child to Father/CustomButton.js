import React from "react";
class CustomButton extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        class="btn"
        style={{ backgroundColor: this.props.color }}
      >
        {this.props.color}
      </button>
    );
  }
}

export default CustomButton;
