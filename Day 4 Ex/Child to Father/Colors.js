import React from "react";
import CustomButton from "./CustomButton";

class Colors extends React.Component {
  colors = ["blue", "red", "yellow"];
  state = { colorState: "" };

  handleClickEvent = (e) => {
    this.setState({ colorState: item });
  };

  createBtns = () => {
    return this.colors.map((item) => (
      <CustomButton onClick={this.handleClickEvent} color={item} />
    ));
  };

  render() {
    return (
      <div onClick={this.handleClickEvent}>
        {this.createBtns()}
        <div>Chosen color: {this.state.colorState}</div>
      </div>
    );
  }
}

export default Colors;
