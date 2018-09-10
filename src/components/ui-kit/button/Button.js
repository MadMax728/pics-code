import React from "react";
import propTypes from "prop-types";
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
  onClick: propTypes.func.isRequired,
  children: propTypes.oneOfType([propTypes.element, propTypes.string]),
  color: propTypes.oneOf(["primary", "secondary", "tertiary"]),
  icon: propTypes.string,
  iconOnly: propTypes.bool,
  size: propTypes.oneOf(["default", "small", "medium", "large"]),
  noTabFocus: propTypes.bool,
  disabled: propTypes.bool
};

Button.defaultProps = {
  color: "primary",
  size: "default",
  noTabFocus: false,
  disabled: false
};

export default Button;
