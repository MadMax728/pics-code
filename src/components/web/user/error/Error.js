import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../../lib/translations";
import { Button } from "../../../ui-kit";

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleModalHides = () => {
    this.props.handleModalInfoHide();
  };

  render() {
    const { modalInfoMsg } = this.props;
    return (
      <div className={"col-xs-12 no-padding"}>
        <div className="col-sm-12 margin-bottom-10">
          {modalInfoMsg}
        </div>
        <div className="col-sm-12">
          <Button className="filled_button" onClick={this.handleModalHides}
            text={Translations.modal_header.continue}
          />
        </div>
      </div>
    );
  }
}

Error.propTypes = {
  handleModalInfoHide: PropTypes.func,
  modalInfoMsg: PropTypes.string
};

export default Error;
