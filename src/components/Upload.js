import React, { Component } from "react";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="upload" onClick={this.props.handleUpload}>
        Upload
      </div>
    );
  }
}

export default Upload;
