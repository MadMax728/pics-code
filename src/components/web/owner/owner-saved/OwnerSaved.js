import React from "react";
import { Saved } from "../../user";
import PropTypes from "prop-types";

const OwnerSaved = handleModalShow => {
  return <Saved handleModalShow={handleModalShow} />;
};

OwnerSaved.propTypes = {
  handleModalShow: PropTypes.func
};

export default OwnerSaved;
