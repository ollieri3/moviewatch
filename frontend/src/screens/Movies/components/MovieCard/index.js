import React from "react";

import { IMovie } from "../..";
import { MovieCardStyled } from "./styles";

const MovieCard = ({ movie }) => {
  return (
    <MovieCardStyled>
      <img src={movie.thumbnail} alt={`poster for ${movie.title}`} />
      <p>{movie.title}</p>
    </MovieCardStyled>
  );
};

export default MovieCard;
