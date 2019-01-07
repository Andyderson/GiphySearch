import React, { Component } from "react";

import Gallery from "react-grid-gallery";
import { ascending, descending } from "../lib/sortList.js";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      sorted: false
    };
  }

  //handleSort
  //handleSelect

  render() {
    let gifs = this.props.gifs;
    let html = <Gallery images={gifs} />;
    return <main>{html}</main>;
  }
}

export default List;
