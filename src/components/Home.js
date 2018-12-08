import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home" onClick={this.props.handleHome}>
        Home
      </div>
    );
  }
}

export default Home;
