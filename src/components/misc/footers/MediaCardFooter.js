import React from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";
import { ThreeDots } from "../../ui-kit";
import ReportCard from "../ReportCard";

const MediaCardFooter = ({
  isLoading,
  item,
  handleCommentsSections,
  renderReportTips,
  handleFavorite,
  isReport
}) => {
  const favorite_icon = item.isSelfLike ? images.blue_heart : images.feed_like;
  return (
    <div className="feed_footer padding-15">
      <div className="messages" role="article">
        <span className="count">{item.commentCount}</span>
        <button
          type="button"
          className="pull-right no-btn"
          onClick={handleCommentsSections}
          id={item.createdBy}
          onKeyDown={handleCommentsSections}
          disabled={isLoading}
        >
          <img
            src={images.comment}
            alt="company-comments"
            role="presentation"
          />
        </button>
      </div>
      <div className="likes" role="article">
        <span className="count">{item.likeCount}</span>
        <button
          type="button"
          className="pull-right no-btn"
          onClick={handleFavorite}
          id={item.id}
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
      {item && isReport && (
        <ReportCard
          item={item}
        />
      )}
    </div>
  );
};

MediaCardFooter.propTypes = {
  handleFavorite: PropTypes.func.isRequired,
  handleCommentsSections: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  renderReportTips: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isReport: PropTypes.bool
};

export default MediaCardFooter;
