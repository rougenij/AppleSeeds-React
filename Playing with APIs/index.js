import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./style.css";

function App() {
  return (
    <div className="main">
      <Weather />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
