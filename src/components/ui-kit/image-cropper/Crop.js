import React from "react";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";

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
  logCallback: PropTypes.any
};

const Crop = ({
  handleNewImage,
  handleDrop,
  image,
  setEditorRef,
  scale,
  position,
  height,
  width,
  handlePositionChange,
  handleScale,
  borderRadius,
  allowZoomOut,
  logCallback
}) => {
  return (
    <div>
      {image !== null ? (
        <Dropzone
          onDrop={handleDrop}
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
      <div className="range-wrapr col-xs-12">
        <img
          src={images.crop_pic}
          height="19"
          width="19"
          className="min-profile-pic range-slider-pic"
          alt={"crop-1"}
        />
        <div className="runnable" />
        <input
          name="scale"
          type="range"
          onChange={handleScale}
          min={allowZoomOut ? "0.1" : "1"}
          max="2"
          step="0.01"
          defaultValue="1"
        />
        <img
          src={images.crop_pic}
          height="27"
          alt={"crop-2"}
          width="27"
          className="max-profile-pic range-slider-pic"
        />
      </div>
    </div>
  );
};

Crop.propTypes = propTypes;

export default Crop;
