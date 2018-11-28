import React from "react";
import propTypes from "prop-types";
import * as routes from "../../../../lib/constants/routes";
import * as images from "../../../../lib/constants/images";
import { Link } from "react-router-dom";

const VideoCardHeader = ({ video, handleFavorite }) => {
  const profile_route = video.user.isOwner
    ? routes.NEWS_FEED_ROUTE
    : `${routes.NEWS_FEED_ROUTE}${video.id}`;
  const favorite_icon = video.isFavorite ? images.blue_heart : images.feed_like;
  return (
    <div className="feed_header">
      <div className="no-padding profile_image">
        <Link to={profile_route}>
          <img
            src={video.user.image}
            alt="feed"
            className="img-circle img-responsive"
          />
        </Link>
      </div>
      <div className="col-sm-9 col-xs-7 no-padding">
        <Link
          to={{
            pathname: `${routes.BASE_VIDEO_INFORMATION_ROUTE}${video.id}`,
            state: { _id: video.id }
          }}
        >
          <div className="normal_title">{video.title}</div>
        </Link>
        {video.category && <div className="grey_title">{video.category}</div>}
      </div>
      <div className="col-sm-2 col-xs-2 like_wrapper" role="article">
        <img
          src={favorite_icon}
          alt="like"
          className="pull-right"
          role="presentation"
          onClick={handleFavorite}
          id={video.id}
          onKeyDown={handleFavorite}
        />
      </div>
    </div>
  );
};

VideoCardHeader.propTypes = {
  handleFavorite: propTypes.func.isRequired,
  video: propTypes.object.isRequired
};

export default VideoCardHeader;
