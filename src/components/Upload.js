import React, { Component } from "react";
import styled from "styled-components";

const UploadInput = styled.input`
  padding: 5px;
  box-sizing: border-box;
  @media (max-width: 660px) {
    min-width: 280px;
    overflow: hidden;
  }
`;

const UploadForm = styled.form`
  text-align: center;
  border-radius: 5px;
  @media (max-width: 660px) {
    min-width: 280px;
    overflow: hidden;
  }
`;

const PreviewDiv = styled.div`
  text-align: center;
  padding: 5px img {
    width: 50%;
  }
  padding-top: 10px;
`;

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    let input = this.uploadedGIF.value;

    if (input === "") {
      return;
    }

    this.setState({
      link: input
    });
  };

  render() {
    return (
      <div>
        <h2 className="giphytext">Upload Your GIF!</h2>
        <br />
        <UploadForm onSubmit={this.handleSubmit}>
          <UploadInput
            type="text"
            placeholder="Insert GIF Link Here!"
            ref={input => (this.uploadedGIF = input)}
          />
        </UploadForm>
        <PreviewDiv ref={input => (this.previewGIF = input)}>
          <img src={this.state.link} alt="" />
        </PreviewDiv>
      </div>
    );
  }
}

export default Upload;
