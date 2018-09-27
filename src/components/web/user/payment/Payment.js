import React, { Component } from "react";
import { StepOne, StepTwo, StepThree } from "./steps";
import propTypes from "prop-types";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { stepIndex, modalInfoShow, handleModalInfoShow } = this.props;

    return (
      <div>
        {stepIndex === 0 && <StepOne />}
        {stepIndex === 1 && <StepTwo />}
        {stepIndex === 2 && (
          <StepThree
            modalInfoShow={modalInfoShow}
            handleModalInfoShow={handleModalInfoShow}
          />
        )}
      </div>
    );
  }
}

Payment.propTypes = {
  stepIndex: propTypes.any.isRequired,
  modalInfoShow: propTypes.bool,
  handleModalInfoShow: propTypes.func
};

export default Payment;
