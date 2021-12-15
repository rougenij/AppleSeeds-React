import React from "react";

const Checked = (props) => {
  return (
    <div>
      <input type={"checkbox"} defaultChecked={props.isChecked}></input>
      {props.text}
    </div>
  );
};

export default Checked;
