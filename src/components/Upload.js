import React, { Component } from "react";
import styled from "styled-components";

const UploadStyle = styled.input`
  min-width: 185px;
  outline: 0;
  padding: 5px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  border: none;
  outline: 0;
  border-bottom: 3px solid red;
  &:focus {
    border-color: #c1c1c1;
  }
`;

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
      <div>
        <h2 className="giphytext">Upload Your GIF!</h2>
        <br />
        <UploadStyle type="text" placeholder="Upload a GIF!" />
      </div>
    );
  }
}

export default Upload;
