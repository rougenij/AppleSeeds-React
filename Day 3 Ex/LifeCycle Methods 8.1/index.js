import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Header from "./lifeCycle";

function App() {
  return (
    <div className="main">
      <Header />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
