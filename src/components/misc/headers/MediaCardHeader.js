import React from "react";
import PropTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";
import { Link } from "react-router-dom";
import { DateFormat } from "../../Factory";
import { UserImageItem } from "../../ui-kit";

const MediaCardHeader = ({ item, handleFavorite, isLoading }) => {
  const profile_route = item.isOwner
    ? routes.NEWS_FEED_ROUTE
    : `${routes.NEWS_FEED_ROUTE}/${item.userName}`;
  const favorite_icon = item.isSelfLike ? images.blue_heart : images.feed_like;
  return (
    <div className="feed_header">
      <Link to={profile_route}>
          <UserImageItem item={item.profileImage} customClass={`img-circle img-responsive padding-right-15`} />
      </Link>
      <div className="col-sm-8 col-xs-7 no-padding">
        <Link
          to={profile_route}>
          <div className="normal_title">{item.userName}</div>
        </Link>
        {
          item.location && (
            <div className="secondary_title">{item.location.address}</div>
          )
        }
        {
          item.category && item.category.length && (
            <div className="grey_title">
              {DateFormat(item.createdAt)} in{" "}
              {item.category[0].categoryName}
            </div>
          )
        }
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
