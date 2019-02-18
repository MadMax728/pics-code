import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";

const FileUpload = ({ handleUpload }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 ">
      <div className="upload-format">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="upload-pic upload-div">
            <h4>{Translations.upload_modal.upload_image}</h4>
            <div className="upload-btn-wrapper">
              <Button
                className="btn"
                type="button"
                text={<i className="fa fa-file-image-o" aria-hidden="true" />}
              />
              <input type="file" name="myfile" onChange={handleUpload} />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="upload-video upload-div">
            <h4>{Translations.upload_modal.upload_video}</h4>
            <div className="upload-btn-wrapper">
              <Button
                className="btn"
                type="button"
                text={<i className="fa fa-video-camera" aria-hidden="true" />}
              />
              <input type="file" name="myfile" onChange={handleUpload} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FileUpload.propTypes = {
  handleUpload: PropTypes.func.isRequired
};

export default FileUpload;
