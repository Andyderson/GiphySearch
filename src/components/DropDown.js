import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const DropDown = props => (
  <ul className="dropdown">
    <li className="link">
      <NavLink exact to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/favorites">
        Favorites {props.favLength > 0 ? `(${props.favLength})` : ""}
      </NavLink>
    </li>
    <li>
      <NavLink to="/upload">Upload</NavLink>
    </li>
  </ul>
);

DropDown.propTypes = {
  favLength: PropTypes.number.isRequired
};

export default DropDown;
