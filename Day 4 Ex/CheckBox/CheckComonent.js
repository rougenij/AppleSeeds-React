import React from "react";
import Checked from "./Checkbox";

const Check = () => {
  const checkboxes = [
    {
      text: "I read the term of the app",
      isChecked: false,
    },
    {
      text: "I accept the term of the app",
      isChecked: false,
    },
    {
      text: "I want to get the weekly news letter",
      isChecked: true,
    },
    {
      text: "I want to get sales and offers",
      isChecked: true,
    },
  ];
  const createCheckBox = () => {
    return checkboxes.map((box) => {
      return <Checked text={box.text} isChecked={box.isChecked} />;
    });
  };
  return <form>{createCheckBox()}</form>;
};
export default Check;
