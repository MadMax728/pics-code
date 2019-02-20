import React from "react";
import PropTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";
import { Link } from "react-router-dom";
import { UserImageItem, Button } from "../../ui-kit";
import classnames from "classnames";
import { Translations } from "../../../lib/translations";

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

  const profile_route = ad.isOwner
    ? routes.NEWS_FEED_ROUTE
    : `${routes.NEWS_FEED_ROUTE}/${ad.userName}`;
  const favorite_icon = ad.isSelfLike ? images.blue_heart : images.feed_like;
  return (
    <div className="feed_header">
      <Link to={profile_route}>
          <UserImageItem item={ad.profileImage} customClass={`img-circle img-responsive padding-right-15`} />
      </Link>
      <div className="col-sm-8 col-xs-7 no-padding">
        <Link to={profile_route}>
          <div className="normal_title">{ad.userName}</div>
        </Link>
        {ad.category && (
          <div className="grey_title">
            {Translations.sponsored_in}{" "}
            {ad.category[0].categoryName}
          </div>
        )}
      </div>
      <div className={like_wrapper} role="article">
        <Button
          type="button"
          className="pull-right no-btn"
          onClick={handleFavorite}
          id={ad.id}
          disabled={isLoading}
          text={<img src={favorite_icon} alt="like" role="presentation" />}
        />
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
