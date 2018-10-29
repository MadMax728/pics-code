import React, { Component } from "react";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
import Preview from "./Preview";
import propTypes from "prop-types";

class EditProfilePic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      handleNewImage,
      image,
      handleDrop,
      scale,
      width,
      height,
      position,
      allowZoomOut,
      setEditorRef,
      handlePositionChange,
      handleScale,
      borderRadius,
      preview,
      logCallback,
      handleSave
    } = this.props;
    console.log(image);

    return (
      <div className="col-xs-12 upload-profile-wrapr">
        {image !== null ? (
          <Dropzone
            onDrop={handleDrop}
            disableClick
            multiple={false}
            style={{
              width: width,
              height: height,
              marginBottom: "35px"
            }}
          >
            <div className="col-xs-12 margin-top-46 textCenter">
              <AvatarEditor
                ref={setEditorRef}
                scale={parseFloat(scale)}
                width={width}
                height={height}
                position={position}
                onPositionChange={handlePositionChange}
                borderRadius={100 / borderRadius}
                onLoadFailure={logCallback("onLoadFailed")}
                onLoadSuccess={logCallback("onLoadSuccess")}
                onImageReady={logCallback("onImageReady")}
                image={image}
                className="editor-canvas"
              />
            </div>
          </Dropzone>
        ) : (
          <div className="edit-profile-pic ">
            <div className="box">
              <input
                type="file"
                name="newImage"
                id="file-2"
                className="inputfile inputfile-2"
                data-multiple-caption="{count} files selected"
                multiple=""
                onChange={handleNewImage}
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
                <br /> <span>Upload title image</span>
              </label>
            </div>
          </div>
        )}
        <br />
        Zoom:
        <input
          name="scale"
          type="range"
          onChange={handleScale}
          min={allowZoomOut ? "0.1" : "1"}
          max="2"
          step="0.01"
          defaultValue="1"
        />
      </div>
    );
  }
}

EditProfilePic.propTypes = {
  handleNewImage: propTypes.func,
  handleDrop: propTypes.func,
  image: propTypes.any,
  setEditorRef: propTypes.any,
  scale: propTypes.any,
  position: propTypes.any,
  height: propTypes.any,
  width: propTypes.any,
  handlePositionChange: propTypes.func,
  handleScale: propTypes.func,
  borderRadius: propTypes.any,
  preview: propTypes.any,
  allowZoomOut: propTypes.bool,
  logCallback: propTypes.any,
  handleSave: propTypes.any,
  handleEditor: propTypes.any
};

export default EditProfilePic;
