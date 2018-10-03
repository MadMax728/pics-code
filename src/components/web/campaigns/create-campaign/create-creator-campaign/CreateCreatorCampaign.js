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
      handlePrivewClose
    } = this.props;

    return (
      <div>
        {isPreview ? (
          <div>
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
            <Preview />
          </div>
        ) : (
          <div>
            {stepIndex === 0 && <StepOne />}
            {stepIndex === 1 && <StepTwo />}
            {stepIndex === 2 && <StepThree />}
            {stepIndex === 3 && <PaymentStepOne forThat={forThat} />}
            {stepIndex === 4 && <PaymentStepTwo forThat={forThat} />}
            {stepIndex === 5 && (
              <PaymentStepThree
                forThat={forThat}
                handleModalInfoShow={handleModalInfoShow}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

CreateCreatorCampaign.propTypes = {
  stepIndex: propTypes.any.isRequired,
  forThat: propTypes.string.isRequired,
  handleModalInfoShow: propTypes.func.isRequired,
  isPreview: propTypes.bool.isRequired,
  handlePrivewClose: propTypes.func.isRequired
};

export default CreateCreatorCampaign;
