import React, { Component } from "react";
import { StepOne, StepTwo } from "./steps";
import PropTypes from "prop-types";
import { PaymentStepOne, PaymentStepTwo } from "../../user/payment/steps";

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
      maxClicks,
      handleChangeField,
      handleSubmit,
      handleDate,
      handleEditImage,
      handleLocation,
      handleActualImg,
      handleScale,
      handleSelect,
      handleSetState,
      userInfo,
      handleAddress,
      setVoucherData,
      calculateMaxClicks,
      isLoading
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
            userInfo={userInfo}
          />
        )}
        {stepIndex === 1 && (
          <StepTwo
            handleDate={handleDate}
            form={form}
            handleSelect={handleSelect}
            userInfo={userInfo}
            maxClicks={maxClicks}
            calculateMaxClicks={calculateMaxClicks}
          />
        )}
        {stepIndex === 2 && (
          <PaymentStepOne
            forThat={forThat}
            handleChangeField={handleChangeField}
            form={form}
            handleAddress={handleAddress}
            userInfo={userInfo}
          />
        )}
        {stepIndex === 3 && (
          <PaymentStepTwo
            forThat={forThat}
            handleModalInfoShow={handleModalInfoShow}
            form={form}
            handleChangeField={handleChangeField}
            handleSubmit={handleSubmit}
            setVoucherData={setVoucherData}
            userInfo={userInfo}
            isLoading={isLoading}
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
  userInfo: PropTypes.any,
  handleAddress: PropTypes.func.isRequired,
  setVoucherData: PropTypes.func,
  calculateMaxClicks: PropTypes.func,
  maxClicks: PropTypes.any,
  isLoading: PropTypes.bool.isRequired
};

export default CreateAds;
