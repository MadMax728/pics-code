import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import { ImageCropper, PlaceAutoCompleteLocation } from "../../../../ui-kit";
import { Translations } from "../../../../../lib/translations";
import * as enumerations from "../../../../../lib/constants/enumerations";
import { OfferTags, InquiryTags, SelectCategory, SelectInquiry, SelectOffer } from "../../../../../components/common";
import { Auth } from "../../../../../auth";

const storage = Auth.extractJwtFromStorage();
let userInfo = null;
if (storage) {
  userInfo = JSON.parse(storage.userInfo);
}
class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null
    };
  }

  componentDidMount = () => {
    if (userInfo) {
      this.setState({userInfo})
    }
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
      handleSelect,
      handleVideo
    } = this.props;

    const { userInfo } = this.state;
    
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
              {form.title? form.title : Translations.create_campaigns.title_of_campaigns}
            </div>
            <div className="secondary_title">{userInfo? userInfo.username : ""}</div>
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
              </div>
            )}

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

          {
            form.type === enumerations.mediaTypes.image &&
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
            form.type === enumerations.mediaTypes.video && !form.video &&
              <div className="box">
                <input
                  type="file"
                  name="newImage"
                  id="file-2"
                  className="inputfile inputfile-2"
                  data-multiple-caption="{count} files selected"
                  multiple=""
                  onChange={handleVideo}
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
          }
          { !form.fileType && form.video && form.type === enumerations.mediaTypes.video &&
            <video controls>
              <track kind="captions" />
              <source src={form.video} type={form.file.type} />
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
  isFor: PropTypes.bool.isRequired,
  handleEditImage: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
  handleActualImg: PropTypes.func,
  handleScale: PropTypes.func,
  handleOfferTagChange: PropTypes.func.isRequired,
  handleOfferTagDelete: PropTypes.func.isRequired,
  handleInquiryTagChange: PropTypes.func.isRequired,
  handleInquiryTagDelete: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleVideo: PropTypes.func.isRequired
};

export default StepOne;
