import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Colors from "./Colors";

function App() {
  return (
    <div className="main">
      <Colors />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
