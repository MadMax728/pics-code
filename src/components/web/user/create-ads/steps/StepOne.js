import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import {
  ImageCropper,
  PlaceAutoCompleteLocation,
  UserImageItem
} from "../../../../ui-kit";
import { Translations } from "../../../../../lib/translations";
import {
  SelectCategory,
  HashTagUsername,
  SelectRadius,
  SelectCallToActions
} from "../../../../../components/common";
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
    const profileImage = userInfo ? userInfo.profileUrl : images.image;
    return (
      <div className="col-xs-12 no-padding">
        <div className="col-sm-12 upload-form">
          <div className="user-title">
            <div className="normal_title">
              {Translations.create_ads.title_of_ads}
            </div>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="Insert_link">
                {Translations.create_ads.add_title_image}
              </label>
              <p>
                This is example text. This is example text. This is example text
              </p>
              {form.fileType &&
                form.typeContent === enumerations.typeContent.image && (
                  <ImageCropper
                    image={form.image}
                    handleEditImage={handleEditImage}
                    isCircle={false}
                    ref={this.imageCrop}
                    handleActualImg={handleActualImg}
                    handleScale={handleScale}
                  />
                )}
              {!form.fileType &&
                form.video &&
                form.typeContent === enumerations.typeContent.video && (
                  <video controls>
                    <track kind="captions" />
                    <source
                      src={form.video}
                      type={form.file ? form.file.type : ""}
                    />
                  </video>
                )}
            </div>
            <div className="form-group">
              <label htmlFor="title">{Translations.create_ads.add_title}</label>
              <p>
                This is example text. This is example text. This is example text
              </p>
              <input
                type="text"
                value={form.title ? form.title : ""}
                name="title"
                onChange={handleChangeField}
              />
              {form.title.length === 0 && form.error && (
                <span className="error-msg highlight">
                  {Translations.error.create_modal.title}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="Location">
                {Translations.create_ads.add_location}
              </label>
              <p>
                This is example text. This is example text. This is example text
              </p>
              <PlaceAutoCompleteLocation
                className=""
                handleLocation={handleLocation}
                value={form.location ? form.location.address : ""}
              />
              {form.location.address.length === 0 &&
                form.location.latitude.length === 0 &&
                form.location.longitude.length === 0 &&
                form.error && (
                  <span className="error-msg highlight">
                    {Translations.error.create_modal.location}
                  </span>
                )}
            </div>
            <div className="form-group">
              <label htmlFor="Radius">
                {Translations.create_ads.add_radius}
              </label>
              <p>
                This is example text. This is example text. This is example text
              </p>
              <SelectRadius
                value={form.radius ? form.radius : ""}
                className=""
                handleSelect={handleSelect}
              />
              {form.radius.length === 0 && form.error && (
                <span className="error-msg highlight">
                  {Translations.error.create_modal.radius}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="Category">
                {Translations.create_ads.add_category}
              </label>
              <p>
                This is example text. This is example text. This is example text
              </p>
              <SelectCategory
                value={form.category ? form.category : ""}
                className=""
                handleSelect={handleSelect}
              />
              {form.category.length === 0 && form.error && (
                <span className="error-msg highlight">
                  {Translations.error.create_modal.category}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="target">
                {Translations.create_ads.add_target_group}
              </label>
              <p>
                This is example text. This is example text. This is example text
              </p>
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
                    defaultChecked={
                      form.targetGroup ===
                      enumerations.target_group.female_and_male
                    }
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
                    defaultChecked={
                      form.targetGroup === enumerations.target_group.male
                    }
                  />
                  <label htmlFor="male">{Translations.create_ads.male}</label>
                </li>
                <li className="wid49" onChange={handleChangeField}>
                  <input
                    type="radio"
                    id={enumerations.target_group.female}
                    value={enumerations.target_group.female}
                    name="targetGroup"
                    defaultChecked={
                      form.targetGroup === enumerations.target_group.female
                    }
                  />
                  <label htmlFor={enumerations.target_group.female}>
                    {Translations.create_ads.female}
                  </label>
                </li>
              </ul>
            </div>
            <div className="form-group">
              <label htmlFor="Description">
                {Translations.create_ads.add_description}
              </label>
              <p>
                This is example text. This is example text. This is example text
              </p>
              <HashTagUsername
                className="form-control"
                type="text"
                name="description"
                handleSetState={handleSetState}
                value={form.description ? form.description : ""}
                isText={false}
              />
              {form.description.length === 0 && form.error && (
                <span className="error-msg highlight">
                  {Translations.error.create_modal.description}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="call">
                {Translations.create_ads.action_button}
              </label>
              <p>
                This is example text. This is example text. This is example text
              </p>
              <SelectCallToActions
                value={form.callToAction ? form.callToAction : ""}
                className=""
                handleSelect={handleSelect}
              />
              {form.callToAction.length === 0 && form.error && (
                <span className="error-msg highlight">
                  {Translations.error.create_modal.callToAction}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="Insert_link">
                {Translations.create_ads.insert_link}
              </label>
              <p>
                This is example text. This is example text. This is example text
              </p>
              <input
                type="text"
                value={form.insertLink ? form.insertLink : ""}
                name="insertLink"
                onChange={handleChangeField}
              />
              {form.insertLink.length === 0 && form.error && (
                <span className="error-msg highlight">
                  {Translations.error.create_modal.insertLink}
                </span>
              )}
            </div>
          </form>
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
