import React, { Component } from "react";
import { OnBoardingSkeleton } from "../../user";

class AboutUs extends Component {
  render() {
    return (
      <OnBoardingSkeleton showDownloadStore>{() => <div />}</OnBoardingSkeleton>
    );
  }
}

export default AboutUs;
