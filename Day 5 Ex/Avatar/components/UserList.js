import React from "react";
import Avatar from "./Avatar";

const UsersList = (props) => {
  const users = props.users.map((user) => {
    return (
      <Avatar
        key={user.cell}
        name={user.name.first + " " + user.name.last}
        pic={user.picture.large}
      />
    );
  });

  return <div className="users-container">{users}</div>;
};

export default UsersList;
