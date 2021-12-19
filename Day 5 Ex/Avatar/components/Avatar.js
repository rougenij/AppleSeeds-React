import React from "react";

const Avatar = (props) => {
  return (
    <div className="avatar-container">
      <span className="name">{props.name}</span>
      <div className="image">
        <img src={props.pic} alt={props.name} />
      </div>
    </div>
  );
};

export default Avatar;
