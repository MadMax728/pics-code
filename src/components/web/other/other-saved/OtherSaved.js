import React, { Component } from "react";
import { Saved } from "../../user";
import PropTypes from "prop-types";

class OtherSaved extends Component {
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

OtherSaved.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};
export default OtherSaved;
