import React from "react";
import ReactDOM from "react-dom";
import Button from "./buttons";
import "./style.css";

function App() {
  return (
    <div>
      <Button name="Important" className="bold" />
      <Button name="Not Important" className="notBold" />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
