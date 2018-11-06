import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";
import propTypes from "prop-types";
import { HashTagUsername } from "../../../common";
import { PlaceAutoCompleteLocation } from "../../../ui-kit";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInProgress: false,
      form: {
        image: null
      }
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("progress", function(e) {
      if (e.lengthComputable) {
        let percentComplete = e.loaded / e.total;
        console.log(percentComplete);
      }
    });
  }

  progressHandler = e => {
    console.log("ghjdfjkhk");
  };

  handleChangeField = event => {
    this.props.handleChangeField(event);
  };

  handleUpload = e => {
    console.log(e.target);

    const reader = new FileReader();
    const file = e.target.files[0];

    console.log(e);

    console.log(file);

    const currentThis = this;
    reader.readAsDataURL(file);
    reader.onloadend = function() {
      currentThis.props.handleUpload(reader.result);
    };
  };

  render() {
    const { form, handleSetState, handleLocation } = this.props;
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
            <div className="normal_title">Title of campaigns</div>
            <div className="secondary_title">User name</div>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="Location">Add Location</label>
              <PlaceAutoCompleteLocation
                className=""
                handleLocation={handleLocation}
                value={this.props.form.address}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Category">Add Category</label>
              <select name="add_category" onBlur={this.handleChangeField}>
                <option value={"category_1"}>Category 1</option>
                <option value={"category_2"}>Category 2</option>
                <option value={"category_3"}>Category 3</option>
                <option value={"category_4"}>Category 4</option>
              </select>
            </div>
            <div className="form-group no-margin">
              <label htmlFor="description">Add description</label>
              <HashTagUsername
                className="form-control"
                type="text"
                name="add_decription"
                handleSetState={handleSetState}
                value={form.add_decription}
              />
            </div>
          </form>
        </div>
        <div className="col-sm-6 no-padding">
          {!form.image ? (
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
                <br /> <span>Upload title image</span>
              </label>
            </div>
          ) : (
            <img src={form.image} alt="upload" className="widthHeightAuto" />
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

          <div className="add-wrapper heightAuto">
            <img src={images.plus_button} alt={"plus_button"} />
          </div>
        </div>
      </div>
    );
  }
}

Upload.propTypes = {
  handleChangeField: propTypes.func.isRequired,
  handleSetState: propTypes.func.isRequired,
  handleLocation: propTypes.func.isRequired,
  form: propTypes.any.isRequired,
  handleUpload: propTypes.func.isRequired
};

export default Upload;
