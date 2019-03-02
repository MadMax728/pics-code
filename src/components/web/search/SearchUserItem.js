
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import { UserImageItem, UserTitleItem } from "../../ui-kit";

const SearchUserItem = ( { item, close }) => {
    return (
      <Link to={`${routes.ABOUT_ROUTE}/${item.username}`} key={item._id} onClick={close}>
        <div className="search-user-image">
            <UserImageItem customClass={'img-circle img-responsive padding-right-15'} item={item.profileUrl}></UserImageItem>
        </div>
        <div className="search-user-name">
          <UserTitleItem title={item.name} username={item.username}></UserTitleItem>
        </div> 
      </Link>
    );
};
  
SearchUserItem.propTypes = {
  item: PropTypes.any,
  close: PropTypes.any
};

export default SearchUserItem;
  