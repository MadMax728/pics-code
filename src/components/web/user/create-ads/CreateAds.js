import React, { Component } from "react";
import { StepOne, StepTwo } from "./steps";
import propTypes from "prop-types";
import {
  PaymentStepOne,
  PaymentStepTwo,
  PaymentStepThree
} from "../../user/payment/steps";

class CreateAds extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { stepIndex, handleModalInfoShow, forThat } = this.props;

    return (
      <div>
        {stepIndex === 0 && <StepOne />}
        {stepIndex === 1 && <StepTwo />}
        {stepIndex === 2 && <PaymentStepOne forThat={forThat} />}
        {stepIndex === 3 && <PaymentStepTwo forThat={forThat} />}
        {stepIndex === 4 && (
          <PaymentStepThree
            forThat={forThat}
            handleModalInfoShow={handleModalInfoShow}
          />
        )}
      </div>
    );
  }
}

CreateAds.propTypes = {
  stepIndex: propTypes.any.isRequired,
  forThat: propTypes.string.isRequired,
  handleModalInfoShow: propTypes.func.isRequired
};

export default CreateAds;
