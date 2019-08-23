import React from "react";

import { MoviesPage } from "./styles";
import MovieCard from "./components/MovieCard";

const Movies = () => {
  const movies = [];
  const handleMovieClick = movie => {};

  return (
    <MoviesPage>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={handleMovieClick}
        />
      ))}
    </MoviesPage>
  );
};

export default Movies;
