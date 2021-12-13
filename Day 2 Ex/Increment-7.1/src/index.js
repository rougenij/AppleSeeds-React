import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Increment from "./Increment";

function App() {
  return (
    <div className="main">
      <Increment />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
