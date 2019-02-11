import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import {
  ImageCropper,
  PlaceAutoCompleteLocation,
  UserImageItem,
  UserTitleItem,
  Label,
  RadioButton,
  ErrorSpan,
  Input
} from "../../../../ui-kit";
import { Translations } from "../../../../../lib/translations";
import * as enumerations from "../../../../../lib/constants/enumerations";
import {
  OfferTags,
  InquiryTags,
  SelectCategory,
  SelectInquiry,
  SelectOffer
} from "../../../../../components/common";

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
      handleSelect,
      handleVideo,
      userInfo,
      handleOfferTagChange,
      handleOfferTagDelete,
      handleInquiryTagChange,
      handleInquiryTagDelete,
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
              {/* {form.typeContent === enumerations.typeContent.image && ( */}
              <ImageCropper
                image={form.image}
                handleEditImage={handleEditImage}
                isCircle={false}
                ref={this.imageCrop}
                handleActualImg={handleActualImg}
                handleScale={handleScale}
                userInfo={userInfo}
                isEdit={isEdit}
              />
              {/* )} */}

              {/* {form.typeContent === enumerations.typeContent.video &&
                !form.video && (
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
                      <br />{" "}
                      <span>{Translations.upload_modal.upload_file}</span>
                    </label>
                  </div>
                )}
                {!form.fileType &&
                form.video &&
                form.typeContent === enumerations.typeContent.video && (
                  <video controls>
                    <track kind="captions" />
                    <source src={form.video} type={form.file.type} />
                  </video>
                )} */}
            </div>
            <div className="pt-10 form-group">
              <Label
                htmlFor="title"
                value={Translations.create_campaigns.add_title}
              />
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

            <div className="form-group">
              <Label
                htmlFor="Type"
                value={Translations.create_campaigns.type}
              />
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
            <div className="form-group">
              <Label
                htmlFor="Target_group"
                value={Translations.create_campaigns.target_group}
              />
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
              <SelectOffer
                value={form.offer}
                className=""
                handleSelect={handleSelect}
              />
            </div>
            <div className="form-group">
              <Label
                htmlFor="Inquiry"
                value={Translations.create_campaigns.inquiry}
              />
              <SelectInquiry
                value={form.inquiry}
                className=""
                handleSelect={handleSelect}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount = () => {};
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
  handleVideo: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
  handleOfferTagChange: PropTypes.func.isRequired,
  handleOfferTagDelete: PropTypes.func.isRequired,
  handleInquiryTagChange: PropTypes.func.isRequired,
  handleInquiryTagDelete: PropTypes.func.isRequired,
  isEdit: PropTypes.any
};

export default StepOne;
