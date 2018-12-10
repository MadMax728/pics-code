import React, { Component } from "react";
import { StepOne, StepTwo } from "./steps";
import PropTypes from "prop-types";
import {
  PaymentStepOne,
  PaymentStepTwo,
  PaymentStepThree
} from "../../user/payment/steps";
import { CreateCompanyCampaign } from "../../campaigns/create-campaign/create-company-campaign";

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
      handleSubmit,
      handleDate,
      handleEditImage,
      handleLocation,
      handleActualImg,
      handleScale,
      handleSelect,
      handleSetState
    } = this.props;

    return (
      <div>
        {stepIndex === 0 && (
          <StepOne
            handleChangeField={handleChangeField}
            form={form}
            handleEditImage={handleEditImage}
            handleLocation={handleLocation}
            handleActualImg={handleActualImg}
            handleScale={handleScale}
            handleSelect={handleSelect}
            handleSetState={handleSetState}
          />
        )}
        {stepIndex === 1 && (
          <StepTwo
            handleDate={handleDate}
            form={form}
            handleSelect={handleSelect}
          />
        )}
        {stepIndex === 2 && (
          <PaymentStepOne
            forThat={forThat}
            handleChangeField={handleChangeField}
            form={form}
          />
        )}
        {stepIndex === 3 && (
          <PaymentStepTwo
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
  stepIndex: PropTypes.any.isRequired,
  forThat: PropTypes.string.isRequired,
  handleModalInfoShow: PropTypes.func.isRequired,
  handleChangeField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired,
  handleDate: PropTypes.func.isRequired,
  handleEditImage: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
  handleActualImg: PropTypes.func.isRequired,
  handleScale: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleSetState: PropTypes.func.isRequired,
};

export default CreateAds;
