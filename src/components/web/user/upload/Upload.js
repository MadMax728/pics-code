import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";
import PropTypes from "prop-types";
import { HashTagUsername, SelectCategory } from "../../../common";
import { PlaceAutoCompleteLocation } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInProgress: false,
    };
    console.log(this.props);
  }

  handleChangeField = event => {
    this.props.handleChangeField(event);
  };

  handleUpload = e => {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file.type.includes("video")) {
      const currentThis = this;
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        currentThis.props.handleUpload(reader.result, file, false);
      };
    }

    if (file.type.includes("image")) {
      const currentThis = this;
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        currentThis.props.handleUpload(reader.result, file, true);
      };
    }
  };

  progressHandler = event => {
    // var percent = (event.loaded / event.total) * 100;
    console.log(event.loaded);
  };

  render() {
    const { form, handleSetState, handleLocation, handleSelect } = this.props;
    const { isInProgress } = this.state;

    return (
      <div className="col-xs-12 no-padding">
        <div className="col-sm-6 upload-form height100">
          <div className="no-padding profile_image">
            <img
              src={images.image}
              alt="image1"
              className="img-circle img-responsive"
            />
          </div>
          <div className="user-title">
            <div className="normal_title">
              {Translations.upload_modal.title_of_upload}
            </div>
            <div className="secondary_title">User name</div>
          </div>
          <form className="col-xs-12 no-padding">
            <div className="form-group">
              <label htmlFor="Location">
                {Translations.upload_modal.add_location}
              </label>
              <PlaceAutoCompleteLocation
                className=""
                handleLocation={handleLocation}
                value={form.address}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Category">
                {Translations.upload_modal.add_category}
              </label>
              <SelectCategory
                value={form.add_category ? form.add_category : ""}
                className=""
                handleSelect={handleSelect}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">
                {Translations.upload_modal.add_description}
              </label>
              <HashTagUsername
                className="form-control"
                type="text"
                name="add_description"
                handleSetState={handleSetState}
                value={form.add_description}
                isText={false}
              />
            </div>
            <div className="form-group no-margin">
              <label htmlFor="description" className="dispInline">
                {Translations.upload_modal.advertisement}
              </label>
              <input
                type="checkbox"
                alt="isAdvertisement"
                className="check"
                name="is_advertise_label"
                value={form.is_advertise_label}
                onChange={this.handleChangeField}
              />
              {/* <div className="check-wrapr">
                <img src={images.check} alt="share" className="check" />
              </div> */}
            </div>
          </form>
        </div>
        <div className="col-sm-6 no-padding">
          {!form.image && !form.video ? (
            <div className="box">
              <input
                type="file"
                name="newImage"
                id="file-2"
                className="inputfile inputfile-2"
                data-multiple-caption="{count} files selected"
                multiple=""
                onChange={this.handleUpload}
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
                <br /> <span>{Translations.upload_modal.upload_file}</span>
              </label>
            </div>
          ) : form.filetype ? (
            <img src={form.image} alt="upload" className="widthHeightAuto" />
          ) : (
            <video controls>
              <track kind="captions" />
              <source src={form.video} type={form.file.type} />
            </video>
          )}
          {isInProgress && (
            <div className="image-wrapper">
              <div className="progress-bar-wrapper">
                <div className="progress blue">
                  <span className="progress-left">
                    <span className="progress-bar" />
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar" />
                  </span>
                  <div className="progress-value">90%</div>
                </div>
              </div>
            </div>
          )}

          <div className="add-wrapper upload-wrapr heightAuto">
            <input
              type="file"
              className="img-upload"
              name="newImage"
              id="file-2"
              data-multiple-caption="{count} files selected"
              multiple=""
              onChange={this.handleUpload}
            />
            <img src={images.plus_button} alt={"plus_button"} />
          </div>
        </div>
      </div>
    );
  }
}

Upload.propTypes = {
  handleChangeField: PropTypes.func.isRequired,
  handleSetState: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired,
  handleSelect: PropTypes.func.isRequired
};

export default Upload;
