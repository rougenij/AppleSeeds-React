import React from "react";

const Input = ({ label, isChecked, onChange, onDelete }) => {
  return (
    <div>
      <label>{label}</label>
      <input onChange={onChange} type="checkbox" checked={isChecked} />
      {isChecked && <button onClick={onDelete}>Delete</button>}
    </div>
  );
};

export default Input;
