import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import * as routes from "../../../../lib/constants/routes";
import * as images from "../../../../lib/constants/images";
import { Link } from "react-router-dom";

const AdCardHeader = ({
  ad,
  isDescription,
  isInformation,
  handleFavorite,
  isLoading
}) => {
  const like_wrapper = classnames("like_wrapper", {
    "col-sm-2 col-xs-2 like_wrapper": isDescription && isInformation
  });
  const profile_route = ad.user.isOwner
    ? routes.NEWS_FEED_ROUTE
    : `${routes.NEWS_FEED_ROUTE}${ad.id}`;
  const favorite_icon = ad.isFavorite ? images.blue_heart : images.feed_like;
  return (
    <div className="feed_header">
      <div className="profile_image padding-right-15">
        <Link to={profile_route}>
          <img
            src={ad.user.image}
            alt="feed"
            className="img-circle img-responsive"
          />
        </Link>
      </div>
      <div className="col-sm-8 col-xs-7 no-padding">
        <Link to={profile_route}>
          <div className="normal_title">{ad.user.name}</div>
        </Link>
        {ad.category && (
          <div className="grey_title">Sponsored in {ad.category}</div>
        )}
      </div>
      <div className="col-sm-1 col-xs-1 like_wrapper" role="article">
        <button
          type="button"
          className="pull-right no-btn"
          onClick={handleFavorite}
          id={ad.id}
          onKeyDown={handleFavorite}
          disabled={isLoading}
        >
          <img src={favorite_icon} alt="like" role="presentation" />
        </button>
      </div>
    </div>
  );
};

AdCardHeader.propTypes = {
  handleFavorite: PropTypes.func.isRequired,
  ad: PropTypes.object.isRequired,
  isDescription: PropTypes.bool.isRequired,
  isInformation: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool
};

export default AdCardHeader;
