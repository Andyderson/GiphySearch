import React, { Component } from "react";
import styled from "styled-components";

const SearchStyle = styled.input`
  min-width: 185px;
  width: 30%;
  height: 3%;
  background: white;
  position: absolute;
  left: 59.5%;
  font-size: 16px;
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <SearchStyle
        placeholder="Search for GIFS!"
        onKeyPress={this.props.handleQuery}
      />
    );
  }
}

export default SearchBar;
