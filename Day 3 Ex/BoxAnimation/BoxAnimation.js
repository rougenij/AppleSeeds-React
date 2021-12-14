import React from "react";

class BoxAnimation extends React.Component {
  state = { classes: "" };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ classes: "animation" });
    }, 1000);
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ classes: "" });
    }, 4000);
  }

  render() {
    return (
      <div
        className={this.state.classes}
        style={{
          width: this.props.value,
          height: this.props.value,
        }}
      ></div>
    );
  }
}

export default BoxAnimation;
