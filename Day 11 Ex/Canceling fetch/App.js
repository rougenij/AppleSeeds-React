import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const response = await axios.get(
        "https://randomuser.me/api/?results=1000",
        { signal: controller.signal }
      );
      setData(response.data.results);
    })();
    return () => controller.abort();
  }, []);

  const displayData = () => {
    return data.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name.first}</h1>
        </div>
      );
    });
  };

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && displayData()}
    </div>
  );
};

export default App;
