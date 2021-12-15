import React from "react";
import ReactDOM from "react-dom";
import Check from "./CheckComonent";
import "./style.css";

function App() {
  return (
    <div className="main">
      <Check />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
