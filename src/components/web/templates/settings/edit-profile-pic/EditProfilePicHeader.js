import React, { Component } from "react";
import PropTypes from "prop-types";

import { Translations } from "../../../../../lib/translations";
import { InlineLoading } from "../../../../ui-kit";

class EditProfilePicHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const {isLoading} = this.props;
    return (
      <div className="row">
        {isLoading && <InlineLoading />}
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

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
}

EditProfilePicHeader.propTypes = {
  handleModalHide: PropTypes.func.isRequired,
  handleContinue: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default EditProfilePicHeader;
