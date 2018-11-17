import React, { Component } from "react";
import PropTypes from "prop-types";
import VideoCardHeader from "./headers/VideoCardHeader";
import VideoCardBody from "./body/VideoCardBody";
import VideoCardFooter from "./footers/VideoCardFooter";
import { Translations } from "../../../lib/translations";
import { RenderToolTips } from "../../common";
import CommentCard from "./CommentCard";

class VideoCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isComments: false,
      item: this.props.item
    };
  }

  renderReportTips = () => {
    const reportTips = [
      {
        name: Translations.tool_tips.report,
        handleEvent: this.handleReportPost
      },
      {
        name: Translations.tool_tips.save,
        handleEvent: this.handleSavePost
      },
      {
        name: Translations.tool_tips.lock,
        handleEvent: this.handleContent
      }
    ];
    return <RenderToolTips items={reportTips} id={this.props.item.id} />;
  };

  handleReportPost = () => {};

  handleSavePost = () => {};

  handleContent = () => {};

  handleFavorite = e => {
    const item = this.state.item;
    item.isFavorite = !this.state.item.isFavorite;
    item.like_count = item.isFavorite
      ? item.like_count + 1
      : item.like_count - 1;
    this.setState({ item });
  };

  handleCommentsSections = () => {
    this.setState({ isComments: !this.state.isComments });
  };

  render() {
    const { isComments, item } = this.state;

    return (
      <div className="feed_wrapper">
        <VideoCardHeader video={item} handleFavorite={this.handleFavorite} />
        <VideoCardBody video={item} />
        <VideoCardFooter
          video={item}
          handleCommentsSections={this.handleCommentsSections}
          isComments={isComments}
          renderReportTips={this.renderReportTips}
          handleFavorite={this.handleFavorite}
        />
        {isComments && <CommentCard item={item} />}
      </div>
    );
  }
}

VideoCard.propTypes = {
  item: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      isOwner: PropTypes.bool
    }).isRequired,
    title: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
    msg_count: PropTypes.number,
    like_count: PropTypes.number,
    id: PropTypes.number
  }).isRequired
};

export default VideoCard;
