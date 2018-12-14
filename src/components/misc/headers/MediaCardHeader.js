import React from "react";
import PropTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";
import { Link } from "react-router-dom";
import { DateFormat } from "../../Factory";

const MediaCardHeader = ({ item, handleFavorite, isLoading }) => {
  const profile_route = item.isOwner
    ? routes.NEWS_FEED_ROUTE
    : `${routes.NEWS_FEED_ROUTE}/${item.createdBy}`;
  const favorite_icon = item.isSelfLike ? images.blue_heart : images.feed_like;
  return (
    <div className="feed_header">
      <div className="profile_image padding-right-15">
        <Link to={profile_route}>
          <img
            src={item.profileImage}
            alt="feed"
            className="img-circle img-responsive"
          />
        </Link>
      </div>
      <div className="col-sm-8 col-xs-7 no-padding">
        <Link
          to={profile_route}>
          <div className="normal_title">{item.userName}</div>
        </Link>
        <div className="secondary_title">{item.location.address}</div>
        {item.category && (
          <div className="grey_title">
            {DateFormat(item.createdAt)} in{" "}
            {item.category[0].categoryName}
          </div>
        )}
      </div>
      <div className="col-sm-1 col-xs-1 like_wrapper" role="article">
        <button
          type="button"
          className="pull-right no-btn"
          onClick={handleFavorite}
          id={item.id}
          onKeyDown={handleFavorite}
          disabled={isLoading}
        >
          <img src={favorite_icon} alt="like" role="presentation" />
        </button>
      </div>
    </div>
  );
};

MediaCardHeader.propTypes = {
  handleFavorite: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  isLoading: PropTypes.bool
};

export default MediaCardHeader;
