import styled from "styled-components";

import { MovieCardStyled } from "./components/MovieCard/styles";

export const MoviesPage = styled.div`
  margin-top: 3rem;
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  ${MovieCardStyled} {
    width: 20%;
  }
`;
