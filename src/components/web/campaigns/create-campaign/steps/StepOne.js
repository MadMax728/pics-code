import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import { ImageCropper, PlaceAutoCompleteLocation } from "../../../../ui-kit";
import { Translations } from "../../../../../lib/translations";
import * as enumerations from "../../../../../lib/constants/enumerations";
import { OfferTags, InquiryTags, SelectCategory, SelectInquiry, SelectOffer } from "../../../../../components/common";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

   render() {
    const {
      handleChangeField,
      form,
      isFor,
      handleEditImage,
      handleLocation,
      handleScale,
      handleActualImg,
      handleOfferTagChange,
      handleOfferTagDelete,
      handleInquiryTagChange,
      handleInquiryTagDelete,
      handleSelect
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
                value={form.title? form.title : ""}
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
                  value={form.location? form.location.address : ""}
                />
            </div>
            <div className="form-group">
              <label htmlFor="Category">
                {Translations.create_campaigns.add_category}
              </label>
                <SelectCategory
                  value={form.category? form.category : ""}
                  className=""
                  handleSelect={handleSelect}
                />
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
                        id={enumerations.procedure.public}
                        name="procedure"
                        className="black_button"
                        value={enumerations.procedure.public}
                        defaultChecked={form.procedure === enumerations.procedure.public}
                      />
                      <label htmlFor={enumerations.procedure.public}>
                        {Translations.create_campaigns.public}
                      </label>
                    </li>
                    <li onChange={handleChangeField} className="wid49">
                      <input
                        type="radio"
                        id={enumerations.procedure.anonymous}
                        name="procedure"
                        value={enumerations.procedure.anonymous}
                        defaultChecked={form.procedure === enumerations.procedure.anonymous}
                      />
                      <label htmlFor={enumerations.procedure.anonymous}>
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
                        id={enumerations.mediaTypes.video}
                        name="type"
                        className="black_button"
                        value={enumerations.mediaTypes.video}
                        defaultChecked={form.type === enumerations.mediaTypes.video}
                      />
                      <label htmlFor={enumerations.mediaTypes.video}>
                        {Translations.create_campaigns.video}
                      </label>
                    </li>
                    <li onChange={handleChangeField} className="wid49">
                      <input
                        type="radio"
                        id={enumerations.mediaTypes.image}
                        name="type"
                        value={enumerations.mediaTypes.image}
                        defaultChecked={form.type === enumerations.mediaTypes.image}
                      />
                      <label htmlFor={enumerations.mediaTypes.image}>
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
                    id={enumerations.target_group.company}
                    name="target_group"
                    className="black_button"
                    value={enumerations.target_group.company}
                    defaultChecked={form.target_group === enumerations.target_group.company}
                  />
                  <label htmlFor={enumerations.target_group.company}>
                    {Translations.create_campaigns.company}
                  </label>
                </li>
                <li onChange={handleChangeField} className="wid49">
                  <input
                    type="radio"
                    id={enumerations.target_group.female_and_male}
                    value={enumerations.target_group.female_and_male}
                    name="target_group"
                    defaultChecked={form.target_group === enumerations.target_group.female_and_male}
                  />
                  <label htmlFor={enumerations.target_group.female_and_male}>
                    {Translations.create_campaigns.male_female}
                  </label>
                </li>
                <li onChange={handleChangeField} className="wid49">
                  <input
                    type="radio"
                    id={enumerations.target_group.female}
                    name="target_group"
                    value={enumerations.target_group.female}
                    defaultChecked={form.target_group === enumerations.target_group.female}
                  />
                  <label htmlFor={enumerations.target_group.female}>
                    {Translations.create_campaigns.female}
                  </label>
                </li>
                <li onChange={handleChangeField} className="wid49">
                  <input
                    type="radio"
                    id={enumerations.target_group.male}
                    name="target_group"
                    value={enumerations.target_group.male}
                    defaultChecked={form.target_group === enumerations.target_group.male}
                  />
                  <label htmlFor={enumerations.target_group.male}>
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
                <SelectOffer 
                  value={form.offer? form.offer : ""}
                  className=""
                  handleSelect={handleSelect}
                />
            </div>
            <div className="form-group">
              <label htmlFor="offer_tag">
                {Translations.create_campaigns.offer_tag}
              </label>
              <OfferTags 
                value={form.offerTagList}
                handleOfferTagChange={handleOfferTagChange}
                handleOfferTagDelete={handleOfferTagDelete}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Inquiry">
                {Translations.create_campaigns.inquiry}
              </label>
                <SelectInquiry 
                  value={form.inquiry? form.inquiry : ""}
                  className=""
                  handleSelect={handleSelect}
                />
            </div>
            <div className="form-group">
              <label htmlFor="Inquiry_tag">
                {Translations.create_campaigns.inquiry_tag}
              </label>
              <InquiryTags
                value={form.inquiryTagList}
                handleInquiryTagChange={handleInquiryTagChange}
                handleInquiryTagDelete={handleInquiryTagDelete}
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
  handleChangeField: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired,
  isFor: PropTypes.bool.isRequired,
  handleEditImage: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
  handleActualImg: PropTypes.func,
  handleScale: PropTypes.func,
  handleOfferTagChange: PropTypes.func.isRequired,
  handleOfferTagDelete: PropTypes.func.isRequired,
  handleInquiryTagChange: PropTypes.func.isRequired,
  handleInquiryTagDelete: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

export default StepOne;
