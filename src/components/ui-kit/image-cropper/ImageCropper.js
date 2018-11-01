import React, { Component } from "react";
import PropTypes from "prop-types";
import EditProfileCrop from "./EditProfileCrop";
import CampaignAdCrop from "./CampaignAdCrop";

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
  isCircle: PropTypes.bool
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
    if (!this.props.isCircle) {
      this.handleSave();
    }
  };

  handlePositionChange = position => {
    this.setState({ position });
  };

  setEditorRef = editor => {
    if (editor) this.editor = editor;
  };

  handleNewImage = e => {
    this.setState({ image: e.target.files[0] }, () => {
      if (!this.props.isCircle) {
        this.handleSave();
      }
    });
  };

  handleDrop = acceptedFiles => {
    this.setState({ image: acceptedFiles[0] });
  };

  logCallback = e => {
    // eslint-disable-next-line
    // console.log("callback", e);
  };

  handleSave = () => {
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
    } else {
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
}

ImageCropper.propTypes = propTypes;

export default ImageCropper;
