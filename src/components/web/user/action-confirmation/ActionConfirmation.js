import React, { Component } from "react";
import PropTypes from "prop-types";

class ActionConfirmation extends Component {
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
        <div className="col-sm-12 margin-bottom-10">Are you want to sure ?</div>
        <div className="col-sm-12">
          <button className="filled_button col-sm-6">Cancel</button>
          <button className="filled_button col-sm-6">Yes</button>
        </div>
      </div>
    );
  }
}

ActionConfirmation.propTypes = {
  handleModalInfoHide: PropTypes.func,
  handleModalHide: PropTypes.func,
  modalInfoMsg: PropTypes.string
};

export default ActionConfirmation;
