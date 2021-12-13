import React from "react";
import ReactDOM from "react-dom";
import Card from "./card";
import "./style.css";

function App() {
  return (
    <div className="main">
      <Card
        imageURL="https://source.unsplash.com/random/850x500"
        title="Random Title"
        description="Hi im random"
        firstLink=""
        secondLink=""
      />
      <Card
        imageURL="https://source.unsplash.com/random/750x500"
        title="Random Title v2"
        description="Who am i"
        firstLink=""
        secondLink=""
      />
      <Card
        imageURL="https://source.unsplash.com/random/650x500"
        title="Random Title v3"
        description="random"
        firstLink=""
        secondLink=""
      />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
