import React from "react";
import propTypes from "prop-types";
import * as routes from "../../../../lib/constants/routes";
import * as images from "../../../../lib/constants/images";
import { ThreeDots } from "../../../ui-kit";
import StatusCard from "../StatusCard";

const AdCardFooter = ({
  ad,
  handleCommentsSections,
  isStatus,
  renderReportTips,
  handleFavorite,
  isLoading
}) => {
  const favorite_icon = ad.isFavorite ? images.blue_heart : images.feed_like;
  return (
    <div className="feed_footer padding-15">
      <div className="messages" role="article">
        <span className="count">{ad.commentCount}</span>
        <img
          src={images.comment}
          alt="company-comments"
          onClick={handleCommentsSections}
          role="presentation"
          id={ad.user.id}
          onKeyDown={handleCommentsSections}
        />
      </div>
      <div className="likes" role="article">
        <span className="count">{ad.likeCount}</span>
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
      <div className="show_more_options">
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
      {ad && isStatus && (
        <StatusCard
          item={ad}
          route={`${routes.BASE_SETTINGS_AD_STATISTICS_ROUTE}`}
        />
      )}
    </div>
  );
};

AdCardFooter.propTypes = {
  handleFavorite: propTypes.func.isRequired,
  handleCommentsSections: propTypes.func.isRequired,
  ad: propTypes.object.isRequired,
  isStatus: propTypes.bool.isRequired,
  renderReportTips: propTypes.func.isRequired,
  isLoading: propTypes.bool.isRequired
};

export default AdCardFooter;
