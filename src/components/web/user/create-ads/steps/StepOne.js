import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import {
  CampaignAdCrop,
  PlaceAutoCompleteLocation,
  // UserImageItem,
  Label,
  Input,
  ErrorSpan,
  RadioButton
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
            <div className="normal_title modal-title">
              {Translations.create_ads.title_of_ads}
            </div>
          </div>
          <form>
            <div className="form-group">
              <Label
                htmlFor="Insert_link"
                value={Translations.create_ads.add_title_image}
              />
              {/* {form.fileType &&
                form.typeContent === enumerations.typeContent.image && ( */}
              <CampaignAdCrop
                image={form.image}
                handleEditImage={handleEditImage}
                isCircle={false}
                ref={this.imageCrop}
                handleActualImg={handleActualImg}
                handleScale={handleScale}
              />
              {/* )} */}
              {/* {!form.fileType &&
                form.video &&
                form.typeContent === enumerations.typeContent.video && (
                  <video controls>
                    <track kind="captions" />
                    <source
                      src={form.video}
                      type={form.file ? form.file.type : ""}
                    />
                  </video>
                )} */}
            </div>
            <div className="form-group">
              <Label
                htmlFor="title"
                value={Translations.create_ads.add_title}
              />
              <Input
                type="text"
                value={form.title ? form.title : ""}
                name="title"
                onChange={handleChangeField}
              />
              {form.title.length === 0 && form.error && (
                <ErrorSpan value={Translations.error.create_modal.title} />
              )}
            </div>
            <div className="form-group">
              <Label
                htmlFor="Location"
                value={Translations.create_ads.add_location}
              />
              <PlaceAutoCompleteLocation
                className=""
                handleLocation={handleLocation}
                value={form.location ? form.location.address : ""}
              />
              {form.location.address.length === 0 &&
                form.location.latitude.length === 0 &&
                form.location.longitude.length === 0 &&
                form.error && (
                  <ErrorSpan value={Translations.error.create_modal.location} />
                )}
            </div>
            <div className="form-group">
              <Label
                htmlFor="Radius"
                value={Translations.create_ads.add_radius}
              />
              <SelectRadius
                value={form.radius ? form.radius : ""}
                className=""
                handleSelect={handleSelect}
              />
              {form.radius.length === 0 && form.error && (
                <ErrorSpan value={Translations.error.create_modal.radius} />
              )}
            </div>
            <div className="form-group">
              <Label
                htmlFor="Category"
                value={Translations.create_ads.add_category}
              />
              <SelectCategory
                value={form.category ? form.category : ""}
                className=""
                handleSelect={handleSelect}
              />
              {form.category.length === 0 && form.error && (
                <ErrorSpan value={Translations.error.create_modal.category} />
              )}
            </div>

            <div className="form-group">
              <Label
                htmlFor="target"
                value={Translations.create_ads.add_target_group}
              />
              <ul className="options">
                <li
                  className="full-width-input-wrapper wid49"
                  onChange={handleChangeField}
                >
                  <RadioButton
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
                  <Label
                    htmlFor={enumerations.target_group.female_and_male}
                    value={Translations.create_ads.male_female}
                  />
                </li>
                <li className="wid49" onChange={handleChangeField}>
                  <RadioButton
                    type="radio"
                    id="male"
                    name="targetGroup"
                    value="male"
                    className="black_button"
                    defaultChecked={
                      form.targetGroup === enumerations.target_group.male
                    }
                  />
                  <Label htmlFor="male" value={Translations.create_ads.male} />
                </li>
                <li className="wid49" onChange={handleChangeField}>
                  <RadioButton
                    type="radio"
                    id={enumerations.target_group.female}
                    value={enumerations.target_group.female}
                    name="targetGroup"
                    defaultChecked={
                      form.targetGroup === enumerations.target_group.female
                    }
                  />
                  <Label
                    htmlFor={enumerations.target_group.female}
                    value={Translations.create_ads.female}
                  />
                </li>
              </ul>
            </div>
            <div className="form-group">
              <Label
                htmlFor="Description"
                value={Translations.create_ads.add_description}
              />
              <HashTagUsername
                className="form-control"
                type="text"
                name="description"
                handleSetState={handleSetState}
                value={form.description ? form.description : ""}
                isText={false}
              />
              {form.description.length === 0 && form.error && (
                <ErrorSpan
                  value={Translations.error.create_modal.description}
                />
              )}
            </div>
            <div className="form-group">
              <Label
                htmlFor="call"
                value={Translations.create_ads.action_button}
              />
              <SelectCallToActions
                value={form.callToAction ? form.callToAction : ""}
                className=""
                handleSelect={handleSelect}
              />
              {form.callToAction.length === 0 && form.error && (
                <ErrorSpan
                  value={Translations.error.create_modal.callToAction}
                />
              )}
            </div>
            <div className="form-group">
              <Label
                htmlFor="Insert_link"
                value={Translations.create_ads.insert_link}
              />
              <Input
                type="text"
                value={form.insertLink ? form.insertLink : ""}
                name="insertLink"
                onChange={handleChangeField}
              />
              {form.insertLink.length === 0 && form.error && (
                <ErrorSpan value={Translations.error.create_modal.insertLink} />
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
