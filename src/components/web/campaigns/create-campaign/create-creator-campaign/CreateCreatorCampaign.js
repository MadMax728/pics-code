import React, { Component } from "react";
import { StepOne, StepTwo, StepThree } from "../steps";
import PropTypes from "prop-types";

class CreateCreatorCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      stepIndex,
      isPreview,
      form,
      maxClicks,
      isFor,
      handleChangeField,
      handleDate,
      handleContentChange,
      handleEditImage,
      handleLocation,
      handleActualImg,
      handleScale,
      handleSelect,
      userInfo,
      calculateMaxClicks,
      isEdit,
      handleModalInfoMsgShow
    } = this.props;

    return (
      <div className="col-xs-12 no-padding">
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
              handleSelect={handleSelect}
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
  isPreview: PropTypes.bool.isRequired,
  handleChangeField: PropTypes.func.isRequired,
  isFor: PropTypes.bool.isRequired,
  form: PropTypes.any.isRequired,
  handleDate: PropTypes.func.isRequired,
  handleContentChange: PropTypes.func.isRequired,
  handleEditImage: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
  handleActualImg: PropTypes.func,
  handleScale: PropTypes.func,
  handleSelect: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
  calculateMaxClicks: PropTypes.func,
  maxClicks: PropTypes.any,
  isEdit: PropTypes.bool.isRequired,
  handleModalInfoMsgShow: PropTypes.func.isRequired
};

export default CreateCreatorCampaign;
