import React from "react";
import { Saved } from "../../user";
import PropTypes from "prop-types";

const OtherSaved = handleModalShow => {
  return <Saved handleModalShow={handleModalShow} />;
};

OtherSaved.propTypes = {
  handleModalShow: PropTypes.func
};
export default OtherSaved;
