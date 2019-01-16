import React from "react";

import SearchBar from "./SearchBar.js";

const Banner = props => {
  return (
    <div>
      <SearchBar handleQuery={props.handleQuery} />
      <h2 className="giphytext">{props.title}</h2>
      <div className="sortBanner">
        <select
          className="sort"
          onChange={e => {
            props.handleSort(e);
          }}
        >
          <option value="">Sort By</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Banner;
