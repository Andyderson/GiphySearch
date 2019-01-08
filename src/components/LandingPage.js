import React, { Component } from "react";

import List from "./List.js";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }

  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}

export default LandingPage;
