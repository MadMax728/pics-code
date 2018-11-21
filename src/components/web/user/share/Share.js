import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";
import propTypes from "prop-types";

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="col-xs-12 no-padding">Share</div>;
  }
}

Share.propTypes = {
  handleModalInfoHide: propTypes.func.isRequired
};

export default Share;
