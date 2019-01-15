import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkDiv = styled.ul`
  text-align: center;
  font-family: times new roman;
  a {
    font-size: 20px;
    color: white;
    text-decoration: none;
  }
  a:active {
    color: #551a8b;
  }
  @media (max-width: 470px) {
    min-width: 0;
    max-width: 0;
    overflow: hidden;
  }
`;

const NavigationBarDiv = styled.ul`
  width: 97.5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Serif;
  border-bottom: 2px solid white;
`;

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationBarDiv>
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
