import React, { Component } from "react";
import * as images from "../../../lib/constants/images";
import PropTypes from "prop-types";
import {
  updateBackOfficeReport,
  updateBackOfficeReview
} from "../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../lib/translations";

class Processed extends Component {
  render() {
    const { handleModalInfoHide } = this.props;
    return (
      <div>
        <div className="normal_title padding-15 modal-normal-title">
          {Translations.admin_login.proceed}
        </div>
        <div className="processed-options">
          <span
            role="button"
            tabIndex="0"
            onClick={this.handleProcessed}
            onKeyDown={this.onKeyDown}
          >
            <img src={images.green_tick} alt="green_tick" />
          </span>
          <span
            role="button"
            tabIndex="0"
            onClick={handleModalInfoHide}
            onKeyDown={this.onKeyDown}
          >
            <img src={images.close} alt="close" />
          </span>
        </div>
      </div>
    );
  }

  onKeyDown = () => {};

  handleProcessed = () => {
    const { modalInfo } = this.props;
    if (modalInfo.isBudget || modalInfo.isReview) {
      this.props.updateBackOfficeReview(modalInfo).then(() => {
        if (this.props.reviewData && !this.props.reviewData.error) {
          this.props.statusCallback();
          this.props.handleModalInfoHide();
        }
      });
    } else {
      this.props.updateBackOfficeReport(modalInfo).then(() => {
        if (
          this.props.reportedContentData &&
          !this.props.reportedContentData.error
        ) {
          this.props.statusCallback();
          this.props.handleModalInfoHide();
        }
      });
    }
  };
}

const mapStateToProps = state => ({
  reportedContentData: state.reportedContentData,
  reviewData: state.reviewData,
  isLoading: state.reportedContentData.isLoading,
  error: state.reportedContentData.error
});

const mapDispatchToProps = {
  updateBackOfficeReport,
  updateBackOfficeReview
};

Processed.propTypes = {
  handleModalInfoHide: PropTypes.func,
  reportedContentData: PropTypes.any,
  reviewData: PropTypes.any,
  modalInfo: PropTypes.any,
  updateBackOfficeReport: PropTypes.func,
  updateBackOfficeReview: PropTypes.func,
  statusCallback: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Processed);
