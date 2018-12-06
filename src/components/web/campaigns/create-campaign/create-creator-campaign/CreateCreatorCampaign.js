import React, { Component } from "react";
import { StepOne, StepTwo, StepThree } from "../steps";
import { Preview } from "../preview";
import propTypes from "prop-types";
import {
  PaymentStepOne,
  PaymentStepTwo,
  PaymentStepThree
} from "../../../user/payment/steps";
import * as images from "../../../../../lib/constants/images";

class CreateCreatorCampaign extends Component {
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
      handleScale,
      handleOfferTagChange,
      handleOfferTagDelete,
      handleInquiryTagChange,
      handleInquiryTagDelete,
      handleSelect
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
              handleInquiryTagChange={handleInquiryTagChange}
              handleInquiryTagDelete={handleInquiryTagDelete}
              handleOfferTagChange={handleOfferTagChange}
              handleOfferTagDelete={handleOfferTagDelete}
              handleSelect={handleSelect}
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
              handleDate={handleDate}
            />
          ))}
        {!isPreview &&
          (stepIndex === 3 && (
            <PaymentStepOne
              forThat={forThat}
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

CreateCreatorCampaign.propTypes = {
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
  handleScale: propTypes.func,
  handleOfferTagChange: propTypes.func.isRequired,
  handleOfferTagDelete: propTypes.func.isRequired,
  handleInquiryTagChange: propTypes.func.isRequired,
  handleInquiryTagDelete: propTypes.func.isRequired,
  handleSelect: propTypes.func.isRequired
};

export default CreateCreatorCampaign;
