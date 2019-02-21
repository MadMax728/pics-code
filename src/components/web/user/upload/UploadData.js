import React from "react";
import * as images from "../../../../lib/constants/images";
import PropTypes from "prop-types";
import { HashTagUsername, SelectCategory } from "../../../common";
import {
  PlaceAutoCompleteLocation,
  Label,
  VideoItem,
  ErrorSpan,
  RadioButton,
  Input,
  ImageItem
} from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";
import * as enumerations from "../../../../lib/constants/enumerations";

const isLabel = {
  yes: enumerations.advertiseLabel.yes,
  no: enumerations.advertiseLabel.no
};

const UploadData = ({
  form,
  handleSetState,
  handleLocation,
  handleSelect,
  isInProgress,
  handleUpload,
  isAdvertise,
  handleChangeField
}) => {

  return (
    <div className="col-sm-12 upload-form">
      <div className="user-title">
        <div className="normal_title modal-title">
          {form.filetype
            ? Translations.upload_modal.title_of_image_upload
            : Translations.upload_modal.title_of_video_upload}
        </div>
      </div>
      <form className="col-xs-12 no-padding">
        <div className="form-group no-margin">
          {!form.image && !form.video ? (
            <div className="box">
              <input
                type="file"
                name="newImage"
                id="file-2"
                className="inputfile inputfile-2"
                data-multiple-caption="{count} files selected"
                multiple=""
                onChange={handleUpload}
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
          ) : form.filetype ? (
            <div>
              {form.image && (
                <div className="upload-img-wrapper">
                  <Label
                    htmlFor="image"
                    value={Translations.upload_modal.add_image}
                  />
                  <p className="form-help-text">
                    {Translations.upload_modal.add_image_help_text}
                  </p>
                  <ImageItem
                    item={form.image}
                    classNames={`img-responsive widthHeightAuto`}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="upload-img-wrapper">
              <Label
                htmlFor="Location"
                value={Translations.upload_modal.add_video}
              />
              <p className="form-help-text">
                {Translations.upload_modal.add_video_help_text}
              </p>
              <VideoItem item={form.video} id="upload-video" />
            </div>
          )}
          {isInProgress && (
            <div className="image-wrapper">
              <div className="progress-bar-wrapper">
                <div className="progress blue">
                  <span className="progress-left">
                    <span className="progress-bar" />
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar" />
                  </span>
                  <div className="progress-value">90%</div>
                </div>
              </div>
            </div>
          )}

          <div className="add-wrapper upload-wrapr heightAuto">
            <input
              type="file"
              className="img-upload"
              name="newImage"
              id="file-2"
              data-multiple-caption="{count} files selected"
              multiple=""
              onChange={handleUpload}
            />
            <img src={images.plus_button} alt="plus button" />
          </div>
        </div>

        {!form.filetype && (
          <div className="form-group">
            <Label
              htmlFor="Location"
              value={Translations.upload_modal.add_title}
            />
            <p className="form-help-text">
              {Translations.upload_modal.video_title_help_text}
            </p>
            <Input
              type="text"
              value={form.add_title ? form.add_title : ""}
              name="add_title"
              onChange={handleChangeField}
            />
            {form.add_title.length === 0 && form.error && (
              <ErrorSpan value={Translations.error.create_modal.title} />
            )}
          </div>
        )}

        <div className="form-group">
          <Label
            htmlFor="Location"
            value={Translations.upload_modal.add_location}
          />
          <p className="form-help-text">
            {Translations.upload_modal.location_help_text}
          </p>
          <PlaceAutoCompleteLocation
            className=""
            handleLocation={handleLocation}
            value={form.address}
          />
          {form.add_location.address.length === 0 &&
            form.add_location.latitude.length === 0 &&
            form.add_location.longitude.length === 0 &&
            form.error && (
              <ErrorSpan value={Translations.error.create_modal.location} />
            )}
        </div>
        <div className="form-group">
          <Label
            htmlFor="Category"
            value={Translations.upload_modal.add_category}
          />
          <p>
            {form.filetype
              ? Translations.upload_modal.image_category_help_text
              : Translations.upload_modal.video_category_help_text}
          </p>
          <SelectCategory
            value={form.add_category ? form.add_category : ""}
            className=""
            handleSelect={handleSelect}
          />
          {form.add_category.length === 0 && form.error && (
            <ErrorSpan value={Translations.error.create_modal.category} />
          )}
        </div>
        <div className="form-group">
          <Label
            htmlFor="description"
            value={Translations.upload_modal.add_description}
          />
          <p>{Translations.upload_modal.description_help_text}</p>
          <HashTagUsername
            className="form-control"
            type="text"
            name="add_description"
            handleSetState={handleSetState}
            value={form.add_description}
            isText={false}
          />
          {form.add_description.length === 0 && form.error && (
            <ErrorSpan value={Translations.error.create_modal.description} />
          )}
        </div>

        <div className="form-group no-margin">
          <Label
            htmlFor="label"
            value={Translations.upload_modal.advertisement}
          />
          <p>
            {form.filetype
              ? Translations.upload_modal.image_label_advertisement_help_text
              : Translations.upload_modal.video_label_advertisement_help_text}
          </p>
          <div className="form-group">
            <ul className="options">
              <li className="wid49">
                <RadioButton
                  type="radio"
                  id="no"
                  value="no"
                  name="is_advertise_label"
                  defaultChecked={isAdvertise === isLabel.no}
                  onChange={handleChangeField}
                />
                <Label
                  htmlFor={Translations.upload_modal.no}
                  value={Translations.upload_modal.no}
                />
              </li>
              <li className="wid49">
                <RadioButton
                  type="radio"
                  id="yes"
                  name="is_advertise_label"
                  value="yes"
                  defaultChecked={isAdvertise === isLabel.yes}
                  className="black_button"
                  onChange={handleChangeField}
                />
                <Label
                  htmlFor={Translations.upload_modal.yes}
                  value={Translations.upload_modal.yes}
                />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

UploadData.propTypes = {
  handleChangeField: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
  isInProgress: PropTypes.bool,
  handleSetState: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired,
  handleSelect: PropTypes.func.isRequired,
  isAdvertise: PropTypes.bool
};

export default UploadData;
