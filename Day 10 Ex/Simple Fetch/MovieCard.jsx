import React from "react";

function MovieCard(props) {
  return (
    <div className="movie-card">
      <h1>
        The Movie is called: {props.movieName} , and Its director is{" "}
        {props.movieDirector}
      </h1>
    </div>
  );
}

export default MovieCard;
