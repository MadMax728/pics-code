import React, { Component } from "react";
import propTypes from "prop-types";

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
      <div className={"modal-body"}>
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
  handleModalInfoHide: propTypes.func,
  handleModalHide: propTypes.func,
  modalInfoMsg: propTypes.string
};

export default PaymentConfirmation;
