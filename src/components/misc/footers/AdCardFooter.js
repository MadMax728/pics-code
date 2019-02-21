import React from "react";
import PropTypes from "prop-types";
import * as routes from "../../../lib/constants/routes";
import * as images from "../../../lib/constants/images";
import { ThreeDots, Button } from "../../ui-kit";
import StatusCard from "../StatusCard";
import ReportCard from "../ReportCard";
import ReviewCard from "../ReviewCard";
import BudgetCard from "../BudgetCard";

const AdCardFooter = ({
  ad,
  handleCommentsSections,
  isStatus,
  renderReportTips,
  handleFavorite,
  isLoading,
  isBudget,
  isReport,
  isReview
}) => {
  const favorite_icon = ad.isSelfLike ? images.blue_heart : images.feed_like;
  return (
    <div className="feed_footer padding-15">
      <div className="messages" role="article">
        <span className="count">{ad.commentCount}</span>
        <Button
          type="button"
          className="pull-right no-btn"
          onClick={handleCommentsSections}
          id={ad.createdBy._id}
          disabled={isLoading}
          text={<img
            src={images.comment}
            alt="company-comments"
            role="presentation"
          />}
        />
      </div>
      <div className="likes" role="article">
        <span className="count">{ad.likeCount}</span>
        <Button
          type="button"
          className="pull-right no-btn"
          onClick={handleFavorite}
          id={ad.id}
          disabled={isLoading}
          text={<img src={favorite_icon} alt="like" role="presentation" />}
        />
      </div>
      <div className="show_more_options">
        <ThreeDots
          id={`report-${ad.id}`}
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
      {ad && isStatus && (
        <StatusCard
          item={ad}
          route={`${routes.BASE_SETTINGS_AD_STATISTICS_ROUTE}`}
          isFor="ad"
        />
      )}
      {ad && isBudget && <BudgetCard item={ad} />}
      {ad && isReport && <ReportCard item={ad} />}
      {ad && isReview && <ReviewCard item={ad} />}
    </div>
  );
};

AdCardFooter.propTypes = {
  handleFavorite: PropTypes.func.isRequired,
  handleCommentsSections: PropTypes.func.isRequired,
  ad: PropTypes.object.isRequired,
  isStatus: PropTypes.bool.isRequired,
  renderReportTips: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isBudget: PropTypes.bool,
  isReport: PropTypes.bool,
  isReview: PropTypes.bool
};

export default AdCardFooter;
