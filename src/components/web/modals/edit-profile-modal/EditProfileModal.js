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
      image: this.props.image,
      position: {
        x: 0.5,
        y: 0.5
      },
      allowZoomOut: false,
      borderRadius: 0,
      preview: null,
      scale: 1,
      width: 250,
      height: 250
    };
  }

  handleScale = e => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  handlePositionChange = position => {
    this.setState({ position });
  };

  setEditorRef = editor => {
    if (editor) this.editor = editor;
  };

  handleContinue = () => {
    this.handleSave();
  };

  handleNewImage = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleDrop = acceptedFiles => {
    this.setState({ image: acceptedFiles[0] });
  };

  logCallback = e => {
    // eslint-disable-next-line
    console.log("callback", e);
  };

  handleSave = () => {
    const img = this.editor.getImageScaledToCanvas().toDataURL();
    this.setState({ preview: img });
    this.props.handleEditImage(img);
    this.props.handleModalInfoHide();
  };

  render() {
    const { handleModalInfoHide, modalInfoShow } = this.props;
    const {
      image,
      scale,
      height,
      width,
      position,
      allowZoomOut,
      preview,
      borderRadius
    } = this.state;
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
          <EditProfilePic
            handleNewImage={this.handleNewImage}
            image={image}
            handleDrop={this.handleDrop}
            scale={scale}
            handlePositionChange={this.handlePositionChange}
            position={position}
            height={height}
            width={width}
            handleScale={this.handleScale}
            allowZoomOut={allowZoomOut}
            borderRadius={borderRadius}
            preview={preview}
            logCallback={this.logCallback}
            handleSave={this.handleSave}
            setEditorRef={this.setEditorRef}
          />
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
