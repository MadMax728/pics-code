import React, { Component } from "react";
import { StepOne, StepTwo } from "../steps";
import { PaymentStepOne, PaymentStepTwo } from "../../../user/payment/steps";
import PropTypes from "prop-types";
import { InlineLoading } from "../../../../ui-kit";

class CreateCompanyCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      stepIndex,
      forThat,
      handleModalInfoShow,
      isPreview,
      form,
      maxClicks,
      isFor,
      handleChangeField,
      handleSubmit,
      handleDate,
      handleContentChange,
      handleEditImage,
      handleLocation,
      handleActualImg,
      handleScale,
      handleSelect,
      userInfo,
      handleAddress,
      calculateMaxClicks,
      isLoading,
      isEdit,
      handleSetState
    } = this.props;
    return (
      <div className="col-xs-12 no-padding">
          {isLoading && <InlineLoading />}
        {!isPreview &&
          (stepIndex === 0 && (
            <StepOne
              handleChangeField={handleChangeField}
              form={form}
              isFor={isFor}
              userInfo={userInfo}
              handleEditImage={handleEditImage}
              handleLocation={handleLocation}
              handleActualImg={handleActualImg}
              handleScale={handleScale}
              handleSelect={handleSelect}
              isEdit={isEdit}
              handleSetState={handleSetState}
            />
          ))}
        {!isPreview &&
          (stepIndex === 1 && (
            <StepTwo
              handleChangeField={handleChangeField}
              form={form}
              handleDate={handleDate}
              handleSelect={handleSelect}
              userInfo={userInfo}
              calculateMaxClicks={calculateMaxClicks}
              maxClicks={maxClicks}
            />
          ))}
        {!isPreview &&
          (stepIndex === 2 && (
            <PaymentStepOne
              handleAddress={handleAddress}
              forThat={forThat}
              form={form}
              handleChangeField={handleChangeField}
              userInfo={userInfo}
            />
          ))}
        {!isPreview &&
          (stepIndex === 3 && (
            <PaymentStepTwo
              forThat={forThat}
              handleModalInfoShow={handleModalInfoShow}
              form={form}
              handleSubmit={handleSubmit}
              userInfo={userInfo}
              isLoading={isLoading}
              isEdit={isEdit}
            />
          ))}
      </div>
    );
  }
}

CreateCompanyCampaign.propTypes = {
  stepIndex: PropTypes.any.isRequired,
  forThat: PropTypes.string.isRequired,
  handleModalInfoShow: PropTypes.func.isRequired,
  isPreview: PropTypes.bool.isRequired,
  handleChangeField: PropTypes.func.isRequired,
  isFor: PropTypes.bool.isRequired,
  form: PropTypes.any.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleDate: PropTypes.func.isRequired,
  handleContentChange: PropTypes.func.isRequired,
  handleEditImage: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
  handleActualImg: PropTypes.func,
  handleScale: PropTypes.func,
  handleSelect: PropTypes.func.isRequired,
  handleAddress: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
  calculateMaxClicks: PropTypes.func,
  maxClicks: PropTypes.any,
  isLoading: PropTypes.bool.isRequired,
  isEdit: PropTypes.bool.isRequired,
  handleSetState: PropTypes.func
};

export default CreateCompanyCampaign;
