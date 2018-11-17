import React from "react";
import propTypes from "prop-types";
import * as images from "../../../../lib/constants/images";
import { ThreeDots } from "../../../ui-kit";

const ImageCardFooter = ({
  image,
  handleCommentsSections,
  renderReportTips,
  handleFavorite
}) => {
  const favorite_icon = image.isFavorite ? images.blue_heart : images.feed_like;
  return (
    <div className="feed_footer padding-15">
      <div className="messages" role="article">
        <span className="count">{image.msg_count}</span>
        <img
          src={images.comment}
          alt="company-comments"
          onClick={handleCommentsSections}
          role="presentation"
          id={image.user.id}
          onKeyDown={handleCommentsSections}
        />
      </div>
      <div className="likes" role="article">
        <span className="count">{image.like_count}</span>
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

ImageCardFooter.propTypes = {
  handleFavorite: propTypes.func.isRequired,
  handleCommentsSections: propTypes.func.isRequired,
  image: propTypes.object.isRequired,
  renderReportTips: propTypes.func.isRequired
};

export default ImageCardFooter;
