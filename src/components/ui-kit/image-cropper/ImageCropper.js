import React, { Component } from "react";
import PropTypes from "prop-types";
import EditProfileCrop from "./EditProfileCrop";
import CampaignAdCrop from "./CampaignAdCrop";
import EditProfilePic from "../../web/templates/settings/edit-profile-pic/EditProfilePic";

const propTypes = {
  handleNewImage: PropTypes.func,
  handleDrop: PropTypes.func,
  image: PropTypes.any,
  setEditorRef: PropTypes.any,
  scale: PropTypes.any,
  position: PropTypes.any,
  height: PropTypes.any,
  width: PropTypes.any,
  handlePositionChange: PropTypes.func,
  handleScale: PropTypes.func,
  borderRadius: PropTypes.any,
  allowZoomOut: PropTypes.bool,
  logCallback: PropTypes.any,
  handleEditImage: PropTypes.func,
  isCircle: PropTypes.bool,
  handleActualImg: PropTypes.any,
};

class ImageCropper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image,
      isCircle: this.props.isCircle,
      position: {
        x: 0.5,
        y: 0.5
      },
      allowZoomOut: true,
      borderRadius: 0,
      preview: null,
      scale: 1,
      width: 250,
      height: 250
    };
  }

  handleScale = e => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale }, () => {
      this.handleSave();
      this.props.handleScale(scale);
    });
  };

  handlePositionChange = position => {
    this.setState({ position }, () => {
      this.handleSave();
    });
  };

  setEditorRef = editor => {
    if (editor) this.editor = editor;
  };

  handleNewImage = e => {
    console.log("iamges upload", e.target.files[0]);
    this.props.handleActualImg(e.target.files[0]);
    this.setState({ image: e.target.files[0] }, () => {
      this.handleSave();
    });
  };

  handleDrop = acceptedFiles => {
    this.setState({ image: acceptedFiles[0] }, () => {
      this.handleSave();
    });
  };

  logCallback = e => {
    // eslint-disable-next-line
    // console.log("callback", e);
  };

  handleSave = () => {
    // todo fix
    const img = this.editor.getImageScaledToCanvas().toDataURL();
    this.setState({ preview: img });
    this.props.handleEditImage(img);
  };

  render() {
    const {
      image,
      scale,
      position,
      height,
      width,
      allowZoomOut,
      borderRadius,
      isCircle
    } = this.state;

    if (isCircle) {
      return (
        <EditProfileCrop
          handleNewImage={this.handleNewImage}
          handleDrop={this.handleDrop}
          image={image}
          setEditorRef={this.setEditorRef}
          scale={scale}
          position={position}
          height={height}
          width={width}
          handlePositionChange={this.handlePositionChange}
          handleScale={this.handleScale}
          borderRadius={borderRadius}
          allowZoomOut={allowZoomOut}
          logCallback={this.logCallback}
          isCircle={isCircle}
        />
      );
    }
    return (
      <CampaignAdCrop
        handleNewImage={this.handleNewImage}
        handleDrop={this.handleDrop}
        image={image}
        setEditorRef={this.setEditorRef}
        scale={scale}
        position={position}
        height={height}
        width={width}
        handlePositionChange={this.handlePositionChange}
        handleScale={this.handleScale}
        borderRadius={borderRadius}
        allowZoomOut={allowZoomOut}
        logCallback={this.logCallback}
        isCircle={isCircle}
      />
    );
  }
}

ImageCropper.propTypes = propTypes;

export default ImageCropper;
