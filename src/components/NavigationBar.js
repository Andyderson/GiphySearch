import React from "react";
import { NavLink } from "react-router-dom";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>
          <NavLink exact to="/">
            GiphySearch
          </NavLink>
        </h2>
        <h2>
          <NavLink exact to="/">
            Home
          </NavLink>
        </h2>
        <h2>
          <NavLink exact to="/favorites">
            Favorites
          </NavLink>
        </h2>
        <h2>
          <NavLink exact to="/upload">
            Upload
          </NavLink>
        </h2>
      </div>
    );
  }
}

export default NavigationBar;
