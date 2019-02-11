import React, { Component } from "react";
// https://www.npmjs.com/package/react-avatar-editor used for image crop
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";
import { Translations } from "../../../lib/translations";

class EditProfileCrop extends Component { 
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
      // this.handleSave();
      this.props.handleScale(scale);
    });
  };

  handlePositionChange = position => {
    this.setState({ position }, () => {
      // this.handleSave();
    });
  };

  setEditorRef = editor => {
    if (editor) this.editor = editor;
  };

  handleNewImage = e => {
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
    if (this.editor && this.editor.getImageScaledToCanvas()) {
      const img = this.editor.getImageScaledToCanvas().toDataURL();
      this.setState({ preview: img });
      this.props.handleEditImage(img);
    }
  };

  render() {
    const {
      image,
      isCircle,
    } = this.props;
    const { width, height, scale, position, borderRadius, allowZoomOut } = this.state;
    return (
      <div>
        {image !== null && image !== undefined ? (
          <Dropzone
            onDrop={this.handleDrop}
            disableClick
            multiple={false}
            className="col-xs-12 uploaded-profile-pic"
            style={{
              width,
              height,
              marginBottom: "35px"
            }}
          >
            <div className="col-xs-12 textCenter ">
              <AvatarEditor
                ref={this.setEditorRef}
                scale={parseFloat(scale)}
                width={width}
                height={height}
                position={position}
                onPositionChange={this.handlePositionChange}
                borderRadius={
                  isCircle ? 100 / borderRadius : width / (100 / borderRadius)
                }
                onLoadFailure={this.logCallback("onLoadFailed")}
                onLoadSuccess={this.logCallback("onLoadSuccess")}
                onImageReady={this.logCallback("onImageReady")}
                image={image}
                crossOrigin={`anonymous`}
                className="editor-canvas"
              />
            </div>
          </Dropzone>
        ) : (
          <div className="edit-profile-pic">
            <div className="box">
              <input
                type="file"
                name="newImage"
                id="file-2"
                className="inputfile inputfile-2"
                data-multiple-caption="{count} files selected"
                multiple=""
                onChange={this.handleNewImage}
              />
              <label htmlFor="file-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                >
                  <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
                </svg>
                <br /> <span>{Translations.upload_title_image}</span>
              </label>
            </div>
          </div>
        )}
        {(image !== null && image !== undefined) &&
        <div className="range-wrapr col-xs-12">
          <img
            src={images.crop_pic}
            height="19"
            width="19"
            crossOrigin={`anonymous`}
            className="min-profile-pic range-slider-pic"
            alt={"crop-1"}
          />
          <div
            className="runnable"
            style={{
              width:
                scale === 0.1
                  ? `0px`
                  : scale === 1
                    ? `${scale * 121.5}px`
                    : scale < 1
                      ? `${scale * 120.5}px`
                      : `${scale * 128}px`
            }}
          />
            <input
              name="scale"
              type="range"
              onChange={this.handleScale}
              min={allowZoomOut ? "0.1" : "1"}
              max="2"
              step="0.01"
              defaultValue="1"
              disabled={!(image !== null && image !== undefined)}
            />
          <img
            src={images.crop_pic}
            height="27"
            alt={"crop-2"}
            width="27"
            crossOrigin={`anonymous`}
            className="max-profile-pic range-slider-pic"
          />
           {/* <input
            type="file"
            className="img-upload"
            name="newImage"
            id="file-2"
            data-multiple-caption="{count} files selected"
            multiple=""
            onChange={handleNewImage}
          />
          <img src={images.plus_button} alt={"plus_button"} /> */}
        </div>
        }
      </div>
    );
  }
}

const propTypes = {
  image: PropTypes.any,
  isCircle: PropTypes.bool,
  handleScale: PropTypes.func,
  handleEditImage: PropTypes.func,
  handleActualImg: PropTypes.func,
  ref: PropTypes.any
};

EditProfileCrop.propTypes = propTypes;

export default EditProfileCrop;
