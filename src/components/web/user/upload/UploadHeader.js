import React, { Component } from "react";
import propTypes from "prop-types";
import { Translations } from "../../../../lib/translations";

class UploadHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 modal-title">
          {Translations.modal_header.upload_image}
        </div>
        <div className="col-sm-6 text-right">
          <button className="black_button" onClick={this.props.handleModalHide}>
            {Translations.modal_header.cancle}
          </button>
          <button className="black_button" onClick={this.props.handleContinue}>
            {Translations.modal_header.continue}
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
