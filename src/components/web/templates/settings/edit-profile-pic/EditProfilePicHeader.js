import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../../../lib/translations";

class EditProfilePicHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 modal-title">
          {Translations.modal_header.edit_profile_image}
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

EditProfilePicHeader.propTypes = {
  handleModalHide: PropTypes.func.isRequired,
  handleContinue: PropTypes.func.isRequired
};

export default EditProfilePicHeader;
