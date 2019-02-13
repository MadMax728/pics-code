import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../../lib/translations";

class PaymentConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleModalHides = () => {
    this.props.handleModalInfoHide();
    this.props.handleModalHide();
  };

  render() {
    const { modalInfoMsg } = this.props;
    return (
      <div className={"col-xs-12 no-padding"}>
        <div className="col-sm-12 margin-bottom-10">
          {Translations.payment.your} {modalInfoMsg} {Translations.payment.review}
        </div>
        <div className="col-sm-12">
          <button className="filled_button" onClick={this.handleModalHides}>
            {Translations.modal_header.continue}
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
