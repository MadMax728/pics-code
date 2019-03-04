import React, { Component } from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import { UserImageItemLoader } from "../loading-indicator";
import * as images from "../../../lib/constants/images";

const UserCardImageItem = ( { item = images.profile_pic }) => {
  return (
    <LazyLoad height={200} once offset={[-200, 0]}  placeholder={<UserImageItemLoader />}>
        <div className="profile-img-wrapper">
            <img src={item} alt={"profile"} />
        </div>
    </LazyLoad>
  );
};

UserCardImageItem.propTypes = {
  item: PropTypes.string
};

export default UserCardImageItem;
