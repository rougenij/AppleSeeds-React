import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./quiz";

function App() {
  return <Quiz />;
}

ReactDOM.render(<App />, document.querySelector("#root"));

// We have the main container that holds everything
//^ In that container we have
//1) 'How do you like Front End? Which is like a big header
//2) We have label with input
//3) We have a label with Text area
