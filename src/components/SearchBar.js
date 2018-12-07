import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <input
        placeholder="Search for GIFS!"
        onKeyPress={this.props.handleQuery}
      />
    );
  }
}

export default SearchBar;
