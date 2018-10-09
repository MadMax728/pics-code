import React, { Component } from "react";
import * as images from "../../../lib/constants/images";

class DownloadStore extends Component {
  render() {
    return (
      <div className="app-download">
        <div>App download</div>
        <a href="https://itunes.apple.com/">
          <img src={images.iphone} alt={"iphone"} />
        </a>
        <a href="https://play.google.com/">
          <img src={images.andriod} alt={"android"} />
        </a>
      </div>
    );
  }
}

export default DownloadStore;
