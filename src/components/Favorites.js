import React, { Component } from "react";

class Favorites extends Component {
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
