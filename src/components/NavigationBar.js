import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkDiv = styled.ul`
  a {
    font-size: 24px;
    font-weight: lighter;
    text-decoration: none;
    display: inline-block;
    margin-top: 5px;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0, #f22),
      color-stop(0.15, #f2f),
      color-stop(0.3, #22f),
      color-stop(0.45, #2ff),
      color-stop(0.6, #2f2),
      color-stop(0.75, #2f2),
      color-stop(0.9, #ff2),
      color-stop(1, #f22)
    );
    background-image: gradient(
      linear,
      left top,
      right top,
      color-stop(0, #f22),
      color-stop(0.15, #f2f),
      color-stop(0.3, #22f),
      color-stop(0.45, #2ff),
      color-stop(0.6, #2f2),
      color-stop(0.75, #2f2),
      color-stop(0.9, #ff2),
      color-stop(1, #f22)
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
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
  font-family: Serif;
  border-bottom: 2px solid white;
`;

const GiphySearchDiv = styled.li`
  a {
    font-size: 36px;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0, #f22),
      color-stop(0.15, #f2f),
      color-stop(0.3, #22f),
      color-stop(0.45, #2ff),
      color-stop(0.6, #2f2),
      color-stop(0.75, #2f2),
      color-stop(0.9, #ff2),
      color-stop(1, #f22)
    );
    background-image: gradient(
      linear,
      left top,
      right top,
      color-stop(0, #f22),
      color-stop(0.15, #f2f),
      color-stop(0.3, #22f),
      color-stop(0.45, #2ff),
      color-stop(0.6, #2f2),
      color-stop(0.75, #2f2),
      color-stop(0.9, #ff2),
      color-stop(1, #f22)
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  a:visited {
    color: #551a8b;
  }
  @media (max-width: 640px) {
    max-width: 0;
    overflow: hidden;
  }
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
              Favorites{" "}
              {this.props.favLength > 0 ? `(${this.props.favLength})` : ``}
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
