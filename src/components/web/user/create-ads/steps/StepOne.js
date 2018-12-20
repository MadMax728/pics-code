import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import { ImageCropper, PlaceAutoCompleteLocation } from "../../../../ui-kit";
import { Translations } from "../../../../../lib/translations";
import { SelectCategory, HashTagUsername, SelectRadius, SelectCallToActions } from "../../../../../components/common";
import * as enumerations from "../../../../../lib/constants/enumerations";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      form,
      handleChangeField,
      handleEditImage,
      handleLocation,
      handleActualImg,
      handleScale,
      handleSelect,
      handleSetState,
      userInfo
    } = this.props;

    return (
      <div className="col-xs-12 no-padding">
        <div className="col-sm-6 upload-form">
          <div className="no-padding profile_image">
            <img
              src={userInfo? userInfo.profileUrl : images.image}
              alt="image1"
              className="img-circle img-responsive"
            />
          </div>
          <div className="user-title">
            <div className="normal_title">
              {form.title? form.title : Translations.create_ads.title_of_ads}
            </div>
            <div className="secondary_title">{userInfo? userInfo.username : ""}</div>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="title">{Translations.create_ads.add_title}</label>
              <input
                type="text"
                value={form.title? form.title : ""}
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
                value={form.location? form.location.address : ""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Radius">
                {Translations.create_ads.add_radius}
              </label>
              <SelectRadius
                value={form.radius? form.radius : ""}
                className=""
                handleSelect={handleSelect}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Category">
                {Translations.create_ads.add_category}
              </label>
              <SelectCategory
                value={form.category? form.category : ""}
                className=""
                handleSelect={handleSelect}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Description">
                {Translations.create_ads.add_description}
              </label>

              <HashTagUsername
                className="form-control"
                type="text"
                name="description"
                handleSetState={handleSetState}
                value={form.description? form.description : ""}
                isText={false}
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
                    id={enumerations.target_group.female_and_male}
                    name="targetGroup"
                    value={enumerations.target_group.female_and_male}
                    className="black_button"
                    defaultChecked={form.targetGroup === enumerations.target_group.female_and_male}
                  />
                  <label htmlFor={enumerations.target_group.female_and_male}>
                    {Translations.create_ads.male_female}
                  </label>
                </li>
                <li className="wid49" onChange={handleChangeField}>
                  <input
                    type="radio"
                    id="male"
                    name="targetGroup"
                    value="male"
                    className="black_button"
                    defaultChecked={form.targetGroup === enumerations.target_group.female}
                  />
                  <label htmlFor="male">{Translations.create_ads.male}</label>
                </li>
                <li className="wid49" onChange={handleChangeField}>
                  <input
                    type="radio"
                    id={enumerations.target_group.female}
                    value={enumerations.target_group.female}
                    name="targetGroup"
                    defaultChecked={form.targetGroup === enumerations.target_group.female}
                  />
                  <label htmlFor={enumerations.target_group.female}>
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
                <SelectCallToActions
                  value={form.callToAction? form.callToAction : ""}
                  className=""
                  handleSelect={handleSelect}
                />
            </div>
            <div className="form-group">
              <label htmlFor="Insert_link">
                {Translations.create_ads.insert_link}
              </label>
              <input
                type="text"
                value={form.insertLink? form.insertLink : ""}
                name="insertLink"
                onChange={handleChangeField}
              />
            </div>
          </form>
        </div>
        <div className="col-sm-6 no-padding right-side ads-right-section">
          {
            form.fileType && form.typeContent === enumerations.typeContent.image &&
            <ImageCropper
              image={form.image}
              handleEditImage={handleEditImage}
              isCircle={false}
              ref={this.imageCrop}
              handleActualImg={handleActualImg}
              handleScale={handleScale}
            />
          }
          {
            !form.fileType && form.video && form.typeContent === enumerations.typeContent.video &&
              <video controls>
                <track kind="captions" />
                <source src={form.video} type={form.file ? form.file.type : ""} />
              </video>
          }
        </div>
      </div>
    );
  }
}

StepOne.propTypes = {
  handleChangeField: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired,
  handleEditImage: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
  handleActualImg: PropTypes.func.isRequired,
  handleScale: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleSetState: PropTypes.func.isRequired,
  userInfo: PropTypes.any
};

export default StepOne;
