import React, { Component } from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";

const UserProfileImage = ( { item, userName }) => {
  return (
    <div className="user-image bg-white no-padding">
        <LazyLoad height={75} once offset={[-75, 0]}>
          {item && (
            <img
              src={item}
              role="presentation"
              width="100%"
              alt="profile"
            />
          )}
        </LazyLoad>
    </div>
  );
};

UserProfileImage.propTypes = {
  item: PropTypes.string.isRequired,
  userName: PropTypes.string
};

export default UserProfileImage;
