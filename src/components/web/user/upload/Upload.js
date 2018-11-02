import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";
import propTypes from "prop-types";
import { HashTagUsername } from "../../../common";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChangeField = event => {
    this.props.handleChangeField(event);
  };

  render() {
    const { form, handleSetState } = this.props;
    return (
      <div className="modal-body">
        <div className="col-sm-6 upload-form">
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
              <input
                type="text"
                name="add_location"
                onChange={this.handleChangeField}
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
          <div className="add-wrapper">
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
  form: propTypes.any.isRequired
};

export default Upload;
