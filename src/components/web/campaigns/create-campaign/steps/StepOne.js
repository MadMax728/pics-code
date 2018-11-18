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
      handleChangeField,
      form,
      uploadFile,
      isFor,
      handleEditImage,
      handleLocation,
      handleScale,
      handleActualImg
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
              {Translations.create_campaigns.title_of_campaigns}
            </div>
            <div className="secondary_title">User name</div>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="title">
                {Translations.create_campaigns.add_title}
              </label>
              <input
                type="text"
                value={this.props.form.title ? this.props.form.title : ""}
                name="title"
                onChange={handleChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Location">
                {Translations.create_campaigns.add_loaction}
                Add Location
              </label>
              <PlaceAutoCompleteLocation
                className=""
                handleLocation={handleLocation}
                value={this.props.form.address}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Category">
                {Translations.create_campaigns.add_category}
              </label>
              <select
                name="category"
                value={this.props.form.category}
                onChange={handleChangeField}
                onBlur={handleChangeField}
              >
                <option>{Translations.create_campaigns.select_category}</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
                <option>Category 4</option>
              </select>
            </div>
            <div className="subtitle">
              {Translations.create_campaigns.application_criteria}
            </div>
            {isFor && (
              <div>
                <div className="form-group">
                  <label htmlFor="Procedure">
                    {Translations.create_campaigns.procedure}
                  </label>
                  <ul className="options">
                    <li onChange={handleChangeField} className="wid49">
                      <input
                        type="radio"
                        id="public"
                        name="procedure"
                        className="black_button"
                        value="public"
                        defaultChecked={form.procedure === "public"}
                      />
                      <label htmlFor="public">
                        {Translations.create_campaigns.public}
                      </label>
                    </li>
                    <li onChange={handleChangeField} className="wid49">
                      <input
                        type="radio"
                        id="anonymous"
                        name="procedure"
                        value="anonymous"
                        defaultChecked={form.procedure === "anonymous"}
                      />
                      <label htmlFor="anonymous">
                        {Translations.create_campaigns.anonymous}
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="form-group">
                  <label htmlFor="Type">
                    {Translations.create_campaigns.type}
                  </label>
                  <ul className="options">
                    <li onChange={handleChangeField} className="wid49">
                      <input
                        type="radio"
                        id="video"
                        name="type"
                        className="black_button"
                        value="video"
                        defaultChecked={form.type === "video"}
                      />
                      <label htmlFor="video">
                        {Translations.create_campaigns.video}
                      </label>
                    </li>
                    <li onChange={handleChangeField} className="wid49">
                      <input
                        type="radio"
                        id="image"
                        name="type"
                        value="image"
                        defaultChecked={form.type === "image"}
                      />
                      <label htmlFor="image">
                        {Translations.create_campaigns.image}
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="Target_group">
                {Translations.create_campaigns.target_group}
              </label>
              <ul className="options target-options">
                <li onChange={handleChangeField} className="wid49">
                  <input
                    type="radio"
                    id="company"
                    name="target_group"
                    className="black_button"
                    value="company"
                    defaultChecked={form.target_group === "company"}
                  />
                  <label htmlFor="company">
                    {Translations.create_campaigns.company}
                  </label>
                </li>
                <li onChange={handleChangeField} className="wid49">
                  <input
                    type="radio"
                    id="female-male"
                    value="female-male"
                    name="target_group"
                    defaultChecked={form.target_group === "female-male"}
                  />
                  <label htmlFor="femalemale">
                    {Translations.create_campaigns.male_female}
                  </label>
                </li>
                <li onChange={handleChangeField} className="wid49">
                  <input
                    type="radio"
                    id="female"
                    name="target_group"
                    value="female"
                    defaultChecked={form.target_group === "female"}
                  />
                  <label htmlFor="female">
                    {Translations.create_campaigns.female}
                  </label>
                </li>
                <li onChange={handleChangeField} className="wid49">
                  <input
                    type="radio"
                    id="male"
                    name="target_group"
                    value="male"
                    defaultChecked={form.target_group === "male"}
                  />
                  <label htmlFor="male">
                    {Translations.create_campaigns.male}
                  </label>
                </li>
              </ul>
            </div>
            <div className="subtitle">
              {Translations.create_campaigns.details_of_campaigns}
            </div>
            <div className="form-group">
              <label htmlFor="Offer">
                {Translations.create_campaigns.offer}
              </label>
              <select
                name="offer"
                value={this.props.form.offer}
                onChange={handleChangeField}
                onBlur={handleChangeField}
              >
                <option>{Translations.create_campaigns.select_offer}</option>
                <option>Offer 1</option>
                <option>Offer 2</option>
                <option>Offer 3</option>
                <option>Offer 4</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="offer_tag">
                {Translations.create_campaigns.offer_tag}
              </label>
              <input
                type="text"
                name="offer_tag"
                value={this.props.form.offer_tag}
                onChange={handleChangeField}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Inquiry">
                {Translations.create_campaigns.inquiry}
              </label>
              <select
                name="inquiry"
                value={this.props.form.inquiry}
                onChange={handleChangeField}
                onBlur={handleChangeField}
              >
                <option>{Translations.create_campaigns.select_inquiry}</option>
                <option>Inquiry 1</option>
                <option>Inquiry 2</option>
                <option>Inquiry 3</option>
                <option>Inquiry 4</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Inquiry_tag">
                {Translations.create_campaigns.inquiry_tag}
              </label>
              <input
                type="text"
                name="inquiry_tag"
                value={this.props.form.inquiry_tag}
                onChange={handleChangeField}
              />
            </div>
          </form>
        </div>
        <div className="col-sm-6 no-padding right-side">
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
  isFor: propTypes.bool.isRequired,
  uploadFile: propTypes.func.isRequired,
  handleEditImage: propTypes.func.isRequired,
  handleLocation: propTypes.func.isRequired,
  handleActualImg: propTypes.func,
  handleScale: propTypes.func
};

export default StepOne;
