import React from "react";
import "./style.css";

const Box = () => {
  return (
    <div className="big-green-box">
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="blue-box">
      <Box3></Box3>
    </div>
  );
};
const Box3 = () => {
  return (
    <div className="pink-box">
      <Box4 />
      <Box4 />
    </div>
  );
};
const Box4 = () => {
  return <div className="purple"></div>;
};

export default Box;
