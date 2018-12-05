import React from "react";
import propTypes from "prop-types";
import * as images from "../../../../lib/constants/images";
import { ThreeDots } from "../../../ui-kit";

const MediaCardFooter = ({
  isLoading,
  item,
  handleCommentsSections,
  renderReportTips,
  handleFavorite
}) => {
  const favorite_icon = item.isSelfLike ? images.blue_heart : images.feed_like;
  return (
    <div className="feed_footer padding-15">
      <div className="messages" role="article">
        <span className="count">{item.commentCount}</span>
        <img
          src={images.comment}
          alt="company-comments"
          onClick={handleCommentsSections}
          role="presentation"
          id={item.createdBy}
          onKeyDown={handleCommentsSections}
        />
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
    </div>
  );
};

MediaCardFooter.propTypes = {
  handleFavorite: propTypes.func.isRequired,
  handleCommentsSections: propTypes.func.isRequired,
  item: propTypes.object.isRequired,
  renderReportTips: propTypes.func.isRequired,
  isLoading: propTypes.bool.isRequired
};

export default MediaCardFooter;
