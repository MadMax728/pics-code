import React from "react";
import PropTypes from "prop-types";

const Button = ({
  className,
  text,
  tabIndex,
  type,
  onClick,
  name,
  disabled,
  id
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      tabIndex={tabIndex ? -1 : null}
      type={type || ""}
      name={name}
      id={id}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.any,
  type: PropTypes.string,
  tabIndex: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.any,
  name: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
