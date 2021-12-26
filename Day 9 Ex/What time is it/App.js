import React, { useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");

  const handleSeconds = ({ target: { value } }) => {
    setSeconds(value);
    setMinutes(value / 60);
    setHours(value / 3600);
  };

  const handleMinutes = ({ target: { value } }) => {
    setSeconds(value * 60);
    setMinutes(value);
    setHours(value / 60);
  };

  const handleHours = ({ target: { value } }) => {
    setSeconds(value * 3600);
    setMinutes(value * 60);
    setHours(value);
  };

  //Possible to do in 1 function i guess? need to go over it again and refactor if its possible

  return (
    <div className="converter">
      <label>Seconds</label>
      <input
        value={seconds}
        onChange={(e) => {
          handleSeconds(e);
        }}
      ></input>
      <label>Minutes</label>
      <input
        value={minutes}
        onChange={(e) => {
          handleMinutes(e);
        }}
      ></input>
      <label>Hours</label>
      <input
        value={hours}
        onChange={(e) => {
          handleHours(e);
        }}
      ></input>
    </div>
  );
};

export default App;
