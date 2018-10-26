import React, { Component } from "react";
import { CustomBootstrapModal } from "../../../ui-kit";
import propTypes from "prop-types";
import {
  EditProfilePic,
  EditProfilePicHeader
} from "../../../web/user/settings/";

class EditProfileModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  handleContinue = () => {
    console.log("handlecontinue");
  };

  render() {
    const { handleModalInfoHide, modalInfoShow } = this.props;
    return (
      <CustomBootstrapModal
        modalClassName={"modal fade create-campaign-modal"}
        header
        modalHeaderContent={
          <EditProfilePicHeader
            handleModalHide={this.props.handleModalInfoHide}
            handleContinue={this.handleContinue}
          />
        }
        footer={false}
        modalShow={modalInfoShow}
        closeBtn={false}
        handleModalHide={handleModalInfoHide}
        modalBodyContent={<EditProfilePic />}
      />
    );
  }
}

EditProfileModal.propTypes = {
  handleModalInfoHide: propTypes.func,
  modalInfoShow: propTypes.bool
};

export default EditProfileModal;
