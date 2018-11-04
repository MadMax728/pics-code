import React, { Component } from "react";
import { Saved } from "../../user";
import PropTypes from "prop-types";

class OwnerSaved extends Component {
  render() {
    const { handleModalShow, handleModalInfoShow } = this.props;
    return (
      <Saved
        handleModalShow={handleModalShow}
        handleModalInfoShow={handleModalInfoShow}
      />
    );
  }
}

OwnerSaved.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default OwnerSaved;
