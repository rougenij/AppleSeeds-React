import { useRef, useState } from "react";

function App() {
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("");

  const inputRef = useRef();

  const handleClick = () => {
    setShowInput(!showInput);
    if (showInput) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="App">
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>

      <button onClick={handleClick}>{showInput ? "Save" : "Edit"}</button>
    </div>
  );
}

export default App;
