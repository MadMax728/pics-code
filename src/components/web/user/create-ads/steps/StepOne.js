import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import propTypes from "prop-types";
import { ImageCropper } from "../../../../ui-kit";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  uploadPhoto = e => {
    this.props.uploadFile(e, "photo");
  };

  render() {
    const { form, handleChangeField, uploadFile, handleEditImage } = this.props;

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
              <label htmlFor="title">Add title</label>
              <input
                type="text"
                value={this.props.form.title}
                name="title"
                onChange={handleChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Location">Add Location</label>
              <input
                type="text"
                name="location"
                value={this.props.form.location}
                onChange={handleChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Radius">Add Radius</label>
              <select name="radius" onBlur={handleChangeField}>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>30</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Category">Add Category</label>
              <select onBlur={handleChangeField} name="category">
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
                <option>Category 4</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Description">Add Description</label>
              <textarea
                className="form-control"
                value={this.props.form.description}
                onChange={handleChangeField}
                name="description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="target">Add target group</label>
              <ul className="options">
                <li
                  className="full-width-input-wrapper wid49"
                  onChange={handleChangeField}
                >
                  <input
                    type="radio"
                    id="male-female"
                    name="target_group"
                    value="male-female"
                    className="black_button"
                    defaultChecked={form.target_group === "male-female"}
                  />
                  <label htmlFor="male-female">Male & Female</label>
                </li>
                <li className="wid49" onChange={handleChangeField}>
                  <input
                    type="radio"
                    id="male"
                    name="target_group"
                    value="male"
                    className="black_button"
                    defaultChecked={form.target_group === "male"}
                  />
                  <label htmlFor="male">Male</label>
                </li>
                <li className="wid49" onChange={handleChangeField}>
                  <input
                    type="radio"
                    id="female"
                    value="female"
                    name="target_group"
                    defaultChecked={form.target_group === "female"}
                  />
                  <label htmlFor="female">Female</label>
                </li>
              </ul>
            </div>
            <div className="subtitle">Define details</div>
            <div className="form-group">
              <label htmlFor="call">Add call to action button</label>
              <select name="call_to_action_button" onBlur={handleChangeField}>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Insert_link">Insert link</label>
              <input
                type="text"
                insert_link
                value={this.props.form.insert_link}
                name="insert_link"
                onChange={handleChangeField}
              />
            </div>
          </form>
        </div>
        <div className="col-sm-6 no-padding right-side ads-right-section">
          <ImageCropper
            image={form.image}
            handleEditImage={handleEditImage}
            isCircle={false}
            ref={this.imageCrop}
          />
          <div className="add-wrapper">
            <img src={images.plus_button} alt={"plus_button"} />
          </div>
        </div>
      </div>
    );
  }
}

StepOne.propTypes = {
  handleChangeField: propTypes.func.isRequired,
  form: propTypes.any.isRequired,
  uploadFile: propTypes.func.isRequired,
  handleEditImage: propTypes.func.isRequired
};

export default StepOne;
