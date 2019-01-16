import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SearchStyle = styled.input`
  min-width: 185px;
  width: 20%;
  height: 3%;
  background: white;
  position: absolute;
  left: 69.75%;
  font-size: 16px;
  border: none;
  outline: 0;
  padding: 5px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  border-bottom: 3px solid red;
  &:focus {
    border-color: #c1c1c1;
  }
`;

const SearchBar = props => {
  return (
    <SearchStyle
      placeholder="Search for GIFS!"
      onKeyPress={props.handleQuery}
    />
  );
};

SearchBar.PropTypes = {
  handleQuery: PropTypes.func.isRequired
};

export default SearchBar;
