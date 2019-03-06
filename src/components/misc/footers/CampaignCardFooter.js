import React from "react";
import PropTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";
import { ThreeDots, Button } from "../../ui-kit";
import StatusCard from "../StatusCard";
import BudgetCard from "../BudgetCard";
import ReportCard from "../ReportCard";

const CampaignCardFooter = ({
  campaign,
  handleCommentsSections,
  isStatus,
  renderReportTips,
  handleFavorite,
  isLoading,
  isBudget,
  isReport,
  handeleShare
}) => {
  const favorite_icon = campaign.isSelfLike
    ? images.blue_heart
    : images.feed_like;
  return (
    <div className="feed_footer padding-15">
      <div className="messages" role="article">
        <span className="count">{campaign.commentCount}</span>
        <Button
          type="button"
          className="pull-right no-btn"
          onClick={handleCommentsSections}
          id={campaign._id}
          disabled={isLoading}
          text={
            <img
              src={images.comment}
              alt="company-comments"
              role="presentation"
            />
          }
        />
      </div>
      <div className="likes" role="article">
        <span className="count">{campaign.likeCount}</span>
        <Button
          type="button"
          className="pull-right no-btn"
          onClick={handleFavorite}
          id={campaign._id}
          disabled={isLoading}
          text={<img src={favorite_icon} alt="like" role="presentation" />}
        />
      </div>
      <div className="show_more_options">
        <div
          className="share-wrapr"
          onClick={handeleShare}
          onKeyDown={handeleShare}
          role="button"
          tabIndex="0"
        >
          <img src={images.share} alt="share" />
        </div>
        <div className="social-media-wrapr" />
        <ThreeDots
          id={`report-${campaign._id}`}
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
      {campaign && isStatus && (
        <StatusCard
          item={campaign}
          route={`${routes.BASE_SETTINGS_CAMPAIGN_STATISTICS_ROUTE}`}
          isFor="campaign"
        />
      )}
      {campaign && isBudget && <BudgetCard item={campaign} />}
      {campaign && isReport && <ReportCard item={campaign} />}
    </div>
  );
};

CampaignCardFooter.propTypes = {
  handleFavorite: PropTypes.func.isRequired,
  handleCommentsSections: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
  isStatus: PropTypes.bool.isRequired,
  isBudget: PropTypes.bool.isRequired,
  isReport: PropTypes.bool.isRequired,
  renderReportTips: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  handeleShare: PropTypes.func
};

export default CampaignCardFooter;
