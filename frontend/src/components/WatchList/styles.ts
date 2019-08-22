import styled from "styled-components";
import { animated } from "react-spring";

export const WatchListSideBar = styled(animated.div)`
  position: fixed;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 100%;
  background-color: #8e8d8a;
  width: 40%;
  margin-left: auto;
  z-index: 2;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
`;

export const WatchListFooter = styled.div``;
