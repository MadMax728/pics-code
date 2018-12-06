import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({
  children,
  color,
  icon,
  iconOnly,
  size,
  noTabFocus,
  disabled,
  onClick
}) => {
  const buttonClass = classnames("button", {
    "button--primary": color === "primary",
    "button--secondary": color === "secondary",
    "button--tertiary": color === "tertiary",
    "button--disabled": disabled,
    "button--icon-only": iconOnly,
    "button--small": size === "small",
    "button--medium": size === "medium",
    "button--large": size === "large"
  });
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      tabIndex={noTabFocus ? -1 : null}
    >
      {icon && <i className={`button__icon ${icon}`} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  icon: PropTypes.string,
  iconOnly: PropTypes.bool,
  size: PropTypes.oneOf(["default", "small", "medium", "large"]),
  noTabFocus: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  color: "primary",
  size: "default",
  noTabFocus: false,
  disabled: false
};

export default Button;
