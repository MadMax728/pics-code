import React, { Component } from "react";
import { Saved } from "../../web/user";
import PropTypes from "prop-types";

class OtherSavedPage extends Component {
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

OtherSavedPage.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};
export default OtherSavedPage;
