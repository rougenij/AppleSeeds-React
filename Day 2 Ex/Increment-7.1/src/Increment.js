import React from "react";

class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            let newNum = this.state.number + 1;
            this.setState({ number: newNum });
          }}
        >
          increment
        </button>
        {this.state.number}
      </div>
    );
  }
}

export default Increment;
