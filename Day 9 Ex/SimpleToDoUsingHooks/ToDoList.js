import React, { useState } from "react";

const ToDoList = (props) => {
  const [isCompleted, setIsCompleted] = useState(props.completed);

  const handleClick = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="todo-list">
      {props.text}{" "}
      <div role={"button"} onClick={handleClick} className="btn">
        {isCompleted ? <span>&#10004;</span> : <span>&#10008;</span>}
      </div>
    </div>
  );
};

export default ToDoList;
