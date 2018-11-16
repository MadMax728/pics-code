import React, { Component } from "react";
import { StepOne, StepTwo, StepThree } from "../steps";
import { Preview } from "../preview";
import {
  PaymentStepOne,
  PaymentStepTwo,
  PaymentStepThree
} from "../../../user/payment/steps";
import propTypes from "prop-types";
import * as images from "../../../../../lib/constants/images";
import { CreateCompanyCampaignHeader } from "./index";
import { ImageCropper } from "../../../../ui-kit/image-cropper";

class CreateCompanyCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      stepIndex,
      forThat,
      handleModalInfoShow,
      isPreview,
      handlePrivewClose,
      form,
      isFor,
      handleChangeField,
      handleSubmit,
      handleDate,
      handleContentChange,
      contentText,
      uploadFile,
      handleEditImage,
      handleLocation,
      handleActualImg,
      handleScale
    } = this.props;

    return (
      <div className="col-xs-12 no-padding">
        {isPreview && <Preview form={form} />}
        {isPreview && (
          <button
            onClick={handlePrivewClose}
            className={"closeBtn right-side-close"}
          >
            <img
              src={images.white_close}
              alt={"cross"}
              style={{ height: "10px", width: "10px" }}
            />
          </button>
        )}
        {!isPreview &&
          (stepIndex === 0 && (
            <StepOne
              uploadFile={uploadFile}
              handleChangeField={handleChangeField}
              form={form}
              isFor={isFor}
              handleEditImage={handleEditImage}
              handleLocation={handleLocation}
              handleActualImg={handleActualImg}
              handleScale={handleScale}
            />
          ))}
        {!isPreview &&
          (stepIndex === 1 && (
            <StepTwo
              handleChangeField={handleChangeField}
              contentText={contentText}
              handleContentChange={handleContentChange}
            />
          ))}
        {!isPreview &&
          (stepIndex === 2 && (
            <StepThree
              handleChangeField={handleChangeField}
              form={form}
              handleDate={handleDate}
            />
          ))}
        {!isPreview &&
          (stepIndex === 3 && (
            <PaymentStepOne
              forThat={forThat}
              form={form}
              handleChangeField={handleChangeField}
            />
          ))}
        {!isPreview &&
          (stepIndex === 4 && (
            <PaymentStepTwo
              forThat={forThat}
              handleChangeField={handleChangeField}
              form={form}
            />
          ))}
        {!isPreview &&
          (stepIndex === 5 && (
            <PaymentStepThree
              forThat={forThat}
              handleModalInfoShow={handleModalInfoShow}
              handleChangeField={handleChangeField}
              form={form}
              handleSubmit={handleSubmit}
            />
          ))}
      </div>
    );
  }
}

CreateCompanyCampaign.propTypes = {
  stepIndex: propTypes.any.isRequired,
  forThat: propTypes.string.isRequired,
  handleModalInfoShow: propTypes.func.isRequired,
  isPreview: propTypes.bool.isRequired,
  handlePrivewClose: propTypes.func.isRequired,
  handleChangeField: propTypes.func.isRequired,
  isFor: propTypes.bool.isRequired,
  form: propTypes.any.isRequired,
  handleSubmit: propTypes.func.isRequired,
  handleDate: propTypes.func.isRequired,
  handleContentChange: propTypes.func.isRequired,
  contentText: propTypes.any.isRequired,
  uploadFile: propTypes.func.isRequired,
  handleEditImage: propTypes.func.isRequired,
  handleLocation: propTypes.func.isRequired,
  handleActualImg: propTypes.func,
  handleScale: propTypes.func
};

export default CreateCompanyCampaign;
