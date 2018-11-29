import React, { Component } from "react";
import propTypes from "prop-types";
import MediaCardBody from "./body/MediaCardBody";
import MediaCardHeader from "./headers/MediaCardHeader";
import MediaCardFooter from "./footers/MediaCardFooter";
import CommentCard from "./CommentCard";
import { Translations } from "../../../lib/translations";
import { RenderToolTips } from "../../common";
import { like } from "../../../actions/like";
import { getComments } from "../../../actions/comments";
import { connect } from "react-redux";

class MediaCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isComments: false,
      item: this.props.item,
      comments: ""
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

  handleComment = (commet) => {
    const item = this.state.item;
    item.commentCount = commet ? item.commentCount + 1 : item.commentCount - 1;
    this.setState({ item });
  }
  
  handleFavorite = e => {
    const item = this.state.item;
    item.isSelfLike = !this.state.item.isSelfLike;
    item.likeCount = item.isSelfLike ? item.likeCount + 1 : item.likeCount - 1;
    this.setState({ item });

    let mediaLike = {
      typeOfContent: "mediapost",
      typeId: item.id
    };
    this.props.like(mediaLike);
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
        {isComments && <CommentCard item={this.state.comments} itemId={item.id} typeContent={item.typeContent} handleComment={this.handleComment} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  likeData: state.likeData,
  comments: state.commentData.comments
});

const mapDispatchToProps = {
  like,
  getComments
};

MediaCard.propTypes = {
  item: propTypes.object.isRequired,
  like: propTypes.func.isRequired,
  comments: propTypes.any,
  getComments: propTypes.func.isRequired,
  isParticipant: propTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaCard);