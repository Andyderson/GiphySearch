import React, { Component } from "react";
import axios from "axios";

import Banner from "./Banner.js";
import LandingPage from "./LandingPage.js";
import GIPHY_API_KEY from "../config/giphy.js";
import reformatData from "../lib/reformatData.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
  }

  handleQuery = e => {
    if (e.key === "Enter") {
      let query = e.target.value;
      let url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=25&offset=0&rating=G&lang=en`;

      axios
        .get(url)
        .then(res => {
          res = res.data.data;
          let gifs = reformatData(res);

          this.setState({
            gifs: gifs
          });
        })
        .catch(error => {
          console.log("Search API error", error);
        });
    }
  };

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
        <Banner />
        <LandingPage handleFavorites={this.handleFavorites} />
      </div>
    );
  }
}

export default App;
