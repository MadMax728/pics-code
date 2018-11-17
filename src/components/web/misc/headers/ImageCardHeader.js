import React from "react";
import propTypes from "prop-types";
import * as routes from "../../../../lib/constants/routes";
import * as images from "../../../../lib/constants/images";
import { Link } from "react-router-dom";

const ImageCardHeader = ({ image, handleFavorite }) => {
  const profile_route = image.user.isOwner
    ? routes.NEWS_FEED_ROUTE
    : `${routes.NEWS_FEED_ROUTE}${image.id}`;
  const favorite_icon = image.isFavorite ? images.blue_heart : images.feed_like;
  return (
    <div className="feed_header">
      <div className="col-sm-1 col-xs-1 no-padding no-padding profile_image">
        <Link to={profile_route}>
          <img
            src={image.user.image}
            alt="feed"
            className="img-circle img-responsive"
          />
        </Link>
      </div>
      <div className="col-sm-9 col-xs-7 no-padding">
        <Link
          to={{
            pathname: `${routes.BASE_IMAGE_INFORMATION_ROUTE}${image.id}`,
            state: { _id: image.id }
          }}
        >
          <div className="normal_title">{image.title}</div>
        </Link>
        {image.category && <div className="grey_title">{image.category}</div>}
      </div>
      <div className="col-sm-2 col-xs-2 like_wrapper" role="article">
        <img
          src={favorite_icon}
          alt="like"
          className="pull-right"
          role="presentation"
          onClick={handleFavorite}
          id={image.id}
          onKeyDown={handleFavorite}
        />
      </div>
    </div>
  );
};

ImageCardHeader.propTypes = {
  handleFavorite: propTypes.func.isRequired,
  image: propTypes.object.isRequired
};

export default ImageCardHeader;
