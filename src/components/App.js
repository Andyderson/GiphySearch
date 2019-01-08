import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage.js";
import Favorites from "./Favorites.js";
import NoMatch from "./NoMatch.js";
import NavigationBar from "./NavigationBar.js";
import Upload from "./Upload.js";

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

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <LandingPage updateFavorites={this.updateFavorites} />
              )}
            />
            <Route
              path="/favorites"
              render={() => (
                <Favorites updateFavorites={this.updateFavorites} />
              )}
            />
            <Route path="/upload" render={() => <Upload />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
