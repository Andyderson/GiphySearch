import React, { Component } from "react";
import styled from "styled-components";

const SearchStyle = styled.input`
  min-width: 185px;
  width: 20%;
  height: 3%;
  background: white;
  position: absolute;
  left: 69.5%;
  font-size: 16px;
  border-radius: 8px;
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
