import React from "react";
import { movies } from "../data";
import Movie from "./Movie";


function Movies() {

  const renderMovies = movies.map(movie => <Movie key={movie.time} movie={movie} />)
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  )
}

export default Movies;
