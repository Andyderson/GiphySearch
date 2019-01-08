import React from "react";
import List from "./List.js";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="favorites" onClick={this.props.handleFavorites}>
        Favorites
      </div>
    );
  }
}

export default Favorites;
