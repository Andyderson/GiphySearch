import React, { Component } from "react";

import SearchBar from "./SearchBar.js";
import Upload from "./Upload.js";
import Favorites from "./Favorites.js";
import Home from "./Home.js";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="banner">
        <h1 className="giphytext">GiphySearch</h1>
        <Home handleHome={this.props.handleHome} />
        <Favorites handleFavorites={this.props.handleFavorites} />
        <Upload handleUpload={this.props.handleUpload} />
        <SearchBar handleQuery={this.props.handleQuery} />
      </div>
    );
  }
}

export default Banner;
