import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

import "./style.css";

function App() {
  return (
    <div className="main">
      <Button />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
