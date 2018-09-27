import React, { Component } from "react";
import { StepOne, StepTwo, StepThree } from "./steps";
import { Preview } from "../preview";
import propTypes from "prop-types";

class CreateCreatorCampaign extends Component {
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

CreateCreatorCampaign.propTypes = {
  stepIndex: propTypes.any.isRequired
};

export default CreateCreatorCampaign;
