import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import BoxAnimation from "./BoxAnimation";

function App() {
  return (
    <div className="main">
      <BoxAnimation value="50px" />
      <BoxAnimation value="200px" />
      <BoxAnimation value="150px" />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
