import React from "react";

import { WatchCard, CardInfo } from "./styles";

const WatchListItem = ({ movie }) => {
  return (
    <WatchCard>
      <img src={movie.thumbnail} />
      <CardInfo>
        <h2>{movie.title}</h2>
        <span role="img" aria-label="movie rating">
          ⭐
        </span>
        <p>{movie.imdbRating}</p>
        <span role="img" aria-label="movie duration">
          🕐
        </span>
        <p>{movie.runTime}</p>
      </CardInfo>
    </WatchCard>
  );
};

export default WatchListItem;
