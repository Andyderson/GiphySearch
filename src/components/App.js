import React, { Component } from "react";
import axios from "axios";
import Gallery from "react-grid-gallery";

import SearchBar from "./SearchBar.js";
import GIPHY_API_KEY from "../config/giphy.js";
import reformatData from "../lib/reformatData.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
    this.handleQuery = this.handleQuery.bind(this);
  }

  componentDidMount() {
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=25&rating=G`;

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
        console.log("Axios GET error", error);
      });
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
          console.log(gifs);

          this.setState({
            gifs: gifs
          });
        })
        .catch(error => {
          console.log("Search API error", error);
        });
    }
  };

  render() {
    return (
      <div>
        <SearchBar handleQuery={this.handleQuery} />
        <Gallery images={this.state.gifs} />
      </div>
    );
  }
}

export default App;
