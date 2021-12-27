import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://swapi.dev/api/films/");
      console.log(response.data.results);
      setData(response.data.results);
    })();

    return () => {};
  }, []);

  return (
    <div>
      {data.map((movie, i) => {
        return (
          <MovieCard
            movieName={movie.title}
            movieDirector={movie.director}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default App;

// 1. Call the API when the component mounts on the screen.
// 2. Display the movies title and director.
