import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Translations } from "../../../../lib/translations";
import { InlineLoading, Button } from "../../../ui-kit";

class UploadHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  handleModalHide = () => {
    this.props.handleModalHide();
    this.props.handleResetForm();
  };

  render() {
    const isLoading = this.props.media.isLoading;
    const { handleContinue } = this.props;
    return (
      <div className="row">
        {isLoading && <InlineLoading />}
        <div className="col-sm-6 modal-title">
          {/* {Translations.modal_header.upload_image} */}
        </div>
        <div className="col-sm-offest-6 col-sm-6 text-right">
          <Button className="black_button" onClick={this.handleModalHide} text={Translations.modal_header.cancle} />
          <Button className="black_button" onClick={handleContinue} text={Translations.modal_header.continue} />
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
  handleResetForm: PropTypes.func.isRequired,
  media: PropTypes.any
};

export default connect(mapStateToProps)(UploadHeader);
