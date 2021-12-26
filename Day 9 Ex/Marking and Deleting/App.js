import React, { useState } from "react";
import Input from "./Input";
const App = () => {
  const data = ["one", "two", "three", "four", "five"];
  const checkBoxes = data.map((checkbox, i) => {
    return { name: checkbox, isChecked: false };
  });
  const [checkObjs, setCheckObjs] = useState(checkBoxes);
  console.log(checkObjs);
  const onChange = (i) => {
    const temp = [...checkObjs];
    temp[i].isChecked = !temp[i].isChecked;
    setCheckObjs(temp);
  };
  const onDelete = (i, value) => {
    const temp = checkObjs.filter((checkbox, index) => checkbox.name !== value);
    setCheckObjs(temp);
  };
  const onReset = () => {
    setCheckObjs(checkBoxes);
  };
  const renderCheckBoxes = () =>
    checkObjs.map((checkbox, i) => (
      <Input
        key={checkbox.name}
        onChange={() => onChange(i)}
        label={checkbox.name}
        isChecked={checkbox.isChecked}
        onDelete={() => onDelete(i, checkbox.name)}
      />
    ));
  return (
    <div>
      <button onClick={onReset}>Reset</button>
      {renderCheckBoxes()}
    </div>
  );
};

export default App;
