import React from "react";
import PropTypes from "prop-types";
import ReadMoreReact from "read-more-react";

const propTypes = {
  text: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  ideal: PropTypes.number.isRequired
};

const ReadMore = ({ text, min, max, ideal }) => {
  return <ReadMoreReact text={text} min={min} max={max} ideal={ideal} />;
};

ReadMore.propTypes = propTypes;

export default ReadMore;
