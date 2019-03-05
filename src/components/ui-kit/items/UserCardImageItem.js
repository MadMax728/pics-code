import React, { Component } from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import { UserImageItemLoader } from "../loading-indicator";
import * as images from "../../../lib/constants/images";

const UserCardImageItem = ( { item = images.profile_pic }) => {
  return (
      <div className="profile-img-wrapper">
        <LazyLoad height={200} once offset={[-200, 0]}  placeholder={<UserImageItemLoader />}>
            <img src={item} alt={"profile"} />
        </LazyLoad>
      </div>
  );
};

UserCardImageItem.propTypes = {
  item: PropTypes.string
};

export default UserCardImageItem;
