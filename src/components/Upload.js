import React, { Component } from "react";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upload: ""
    };
  }

  handleSubmit = e => {
    let input = this.uploaded;

    if (input === "") {
      return;
    }

    this.setState({
      upload: input
    });
  };

  render() {
    return (
      <div className="upload">
        <h2>Upload a GIF</h2>
        <input type="text" placeholder="Upload GIF URL" />
      </div>
    );
  }
}

export default Upload;
