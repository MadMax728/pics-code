import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
              <input type="text" name="location" />
            </div>
            <div className="form-group">
              <label htmlFor="Category">Add Category</label>
              <select>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
                <option>Category 4</option>
              </select>
            </div>
            <div className="form-group no-margin">
              <label htmlFor="description">Add description</label>
              <textarea className="form-control" />
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

export default Upload;
