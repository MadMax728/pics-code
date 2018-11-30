import React from "react";
import propTypes from "prop-types";
import * as routes from "../../../../lib/constants/routes";
import * as images from "../../../../lib/constants/images";
import { Link } from "react-router-dom";
import moment from "moment";

const MediaCardHeader = ({ item, handleFavorite }) => {
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
      <div className="col-sm-9 col-xs-7 no-padding">
        <Link
          to={{
            pathname: `${routes.BASE_IMAGE_INFORMATION_ROUTE}${item.id}`,
            state: { _id: item.id }
          }}
        >
          <div className="normal_title">{item.title}</div>
        </Link>
        {item.category && (
          <div className="grey_title">{moment(item.createdAt).format('MMMM Do YYYY')} in {item.category[0].categoryName}</div>
        )}
      </div>
      <div className="col-sm-1 col-xs-1 like_wrapper" role="article">
        <img
          src={favorite_icon}
          alt="like"
          className="pull-right"
          role="presentation"
          onClick={handleFavorite}
          id={item.id}
          onKeyDown={handleFavorite}
        />
      </div>
    </div>
  );
};

MediaCardHeader.propTypes = {
  handleFavorite: propTypes.func.isRequired,
  item: propTypes.object.isRequired
};

export default MediaCardHeader;
