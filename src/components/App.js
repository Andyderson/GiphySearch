import React, { Component } from "react";

import LandingPage from "./LandingPage.js";
import List from "./List.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
  }

  handleFavorites = favorites => {
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
        <List />
      </div>
    );
  }
}

export default App;
