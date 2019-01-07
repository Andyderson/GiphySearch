import React from "react";

import SearchBar from "./SearchBar.js";

const Banner = props => {
  return (
    <div>
      <h1 className="giphytext">GiphySearch</h1>
      <SearchBar handleQuery={props.handleQuery} />
      <div>
        <select className="sort" onChange={e => props.handleSort(e)}>
          <option value="">Sort By</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Banner;
