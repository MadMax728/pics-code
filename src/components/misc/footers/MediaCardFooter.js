import React from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";
import { ThreeDots, Button } from "../../ui-kit";
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
        <Button
          type="button"
          className="pull-right no-btn"
          onClick={handleCommentsSections}
          id={item.createdBy}
          disabled={isLoading}
          text={<img
            src={images.comment}
            alt="company-comments"
            role="presentation"
          />}
        />
      </div>
      <div className="likes" role="article">
        <span className="count">{item.likeCount}</span>
        <Button
          type="button"
          className="pull-right no-btn"
          onClick={handleFavorite}
          id={item.id}
          disabled={isLoading}
          text={<img src={favorite_icon} alt="like" role="presentation" />}
        />
      </div>
      <div className="show_more_options">
        <ThreeDots
          id={`report-${item.id}`}
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
      {item && isReport && <ReportCard item={item} />}
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
