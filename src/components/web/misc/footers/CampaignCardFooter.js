import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";
import * as images from "../../../../lib/constants/images";
import { ThreeDots } from "../../../ui-kit";
import StatusCard from "../StatusCard";

const CampaignCardFooter = ({
  campaign,
  handleCommentsSections,
  isStatus,
  renderReportTips,
  handleFavorite
}) => {
  const favorite_icon = campaign.isSelfLike
    ? images.blue_heart
    : images.feed_like;   
  return (
    <div className="feed_footer padding-15">
      <div className="messages" role="article">
        <span className="count">{campaign.commentCount}</span>
        <img
          src={images.comment}
          alt="company-comments"
          onClick={handleCommentsSections}
          role="presentation"
          id={campaign.createdBy}
          onKeyDown={handleCommentsSections}
        />
      </div>
      <div className="likes" role="article">
        <span className="count">{campaign.likeCount}</span>
        <img
          src={favorite_icon}
          alt="like"
          className="pull-right"
          role="presentation"
          onClick={handleFavorite}
          id={campaign.id}
          onKeyDown={handleFavorite}
        />
      </div>
      <div className="show_more_options">
        <div className="share-wrapr">
          <img src={images.share} alt="share" />
        </div>
        <div className="social-media-wrapr" />
        <ThreeDots
          id="report"
          role="button"
          dataTip="tooltip"
          dataClass="tooltip-wrapr"
          getContent={renderReportTips}
          effect="solid"
          delayHide={500}
          delayShow={500}
          delayUpdate={500}
          place={"left"}
          border
          type={"light"}
        />
      </div>
      {campaign &&
        isStatus && (
          <StatusCard
            item={campaign}
            route={`${routes.BASE_SETTINGS_CAMPAIGN_STATISTICS_ROUTE}`}
          />
        )}
    </div>
  );
};

CampaignCardFooter.propTypes = {
  handleFavorite: propTypes.func.isRequired,
  handleCommentsSections: propTypes.func.isRequired,
  campaign: propTypes.object.isRequired,
  isStatus: propTypes.bool.isRequired,
  renderReportTips: propTypes.func.isRequired
};

export default CampaignCardFooter;
