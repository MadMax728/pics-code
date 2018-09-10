import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MobileSidebarMenu = ({ links }) => {
  return (
    <div>
      {links.map(link => {
        return (
          <Link key={link.to} to={link.to} className={link.className}>
            {link.text}
            <img
              src={link.image.name}
              alt={link.image.alt}
              className={link.image.className}
            />
          </Link>
        );
      })}
    </div>
  );
};

MobileSidebarMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      className: PropTypes.string,
      text: PropTypes.string,
      item: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          className: PropTypes.string,
          alt: PropTypes.string
        })
      )
    })
  )
};

export default MobileSidebarMenu;
