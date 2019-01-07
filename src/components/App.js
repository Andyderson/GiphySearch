import React, { Component } from "react";

import List from "./List.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
  }

  updateFavorites = favorites => {
    this.setState({
      favorites: favorites
    });
  };

  handleUpload = e => {
    console.log("upload");
  };

  handleHome = e => {
    console.log("home");
  };

  render() {
    return (
      <div>
        <List updateFavorites={this.updateFavorites} />
      </div>
    );
  }
}

export default App;
