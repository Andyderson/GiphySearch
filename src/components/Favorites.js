import React from "react";
import Gallery from "react-grid-gallery";

import List from "./List.js";

//Gallery
// const Favorites = props => (
//   <List
//     title="favorites"
//     updateFavorites={props.updateFavorites}
//     favorites={props.favorites}
//   />
// );

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <List title="favorites" images={this.props.favorites} />;
  }
}

export default Favorites;
