import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const GiphySearchDiv = styled.ul`
  text-align: center;
  @media (max-width: 640px) {
    max-width: 0;
    overflow: hidden;
  }
`;

const LinkDiv = styled.ul`
  text-align: center;
  @media (max-width: 470px) {
    min-width: 0;
    max-width: 0;
    overflow: hidden;
  }
`;

const NavigationBarDiv = styled.ul`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationBarDiv>
        <GiphySearchDiv>
          <h2>
            <NavLink exact to="/">
              GiphySearch
            </NavLink>
          </h2>
        </GiphySearchDiv>
        <LinkDiv>
          <h2>
            <NavLink exact to="/">
              Home
            </NavLink>
          </h2>
        </LinkDiv>
        <LinkDiv>
          <h2>
            <NavLink exact to="/favorites">
              Favorites
            </NavLink>
          </h2>
        </LinkDiv>
        <LinkDiv>
          <h2>
            <NavLink exact to="/upload">
              Upload
            </NavLink>
          </h2>
        </LinkDiv>
      </NavigationBarDiv>
    );
  }
}

export default NavigationBar;
