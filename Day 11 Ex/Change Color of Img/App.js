import { useRef, useState, useEffect } from "react";
import "./style.css";

function App() {
  const [img, setImg] = useState("https://picsum.photos/200/300");
  const imgRef = useRef();

  useEffect(() => {
    imgRef.current.addEventListener("mouseenter", () => {
      imgRef.current.className = "";
    });
    imgRef.current.addEventListener("mouseleave", () => {
      imgRef.current.className = "black";
    });
  });
  return (
    <div className="App">
      <img ref={imgRef} src={img} alt="" className="" />
    </div>
  );
}

export default App;
