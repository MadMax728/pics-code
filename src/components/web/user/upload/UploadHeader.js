import React, { Component } from "react";
import propTypes from "prop-types";

class UploadHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 modal-title">Upload image</div>
        <div className="col-sm-6 text-right">
          <button className="black_button" onClick={this.props.handleModalHide}>
            Cancel
          </button>
          <button className="black_button" onClick={this.props.handleContinue}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

UploadHeader.propTypes = {
  handleModalHide: propTypes.func.isRequired,
  handleContinue: propTypes.func.isRequired
};

export default UploadHeader;