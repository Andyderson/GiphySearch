import React, { Component } from "react";

import SearchBar from "./SearchBar.js";
import Upload from "./Upload.js";
import Favorites from "./Favorites.js";
// import Home from "./Home.js";

const Banner = props => {
  return (
    <div>
      <h1 className="giphytext">GiphySearch</h1>
      <div>
        <select>
          <option value="">Sort By</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Banner;
