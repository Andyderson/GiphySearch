import React, { Component } from "react";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upload: ""
    };
  }
  render() {
    return (
      <div className="upload">
        <input type="text" placeholder="Upload GIF URL" />
      </div>
    );
  }
}

export default Upload;
