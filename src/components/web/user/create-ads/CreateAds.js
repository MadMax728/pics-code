import React, { Component } from "react";
import { StepOne, StepTwo } from "./steps";
import propTypes from "prop-types";

class CreateAds extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { stepIndex } = this.props;

    return (
      <div>
        {stepIndex === 0 && <StepOne />}
        {stepIndex === 1 && <StepTwo />}
      </div>
    );
  }
}

CreateAds.propTypes = {
  stepIndex: propTypes.any.isRequired
};

export default CreateAds;
