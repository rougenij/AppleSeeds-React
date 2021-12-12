import React from "react";
import ReactDOM from "react-dom";
import Box from "./box";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Box />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

// Hard coded ->
{
  /* <div
className="big-green-box"
style={{
  backgroundColor: "green",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}}
>
<div
  className="blue-box"
  style={{
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "90%",
  }}
>
  <div
    className="pink-box"
    style={{
      backgroundColor: "pink",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
      height: "90%",
    }}
  >
    <div
      className="upper-purple"
      style={{
        backgroundColor: "purple",
        width: "50%",
        height: "50%",
        margin: "2rem 2rem",
      }}
    ></div>
    <div
      className="lower-purple"
      style={{
        backgroundColor: "purple",
        width: "50%",
        height: "50%",
        margin: "2rem 2rem",
      }}
    ></div>
  </div>
</div>
</div> */
}
