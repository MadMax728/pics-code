import React from "react";
import PropTypes from "prop-types";

const Button = (
  {
    className,
    text,
    tabIndex,
    type,
    onClick
  }
) => {
  return (
    <button
      className={className}
      onClick={onClick}
      tabIndex={tabIndex ? -1 : null}
      type={type}
    >
     {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
  tabIndex: PropTypes.string,
  className: PropTypes.string
};

export default Button;
