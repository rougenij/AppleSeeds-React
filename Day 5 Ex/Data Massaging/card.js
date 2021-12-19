import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <span className="bold-text">Name:</span> {props.data.name}
      </div>
      <div>
        <span className="bold-text">Birthday:</span> {props.data.birthday}
      </div>
      <div>
        <span className="bold-text">Favorite Meats:</span>{" "}
        {props.data.favoriteFoods.meats.join(" ")}
      </div>
      <div>
        <span className="bold-text">Favorite Fish:</span>{" "}
        {props.data.favoriteFoods.fish.join(" ")}
      </div>
    </div>
  );
};

export default Card;
