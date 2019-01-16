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

  componentDidMount() {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=25&rating=G`;

    axios
      .get(url)
      .then(res => {
        res = res.data.data;
        const gifs = reformatData(res);

        this.setState({
          gifs
        });
      })
      .catch(error => {
        console.log("Axios GET error", error);
      });
  }

  render() {
    return (
      <div>
        <List
          title="Trending GIFs"
          updateFavorites={this.props.updateFavorites}
          favorites={this.props.favorites}
          gifs={this.state.gifs}
        />
      </div>
    );
  }
}

export default LandingPage;
