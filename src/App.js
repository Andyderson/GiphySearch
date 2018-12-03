import React, { Component } from "react";
import axios from "axios";
import GIPHY_API_KEY from "./config/giphy.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=25&rating=G`;

    axios
      .get(url)
      .then(res => {
        res = res.data.data;

        console.log(res);

        this.setState({
          gifs: res[0].images.original.url
        });
      })
      .catch(error => {
        console.log("Axios GET error", error);
      });
  }

  render() {
    return <img src={this.state.gifs} alt="GIF Goes Here" />;
  }
}

export default App;
