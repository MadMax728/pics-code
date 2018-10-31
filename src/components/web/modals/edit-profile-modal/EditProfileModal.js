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

    this.state = {
      image: null
    };
  }

  componentDidMount() {
    this.setState({ image: this.props.image });
  }

  handleContinue = () => {
    this.props.handleModalInfoHide();
  };

  render() {
    const { handleModalInfoHide, modalInfoShow, handleEditImage } = this.props;
    const { image } = this.state;
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
        modalBodyContent={
          <EditProfilePic image={image} handleEditImage={handleEditImage} />
        }
      />
    );
  }
}

EditProfileModal.propTypes = {
  handleModalInfoHide: propTypes.func,
  modalInfoShow: propTypes.bool,
  handleEditImage: propTypes.func,
  image: propTypes.any
};

export default EditProfileModal;
