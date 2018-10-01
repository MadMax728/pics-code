import React, { Component } from "react";
import { StepOne, StepTwo, StepThree } from "./steps";
import {
  PaymentStepOne,
  PaymentStepTwo,
  PaymentStepThree
} from "../../../user/payment/steps";
// import { Preview } from "../preview";
import propTypes from "prop-types";

class CreateCompanyCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { stepIndex, forThat, handleModalInfoShow } = this.props;

    return (
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
        {/* {isPreview && <Preview />} */}
      </div>
    );
  }
}

CreateCompanyCampaign.propTypes = {
  stepIndex: propTypes.any.isRequired,
  forThat: propTypes.string.isRequired,
  handleModalInfoShow: propTypes.func.isRequired
};

export default CreateCompanyCampaign;
