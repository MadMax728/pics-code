import React, { Component } from "react";
import propTypes from "prop-types";
import MediaCardBody from "./body/MediaCardBody";
import MediaCardHeader from "./headers/MediaCardHeader";
import MediaCardFooter from "./footers/MediaCardFooter";
import CommentCard from "./CommentCard";
import { Translations } from "../../../lib/translations";
import { RenderToolTips } from "../../common";
class MediaCard extends Component {
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
    item.isSelfLike = !this.state.item.isSelfLike;
    item.likeCount = item.isSelfLike ? item.likeCount + 1 : item.likeCount - 1;
    this.setState({ item });

    let mediaLike = {
      typeOfContent: "mediapost",
      typeId: item.id
    };
    // this.props.like(mediaLike);
  };

  handleCommentsSections = () => {
    let itemId = {
      typeId: this.state.item.id
    };
    this.props.getComments(itemId).then(() => {
      this.setState({
        isComments: !this.state.isComments,
        comments: this.props.comments
      });
    });
  };

  render() {
    const { isComments, item } = this.state;

    return (
      <div className="feed_wrapper">
        <MediaCardHeader item={item} handleFavorite={this.handleFavorite} />
        <MediaCardBody item={item} />
        <MediaCardFooter
          item={item}
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

MediaCard.propTypes = {
  item: propTypes.object.isRequired,
  comments: propTypes.object.isRequired,
  getComments: propTypes.func.isRequired
};

export default MediaCard;
