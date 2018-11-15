import React, { Component } from "react";
import { StepOne, StepTwo } from "./steps";
import propTypes from "prop-types";
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
  stepIndex: propTypes.any.isRequired,
  forThat: propTypes.string.isRequired,
  handleModalInfoShow: propTypes.func.isRequired,
  handleChangeField: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  form: propTypes.any.isRequired,
  handleDate: propTypes.func.isRequired,
  uploadFile: propTypes.func.isRequired,
  handleEditImage: propTypes.func.isRequired,
  handleLocation: propTypes.func.isRequired,
  handleActualImg: propTypes.func,
  handleScale: propTypes.func
};

export default CreateAds;
