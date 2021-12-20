import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="main">
      <SearchBar />{" "}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
