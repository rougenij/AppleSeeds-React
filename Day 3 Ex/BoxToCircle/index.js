import React from "react";
import ReactDOM from "react-dom";
import BoxToCircle from "./BoxToCircle";
import "./style.css";

function App() {
  return (
    <div className="main">
      <BoxToCircle />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
