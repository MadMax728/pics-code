import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  CampaignAdCrop,
  PlaceAutoCompleteLocation,
  Label,
  RadioButton,
  ErrorSpan,
  Input
} from "../../../../ui-kit";
import { Translations } from "../../../../../lib/translations";
import * as enumerations from "../../../../../lib/constants/enumerations";
import {
  SelectCategory,
  SelectInquiry,
  SelectOffer
} from "../../../../../components/common";

class StepOne extends Component {
  /* eslint-disable */
  render() {
    const {
      handleChangeField,
      form,
      isFor,
      handleEditImage,
      handleLocation,
      handleScale,
      handleActualImg,
      handleSelect,
      userInfo,
      isEdit
    } = this.props;
    return (
      <div className="col-xs-12 no-padding">
        <div className="col-sm-12 upload-form">
          <div className="user-title">
            <div className="normal_title modal-title">
              {" "}
              {Translations.create_campaigns.title}
            </div>
          </div>
          <form>
            <div className="pt-10 form-group">
              <Label
                htmlFor="title"
                value={Translations.create_campaigns.add_title_image}
              />
              <p className="form-help-text">
                {Translations.create_campaigns.campaign_title_help_text}
              </p>
              <CampaignAdCrop
                image={form.image}
                handleEditImage={handleEditImage}
                isCircle={false}
                ref={this.imageCrop}
                handleActualImg={handleActualImg}
                handleScale={handleScale}
                userInfo={userInfo}
                isEdit={isEdit}
              />
            </div>
            <div className="pt-10 form-group">
              <Label
                htmlFor="title"
                value={Translations.create_campaigns.add_title}
              />
              <p className="form-help-text">
                {Translations.create_campaigns.title_help_text}
              </p>
              <Input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={form.title && form.title ? form.title : ""}
                onChange={handleChangeField}
              />
              {form.title && form.title.length === 0 && form.error && (
                <ErrorSpan value={Translations.error.create_modal.title} />
              )}
            </div>
            <div className="form-group">
              <Label
                htmlFor="Location"
                value={Translations.create_campaigns.add_location}
              />
              <p className="form-help-text">
                {Translations.create_campaigns.location_help_text}
              </p>
              <PlaceAutoCompleteLocation
                className=""
                handleLocation={handleLocation}
                value={form.location ? form.location.address : ""}
              />
              {form.location &&
                form.location.address &&
                form.location.latitude &&
                form.location.longitude &&
                form.location.address.length === 0 &&
                form.location.latitude.length === 0 &&
                form.location.longitude.length === 0 &&
                form.error && (
                  <ErrorSpan value={Translations.error.create_modal.location} />
                )}
            </div>
            <div className="form-group">
              <Label
                htmlFor="Category"
                value={Translations.create_campaigns.add_category}
              />
              <p className="form-help-text">
                {Translations.create_campaigns.category_help_text}
              </p>
              <SelectCategory
                value={form.category || ""}
                className=""
                handleSelect={handleSelect}
              />
              {form.category && form.category.length === 0 && form.error && (
                <ErrorSpan value={Translations.error.create_modal.category} />
              )}
            </div>
            {isFor && (
              <div>
                <div className="form-group">
                  <Label
                    htmlFor="Procedure"
                    value={Translations.create_campaigns.procedure}
                  />
                  <p className="form-help-text">
                    {Translations.create_campaigns.public_procedure_help_text}
                  </p>
                  <p className="form-help-text">
                    {
                      Translations.create_campaigns
                        .anonymous_proceture_help_text
                    }
                  </p>
                  <ul className="options">
                    <li className="wid49">
                      <RadioButton
                        type="radio"
                        id={enumerations.procedure.public}
                        name="procedure"
                        className="black_button"
                        value={enumerations.procedure.public}
                        defaultChecked={
                          form.procedure === enumerations.procedure.public
                        }
                        onChange={handleChangeField}
                      />
                      <Label
                        htmlFor={enumerations.procedure.public}
                        value={Translations.create_campaigns.public}
                      />
                    </li>
                    <li className="wid49">
                      <RadioButton
                        type="radio"
                        id={enumerations.procedure.anonymous}
                        name="procedure"
                        value={enumerations.procedure.anonymous}
                        defaultChecked={
                          form.procedure === enumerations.procedure.anonymous
                        }
                        onChange={handleChangeField}
                      />
                      <Label
                        htmlFor={enumerations.procedure.anonymous}
                        value={Translations.create_campaigns.anonymous}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {isFor && (
              <div className="form-group">
                <Label
                  htmlFor="Type"
                  value={Translations.create_campaigns.type}
                />
                <p className="form-help-text">
                  {Translations.create_campaigns.type_help_text}
                </p>
                <ul className="options">
                  <li className="wid49">
                    <RadioButton
                      type="radio"
                      id={enumerations.typeContent.video}
                      name="typeContent"
                      className="black_button"
                      value={enumerations.typeContent.video}
                      defaultChecked={
                        form.typeContent === enumerations.typeContent.video
                      }
                      onChange={handleChangeField}
                    />
                    <Label
                      htmlFor={enumerations.typeContent.video}
                      value={Translations.create_campaigns.video}
                    />
                  </li>
                  <li className="wid49">
                    <RadioButton
                      type="radio"
                      id={enumerations.typeContent.image}
                      name="typeContent"
                      value={enumerations.typeContent.image}
                      defaultChecked={
                        form.typeContent === enumerations.typeContent.image
                      }
                      onChange={handleChangeField}
                    />
                    <Label
                      htmlFor={enumerations.typeContent.image}
                      value={Translations.create_campaigns.image}
                    />
                  </li>
                </ul>
              </div>
            )}

            <div className="form-group">
              <Label
                htmlFor="Target_group"
                value={Translations.create_campaigns.target_group}
              />
              <p className="form-help-text">
                {Translations.create_campaigns.target_group_help_text}
              </p>
              <ul className="options target-options">
                <li className="wid49">
                  <RadioButton
                    type="radio"
                    id={enumerations.target_group.company}
                    name="targetGroup"
                    className="black_button"
                    value={enumerations.target_group.company}
                    defaultChecked={
                      form.targetGroup === enumerations.target_group.company
                    }
                    onChange={handleChangeField}
                  />
                  <Label
                    htmlFor={enumerations.target_group.company}
                    value={Translations.create_campaigns.company}
                  />
                </li>
                <li className="wid49">
                  <RadioButton
                    type="radio"
                    id={enumerations.target_group.female_and_male}
                    value={enumerations.target_group.female_and_male}
                    name="targetGroup"
                    defaultChecked={
                      form.targetGroup ===
                      enumerations.target_group.female_and_male
                    }
                    onChange={handleChangeField}
                  />
                  <Label
                    htmlFor={enumerations.target_group.female_and_male}
                    value={Translations.create_campaigns.male_female}
                  />
                </li>
                <li className="wid49">
                  <RadioButton
                    type="radio"
                    id={enumerations.target_group.female}
                    name="targetGroup"
                    value={enumerations.target_group.female}
                    defaultChecked={
                      form.targetGroup === enumerations.target_group.female
                    }
                    onChange={handleChangeField}
                  />
                  <Label
                    htmlFor={enumerations.target_group.female}
                    value={Translations.create_campaigns.female}
                  />
                </li>
                <li className="wid49">
                  <RadioButton
                    type="radio"
                    id={enumerations.target_group.male}
                    name="targetGroup"
                    value={enumerations.target_group.male}
                    defaultChecked={
                      form.targetGroup === enumerations.target_group.male
                    }
                    onChange={handleChangeField}
                  />
                  <Label
                    htmlFor={enumerations.target_group.male}
                    value={Translations.create_campaigns.male}
                  />
                </li>
              </ul>
            </div>
            <div className="form-group">
              <Label
                htmlFor="Offer"
                value={Translations.create_campaigns.offer}
              />
              <p className="form-help-text">
                {Translations.create_campaigns.offer_help_text}
              </p>
              <SelectOffer
                value={form.offers || ""}
                className=""
                handleSelect={handleSelect}
              />
            </div>
            <div className="form-group">
              <Label
                htmlFor="Inquiry"
                value={Translations.create_campaigns.inquiry}
              />
              <p className="form-help-text">
                {Translations.create_campaigns.inquiry_help_text}
              </p>
              <SelectInquiry
                value={form.inquiry || ""}
                className=""
                handleSelect={handleSelect}
              />
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
  isFor: PropTypes.bool.isRequired,
  handleEditImage: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
  handleActualImg: PropTypes.func,
  handleScale: PropTypes.func,
  handleSelect: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
  isEdit: PropTypes.any
};

export default StepOne;
