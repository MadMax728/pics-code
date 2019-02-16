import React from "react";
import PropTypes from "prop-types";

const FileUpload = ({
  handleUpload
}) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 ">
      <div className="upload-format">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="upload-pic upload-div">
            <h4>upload image</h4>
            <div className="upload-btn-wrapper">
              <button className="btn"><i className="fa fa-file-image-o" aria-hidden="true"></i></button>
              <input type="file" name="myfile" onChange={handleUpload} />
            </div>

          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="upload-video upload-div">
            <h4>upload video</h4>
            <div className="upload-btn-wrapper">
              <button className="btn"><i className="fa fa-video-camera" aria-hidden="true"></i></button>
              <input type="file" name="myfile" onChange={handleUpload} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FileUpload.propTypes = {
  handleUpload: PropTypes.func.isRequired
};

export default FileUpload;
