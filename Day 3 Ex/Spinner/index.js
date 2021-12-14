import React from "react";
import ReactDOM from "react-dom";
import SpinnerLoader from "./SpinnerContainer";
import "./style.css";

function App() {
  return (
    <div className="main">
      <SpinnerLoader />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
