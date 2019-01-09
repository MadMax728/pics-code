import React, { Component } from "react";
import * as images from "../../../lib/constants/images";
import PropTypes from "prop-types";
import { updateBackOfficeReport } from "../../../actions";
import { connect } from "react-redux";

class Processed extends Component {
  onKeyDown = () => {};

  handleProcessed = () => {
    const { modalInfo } = this.props;
    this.props.updateBackOfficeReport(modalInfo).then(()=> {
      if(this.props.reportedContentData && !this.props.reportedContentData.error) {
        this.props.statusCallback();
        this.props.handleModalInfoHide();
      }
    });
  }

  render() {
    const { handleModalInfoHide } = this.props;
    return (
      <div>
        <div className="normal_title padding-15 modal-normal-title">
          Processed ?
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
}


const mapStateToProps = state => ({
  reportedContentData: state.reportedContentData,
  isLoading: state.reportedContentData.isLoading,
  error: state.reportedContentData.error
});

const mapDispatchToProps = {
  updateBackOfficeReport
};

Processed.propTypes = {
  handleModalInfoHide: PropTypes.func,
  reportedContentData: PropTypes.any,
  modalInfo: PropTypes.any,
  updateBackOfficeReport: PropTypes.func,
  statusCallback: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Processed);
