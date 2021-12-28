import { useRef, useState, useEffect } from "react";

function App() {
  const [play, setPlay] = useState(false);
  const playVideo = useRef();

  useEffect(() => {
    setPlay(
      "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
    );
  }, []);
  const handleStart = () => {
    playVideo.current.play();
  };
  const handlePause = () => {
    playVideo.current.pause();
  };

  return (
    <div className="App">
      <video ref={playVideo} src={play}></video>
      <button onClick={handleStart}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
