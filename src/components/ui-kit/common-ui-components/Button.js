import React from "react";
import PropTypes from "prop-types";

const Button = (
  {
    className,
    text,
    tabIndex,
    type,
    onClick,
    name,
    id
  }
) => {
  return (
    <button
      className={className}
      onClick={onClick}
      tabIndex={tabIndex ? -1 : null}
      type={type || ''}
      name={name}
      id={id}
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
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string
};

export default Button;
