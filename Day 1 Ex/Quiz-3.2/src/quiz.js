import React from "react";
import "./style.css";

const Quiz = () => {
  return (
    <div className="main-container">
      <QuizTitle />
      <Q1 />
      <Q2 />
    </div>
  );
};

const QuizTitle = () => {
  return (
    <div className="main-quiztitle">
      <h1>How do you like Front End</h1>
    </div>
  );
};
const Q1 = () => {
  return (
    <div className="main-question-oneholder">
      <Q1Title />
      <Q1Input />
    </div>
  );
};

const Q1Title = () => {
  return <h4>How much do you love front end?</h4>;
};

const Q1Input = () => {
  return <input type={"range"}></input>;
};

const Q2 = () => {
  return (
    <div className="main-question-twoholder">
      <Q2Title />
      <Q2Input />
    </div>
  );
};

const Q2Title = () => {
  return <h4>What is your favorite frond end feature/topic</h4>;
};
const Q2Input = () => {
  return <input type={"text"}></input>;
};

export default Quiz;
