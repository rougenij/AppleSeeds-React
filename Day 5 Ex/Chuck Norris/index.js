import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import ChuckNorris from "./ChuckNorris";

function App() {
  return (
    <div className="main">
      <ChuckNorris />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
