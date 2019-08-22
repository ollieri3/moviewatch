import { gql } from "apollo-boost";

export const GET_MOVIES = gql`
  query movies {
    movies {
      id
      title
      director
      year
      thumbnail
      runTime
      imdbRating
      description
    }
  }
`;
