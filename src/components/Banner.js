import React from "react";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar.js";

const Banner = props => (
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

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  handleQuery: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired
};

export default Banner;
