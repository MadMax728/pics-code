
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import { UserImageItem } from "../../ui-kit";

const SearchUserItem = ( { item }) => {
    return (
      <Link to={`${routes.ABOUT_ROUTE}/${item.username}`} key={item._id}>
        <div className="search-user-image">
            <UserImageItem customClass={'img-circle img-responsive padding-right-15'} item={item.profileUrl}></UserImageItem>
        </div>
        <div className="search-user-name">
          <div className="normal_title">{item.username}</div>
          <div className="secondary_title">{item.name || item.userType}</div>
        </div>
      </Link>
    );
};
  
SearchUserItem.propTypes = {
  item: PropTypes.any
};

export default SearchUserItem;
  