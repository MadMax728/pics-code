import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import * as routes from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";
import { Link } from "react-router-dom";
import { DateFormat } from "../../Factory";
import { Translations } from "../../../lib/translations";
import { UserImageItem } from "../../ui-kit";

const CampaignCardHeader = ({
  campaign,
  isDescription,
  isInformation,
  handleFavorite,
  isLoading
}) => {
  const like_wrapper = classnames("like_wrapper", {
    "col-sm-2 col-xs-2 like_wrapper": isDescription && isInformation
  });

  const profile_route = campaign.isOwner
    ? routes.NEWS_FEED_ROUTE
    : `${routes.NEWS_FEED_ROUTE}/${campaign.userName}`;
  const favorite_icon = campaign.isSelfLike
    ? images.blue_heart
    : images.feed_like;

  return (
    <div className="feed_header">
      <Link to={profile_route}>
            <UserImageItem item={campaign.profileImage} customClass={`img-circle img-responsive padding-right-15`} />
      </Link>
      <div className="no-padding titles_wrapper">
        <Link to={profile_route} className="">
          <div className="normal_title">{campaign.userName}</div>
        </Link>
        <div className="normal_sub_title ">{Translations.landing.published_a_campaign}</div>
        <div className="secondary_title">{campaign.location && campaign.location.address && campaign.location.address}</div>
        {campaign.category && (
          <div className="grey_title">
            {DateFormat(campaign.createdAt, Translations.date_format.time, true)} in{" "}
            {campaign.category[0].categoryName}
          </div>
        )}
      </div>
      <div className={like_wrapper} role="article">
        <button
          type="button"
          className="pull-right no-btn"
          onClick={handleFavorite}
          id={campaign.id}
          onKeyDown={handleFavorite}
          disabled={isLoading}
        >
          <img src={favorite_icon} alt="like" role="presentation" />
        </button>
      </div>
    </div>
  );
};

CampaignCardHeader.propTypes = {
  handleFavorite: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
  isDescription: PropTypes.bool.isRequired,
  isInformation: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool
};

export default CampaignCardHeader;
