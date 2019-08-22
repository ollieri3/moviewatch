import React from "react";
import { HeaderStyled, Sitename, NavigationStyled } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Sitename>Movie Watch</Sitename>
      <NavigationStyled>
        <ul>
          <li>
            <button>Watch list</button>
          </li>
        </ul>
      </NavigationStyled>
    </HeaderStyled>
  );
};

export default Header;
