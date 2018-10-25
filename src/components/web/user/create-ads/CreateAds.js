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
    const {
      stepIndex,
      handleModalInfoShow,
      forThat,
      form,
      handleChangeField,
      handleSubmit
    } = this.props;

    return (
      <div>
        {stepIndex === 0 && (
          <StepOne handleChangeField={handleChangeField} form={form} />
        )}
        {stepIndex === 1 && <StepTwo handleChangeField={handleChangeField} />}
        {stepIndex === 2 && (
          <PaymentStepOne
            forThat={forThat}
            handleChangeField={handleChangeField}
          />
        )}
        {stepIndex === 3 && (
          <PaymentStepTwo
            forThat={forThat}
            handleChangeField={handleChangeField}
            form={form}
          />
        )}
        {stepIndex === 4 && (
          <PaymentStepThree
            forThat={forThat}
            handleModalInfoShow={handleModalInfoShow}
            form={form}
            handleChangeField={handleChangeField}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    );
  }
}

CreateAds.propTypes = {
  stepIndex: propTypes.any.isRequired,
  forThat: propTypes.string.isRequired,
  handleModalInfoShow: propTypes.func.isRequired,
  handleChangeField: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  form: propTypes.any.isRequired
};

export default CreateAds;
