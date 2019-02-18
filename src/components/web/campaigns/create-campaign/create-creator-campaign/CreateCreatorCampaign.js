import React, { Component } from "react";
import { StepOne, StepTwo, StepThree } from "../steps";
import { Preview } from "../preview";
import PropTypes from "prop-types";
import { PaymentStepOne, PaymentStepTwo } from "../../../user/payment/steps";
import * as images from "../../../../../lib/constants/images";
import { Button } from "../../../../ui-kit";

class CreateCreatorCampaign extends Component {
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
      handlePrivewClose,
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
      handleOfferTagChange,
      handleOfferTagDelete,
      handleInquiryTagChange,
      handleInquiryTagDelete,
      handleSelect,
      handleVideo,
      userInfo,
      handleAddress,
      setVoucherData,
      calculateMaxClicks,
      isLoading,
      isEdit,
      handleModalInfoMsgShow
    } = this.props;

    return (
      <div className="col-xs-12 no-padding">
        {isPreview && <Preview form={form} />}
        {isPreview && (
          <Button
            onClick={handlePrivewClose}
            className={"closeBtn right-side-close"}
            text={
              <img
                src={images.white_close}
                alt={"cross"}
                style={{ height: "10px", width: "10px" }}
              />
            }
          />
        )}
        {!isPreview &&
          (stepIndex === 0 && (
            <StepOne
              handleChangeField={handleChangeField}
              form={form}
              isFor={isFor}
              handleEditImage={handleEditImage}
              handleLocation={handleLocation}
              handleActualImg={handleActualImg}
              handleScale={handleScale}
              handleInquiryTagChange={handleInquiryTagChange}
              handleInquiryTagDelete={handleInquiryTagDelete}
              handleOfferTagChange={handleOfferTagChange}
              handleOfferTagDelete={handleOfferTagDelete}
              handleSelect={handleSelect}
              handleVideo={handleVideo}
              userInfo={userInfo}
              isEdit={isEdit}
            />
          ))}
        {!isPreview &&
          (stepIndex === 1 && (
            <StepTwo
              handleChangeField={handleChangeField}
              form={form}
              handleContentChange={handleContentChange}
              userInfo={userInfo}
              handleModalInfoMsgShow={handleModalInfoMsgShow}
            />
          ))}
        {!isPreview &&
          (stepIndex === 2 && (
            <StepThree
              handleChangeField={handleChangeField}
              handleDate={handleDate}
              handleSelect={handleSelect}
              form={form}
              userInfo={userInfo}
              calculateMaxClicks={calculateMaxClicks}
              maxClicks={maxClicks}
            />
          ))}
      </div>
    );
  }
}

CreateCreatorCampaign.propTypes = {
  stepIndex: PropTypes.any.isRequired,
  forThat: PropTypes.string.isRequired,
  handleModalInfoShow: PropTypes.func.isRequired,
  isPreview: PropTypes.bool.isRequired,
  handlePrivewClose: PropTypes.func.isRequired,
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
  handleOfferTagChange: PropTypes.func.isRequired,
  handleOfferTagDelete: PropTypes.func.isRequired,
  handleInquiryTagChange: PropTypes.func.isRequired,
  handleInquiryTagDelete: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleVideo: PropTypes.func.isRequired,
  handleAddress: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
  setVoucherData: PropTypes.func,
  calculateMaxClicks: PropTypes.func,
  maxClicks: PropTypes.any,
  isLoading: PropTypes.bool.isRequired,
  isEdit: PropTypes.bool.isRequired,
  handleModalInfoMsgShow: PropTypes.func.isRequired
};

export default CreateCreatorCampaign;
