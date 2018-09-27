import React, { Component } from "react";
import { StepOne, StepTwo, StepThree, Preview } from "./steps";
import propTypes from "prop-types";

class CreateCampaign extends Component {
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
        {stepIndex === 2 && <StepThree />}
        {stepIndex === 3 && <Preview />}
      </div>
    );
  }
}

CreateCampaign.propTypes = {
  stepIndex: propTypes.any.isRequired
};

export default CreateCampaign;
