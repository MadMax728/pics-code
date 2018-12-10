import React, { Component } from "react";
import PropTypes from "prop-types";

class PaymentConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleModalHides = () => {
    this.props.handleModalHide();
    this.props.handleModalInfoHide();
  };

  render() {
    const { modalInfoMsg } = this.props;
    return (
      <div className={"col-xs-12 no-padding"}>
        <div className="col-sm-12 margin-bottom-10">
          Your {modalInfoMsg} is pending review whitin the next 48 hours.
        </div>
        <div className="col-sm-12">
          <button className="filled_button" onClick={this.handleModalHides}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

PaymentConfirmation.propTypes = {
  handleModalInfoHide: PropTypes.func,
  handleModalHide: PropTypes.func,
  modalInfoMsg: PropTypes.string
};

export default PaymentConfirmation;
