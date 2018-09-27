import React, { Component } from "react";
import { StepOne, StepTwo, StepThree } from "./steps";
import { Preview } from "../preview";
import propTypes from "prop-types";

class CreateCompanyCampaign extends Component {
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

CreateCompanyCampaign.propTypes = {
  stepIndex: propTypes.any.isRequired
};

export default CreateCompanyCampaign;
