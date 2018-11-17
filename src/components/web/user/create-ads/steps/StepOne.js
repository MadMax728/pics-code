import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import propTypes from "prop-types";
import { ImageCropper, PlaceAutoCompleteLocation } from "../../../../ui-kit";
import { Translations } from "../../../../../lib/translations";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  uploadPhoto = e => {
    this.props.uploadFile(e, "photo");
  };

  render() {
    const {
      form,
      handleChangeField,
      uploadFile,
      handleEditImage,
      handleLocation,
      handleActualImg,
      handleScale
    } = this.props;

    return (
      <div className="col-xs-12 no-padding">
        <div className="col-sm-6 upload-form">
          <div className="no-padding profile_image">
            <img
              src={images.image}
              alt="image1"
              className="img-circle img-responsive"
            />
          </div>
          <div className="user-title">
            <div className="normal_title">
              {Translations.create_ads.title_of_ads}
            </div>
            <div className="secondary_title">User name</div>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="title">{Translations.create_ads.add_title}</label>
              <input
                type="text"
                value={this.props.form.title}
                name="title"
                onChange={handleChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Location">
                {Translations.create_ads.add_location}
              </label>
              <PlaceAutoCompleteLocation
                className=""
                handleLocation={handleLocation}
                value={this.props.form.address}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Radius">
                {Translations.create_ads.add_radius}
              </label>
              <select
                name="radius"
                value={this.props.form.radius}
                onChange={handleChangeField}
                onBlur={handleChangeField}
              >
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>30</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Category">
                {Translations.create_ads.add_category}
              </label>
              <select
                onChange={handleChangeField}
                value={this.props.form.category}
                onBlur={handleChangeField}
                name="category"
              >
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
                <option>Category 4</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Description">
                {Translations.create_ads.add_description}
              </label>
              <textarea
                className="form-control"
                value={this.props.form.description}
                onChange={handleChangeField}
                name="description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="target">
                {Translations.create_ads.add_target_group}
              </label>
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
                  <label htmlFor="male-female">
                    {Translations.create_ads.male_female}
                  </label>
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
                  <label htmlFor="male">{Translations.create_ads.male}</label>
                </li>
                <li className="wid49" onChange={handleChangeField}>
                  <input
                    type="radio"
                    id="female"
                    value="female"
                    name="target_group"
                    defaultChecked={form.target_group === "female"}
                  />
                  <label htmlFor="female">
                    {Translations.create_ads.female}
                  </label>
                </li>
              </ul>
            </div>
            <div className="subtitle">
              {Translations.create_ads.define_details}
            </div>
            <div className="form-group">
              <label htmlFor="call">
                {Translations.create_ads.action_button}
              </label>
              <select
                name="call_to_action_button"
                onChange={handleChangeField}
                onBlur={handleChangeField}
              >
                <option>{Translations.create_ads.yes}</option>
                <option>{Translations.create_ads.no}</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Insert_link">
                {Translations.create_ads.insert_link}
              </label>
              <input
                type="text"
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
            handleActualImg={handleActualImg}
            handleScale={handleScale}
          />
        </div>
      </div>
    );
  }
}

StepOne.propTypes = {
  handleChangeField: propTypes.func.isRequired,
  form: propTypes.any.isRequired,
  uploadFile: propTypes.func.isRequired,
  handleEditImage: propTypes.func.isRequired,
  handleLocation: propTypes.func.isRequired,
  handleActualImg: propTypes.func,
  handleScale: propTypes.func
};

export default StepOne;
