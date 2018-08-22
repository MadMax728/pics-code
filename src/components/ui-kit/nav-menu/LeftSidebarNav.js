import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const LeftSidebarNav = ({ header, links }) => {
  return (
    <div className="collapse navbar-collapse no-padding" id="left_menu">
      {header && (
        <div className="normal_title padding-15 hidden-xs">{header}</div>
      )}
      <ul className="nav navbar-nav pull-right">
        {links.map(link => {
          return (
            <li key={link.to}>
              <NavLink
                to={link.to}
                exact
                className={link.className}
                activeClassName={link.activeClassName}
              >
                <span>{link.text}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

LeftSidebarNav.propTypes = {
  header: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      text: PropTypes.string.isRequired,
      activeClassName: PropTypes.string,
      className: PropTypes.string
    }).isRequired
  ).isRequired
};

export default LeftSidebarNav;