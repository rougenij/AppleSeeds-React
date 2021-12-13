import React from "react";
import "./style.css";

class ShowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            let hidden = !this.state.show;
            this.setState({ show: hidden });
            const x = document.querySelector("[data-div]");
            x.classList.toggle("none");
          }}
        >
          Show / Hide
        </button>
        <div data-div className="stam-box none"></div>
      </div>
    );
  }
}

export default ShowButton;

//!
/* <div>
<button
  onClick={() => {
    this.click();
  }}
>
  {this.state.div ? 'hide' : 'show'}
</button>

{this.state.div && <div>dsadasds</div>}
</div> */
