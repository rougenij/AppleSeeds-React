import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div>
        <button className={this.props.className}>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;
