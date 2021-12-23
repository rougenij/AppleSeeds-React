import React from "react";

class ListItem extends React.Component {
  state = { doneClass: "" };
  inputRef = React.createRef();

  handleDone = () => {
    if (this.state.doneClass === "") {
      this.setState({ doneClass: "done" });
    } else {
      this.setState({ doneClass: "" });
    }
  };

  handleButton1 = (e) => {
    this.props.handleButton1(e, this.inputRef);
  };

  render() {
    return (
      <div className="list-item">
        <div className="list-item-left">
          <input
            type={"checkbox"}
            className="checkbox"
            onClick={this.handleDone}
          ></input>
          {this.props.itemData.edit && (
            <input ref={this.inputRef} className="edit-box" autoFocus></input>
          )}
          {!this.props.itemData.edit && (
            <span className={this.state.doneClass}>
              {this.props.itemData.task}
            </span>
          )}
        </div>
        <div className="list-item-right">
          <div
            id={this.props.id}
            itemID={this.props.id}
            className="btn"
            onClick={this.handleButton1}
          >
            {this.props.itemData.button1}
          </div>
          <div
            id={this.props.id}
            itemID={this.props.id}
            className="btn"
            onClick={this.props.handleButton2}
          >
            {this.props.itemData.button2}
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
