import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_MOVIES } from "../../models/movies/queries";

import { MoviesPage } from "./styles";
import MovieCard from "./components/MovieCard";

const Movies = () => {
  const { loading, data } = useQuery < IMovieData > GET_MOVIES;

  if (loading) return <p>loading</p>;

  return (
    <MoviesPage>
      {data &&
        data.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </MoviesPage>
  );
};

export default Movies;
