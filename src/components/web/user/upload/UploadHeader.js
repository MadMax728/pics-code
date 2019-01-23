import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Translations } from "../../../../lib/translations";
import { InlineLoading } from "../../../ui-kit";

class UploadHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const isLoading = this.props.media.isLoading;
    return (
      <div className="row">
        {isLoading && <InlineLoading />}
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

const mapStateToProps = state => ({
  media: state.mediaData
});

UploadHeader.propTypes = {
  handleModalHide: PropTypes.func.isRequired,
  handleContinue: PropTypes.func.isRequired,
  media: PropTypes.any
};

export default connect(mapStateToProps)(UploadHeader);
