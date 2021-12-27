import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [term, setTerm] = useState("hooks");
  const [changableTerm, setChangableTerm] = useState("hooks");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${term}`
        );
        setResults(data.data.hits);
      } catch (e) {
        console.log(e);
        setError(true);
      }
    };
    if (term) {
      fetchData();
    }
  }, [term]);

  const showData = () => {
    return results.map((result, i) => {
      return (
        <li key={i} className="result-display">
          {" "}
          <a href={result.url}>{result.title}</a>
        </li>
      );
    });
  };

  const handleClick = () => {
    setTerm(changableTerm);
  };

  if (error) {
    return (
      <div>
        <h1>Error occured, refresh the page!</h1>
      </div>
    );
  }
  return (
    <div>
      <input
        value={changableTerm}
        onChange={(e) => {
          setChangableTerm(e.target.value.toLowerCase());
        }}
      ></input>{" "}
      <button onClick={handleClick}>Search</button>
      <ul>{showData()}</ul>
    </div>
  );
};

export default App;
