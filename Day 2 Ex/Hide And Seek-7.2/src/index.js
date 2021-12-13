import React from "react";
import ReactDOM from "react-dom";
import ShowButton from "./hideButton";
import "./style.css";

function App() {
  return (
    <div className="main">
      <ShowButton />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
