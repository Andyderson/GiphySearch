//Potential to take out completely

import React, { Component } from "react";
import axios from "axios";

import List from "./List.js";
import GIPHY_API_KEY from "../config/giphy.js";
import reformatData from "../lib/reformatData.js";

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
