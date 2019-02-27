import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";
import { UserImageItem } from "../../ui-kit";

const FeedHeader = ({
  id,
  image,
  title,
  userName,
  category,
  isSelfLike,
  handleFavorite
}) => {
  const favorite_icon = isSelfLike ? images.blue_heart : images.feed_like;
  const profileImage = image || images.image;
  const profile_route = `${routes.NEWS_FEED_ROUTE}/${userName}`;
  return (
    <div className="feed_header">
      <UserImageItem
        item={profileImage}
        customClass={`img-circle img-responsive`}
      />
      <div className="col-sm-7 col-xs-7">
        <div className="normal_title">{title}</div>
        <Link to={profile_route} className="">
          <div className="secondary_title">{userName}</div>
        </Link>
        {category && <div className="grey_title">{category}</div>}
      </div>
      {handleFavorite && id && (
        <div className="col-sm-2 col-xs-2 like_wrapper">
          <img
            src={favorite_icon}
            alt="like-1"
            className="pull-right"
            role="presentation"
            onClick={handleFavorite}
            id={id}
            onKeyDown={handleFavorite}
          />
        </div>
      )}
    </div>
  );
};

FeedHeader.propTypes = {
  id: PropTypes.any,
  image: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  title: PropTypes.string,
  category: PropTypes.string,
  isSelfLike: PropTypes.bool,
  handleFavorite: PropTypes.func
};

export default FeedHeader;
