import React, { Component } from "react";
import axios from "axios";
import Gallery from "react-grid-gallery";

import Banner from "./Banner.js";
import GIPHY_API_KEY from "../config/giphy.js";
import reformatData from "../lib/reformatData.js";
import { ascending, descending } from "../lib/sortList.js";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      sorted: false
    };
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

  handleSort = e => {
    let gifs = this.state.gifs.slice();

    let input = e.target.value;
    let sortValue;

    if (input === "") {
      e.preventDefault();
      return;
    }

    if (input === "Newest") {
      sortValue = descending;
    } else if (input === "Oldest") {
      sortValue = ascending;
    }

    let sortedGifs = gifs.sort(sortValue);

    this.setState({
      gifs: sortedGifs,
      sorted: true
    });
  };

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

  render() {
    let gifs = this.state.gifs;

    return (
      <div>
        <Banner handleQuery={this.handleQuery} handleSort={this.handleSort} />
        <Gallery images={gifs} />
      </div>
    );
  }
}

export default List;
