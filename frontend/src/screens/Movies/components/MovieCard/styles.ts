import styled from "styled-components";

export const MovieCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;

  img {
    width: 150px;
  }

  img:hover {
    filter: blur(2px);
  }
`;
