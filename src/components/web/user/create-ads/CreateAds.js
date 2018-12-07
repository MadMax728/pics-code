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
      uploadFile,
      handleEditImage,
      handleLocation,
      handleActualImg,
      handleScale
    } = this.props;

    return (
      <div>
        {stepIndex === 0 && (
          <StepOne
            handleChangeField={handleChangeField}
            uploadFile={uploadFile}
            form={form}
            handleEditImage={handleEditImage}
            handleLocation={handleLocation}
            handleActualImg={handleActualImg}
            handleScale={handleScale}
          />
        )}
        {stepIndex === 1 && (
          <StepTwo
            handleChangeField={handleChangeField}
            handleDate={handleDate}
            form={form}
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
  stepIndex: PropTypes.any.isRequired,
  forThat: PropTypes.string.isRequired,
  handleModalInfoShow: PropTypes.func.isRequired,
  handleChangeField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired,
  handleDate: PropTypes.func.isRequired,
  uploadFile: PropTypes.func.isRequired,
  handleEditImage: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
  handleActualImg: PropTypes.func,
  handleScale: PropTypes.func
};

export default CreateAds;
