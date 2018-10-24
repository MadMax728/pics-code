import React, { Component } from "react";
import { StepOne, StepTwo, StepThree } from "./steps";
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
      handleChangeField,
      handleSubmit
    } = this.props;

    return (
      <div>
        {isPreview && <Preview />}
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
            <StepOne handleChangeField={handleChangeField} form={form} />
          ))}
        {!isPreview &&
          (stepIndex === 1 && (
            <StepTwo handleChangeField={handleChangeField} />
          ))}
        {!isPreview &&
          (stepIndex === 2 && (
            <StepThree handleChangeField={handleChangeField} />
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
  form: propTypes.any.isRequired,
  handleSubmit: propTypes.func.isRequired
};

export default CreateCreatorCampaign;
