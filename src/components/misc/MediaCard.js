import React, { Component } from "react";
import PropTypes from "prop-types";
import MediaCardBody from "./body/MediaCardBody";
import MediaCardHeader from "./headers/MediaCardHeader";
import MediaCardFooter from "./footers/MediaCardFooter";
import CommentCard from "./CommentCard";
import { Translations } from "../../lib/translations";
import { RenderToolTips } from "../common";
import { getComments, like, setSavedPost } from "../../actions";
import { connect } from "react-redux";
import { getBackendPostType } from "../Factory";

class MediaCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isComments: false,
      item: this.props.item,
      comments: "",
      totalCommentsCount: ""
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

  handleSavePost = (e) => {
    const item = this.state.item;
    const data = {
        typeId: e.target.id,
        postType: getBackendPostType(item)
      };

    this.props.setSavedPost(data).then(()=> {
      if(this.props.savedData){
        console.log(this.props.savedData);
      }
    })
  };

  handleContent = () => {};

  handleComment = commet => {
    const item = this.state.item;
    item.commentCount = commet ? item.commentCount + 1 : item.commentCount - 1;
    this.setState({ item });
  };

  handleFavorite = () => {
    const item = this.state.item;
    item.isSelfLike = !this.state.item.isSelfLike;
    item.likeCount = item.isSelfLike ? item.likeCount + 1 : item.likeCount - 1;
    this.setState({ item });

    const mediaLike = {
      typeOfContent: "mediapost",
      typeId: item.id
    };
    this.props.like(mediaLike);
  };

  handleCommentsSections = () => {
    const itemId = {
      typeId: this.state.item.id
    };
    this.props.getComments(itemId).then(() => {
      this.setState({
        isComments: !this.state.isComments,
        comments: this.props.comments,
        totalCommentsCount: (this.props.comments).length
      });
    });
  };

  render() {
    const { isComments, item } = this.state;
    const { likeData, isDescription, isReport } = this.props;
    return (
      <div className="feed_wrapper">
        <MediaCardHeader
          item={item}
          handleFavorite={this.handleFavorite}
          isLoading={likeData.isLoading}
        />
        <MediaCardBody 
          item={item} 
          isDescription={isDescription}
        />
        <MediaCardFooter
          isLoading={likeData.isLoading}
          item={item}
          handleCommentsSections={this.handleCommentsSections}
          isComments={isComments}
          renderReportTips={this.renderReportTips}
          handleFavorite={this.handleFavorite}
          isReport={isReport}
        />
        {isComments && (
          <CommentCard
            item={this.state.comments}
            itemId={item.id}
            typeContent={item.typeContent}
            handleComment={this.handleComment}
            totalCommentsCount={(this.state.comments).length}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  likeData: state.likeData,
  savedData: state.savedData,
  comments: state.commentData.comments,
  totalCommentsCount: state.totalCommentsCount
});

const mapDispatchToProps = {
  like,
  getComments,
  setSavedPost
};

MediaCard.propTypes = {
  item: PropTypes.object.isRequired,
  setSavedPost: PropTypes.func.isRequired,
  savedData: PropTypes.any,
  like: PropTypes.func.isRequired,
  comments: PropTypes.any,
  getComments: PropTypes.func.isRequired,
  isParticipant: PropTypes.bool,
  isReport: PropTypes.bool,
  isDescription: PropTypes.bool.isRequired,
  likeData: PropTypes.any
};

MediaCard.defaultProps = {
  isParticipant: false
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaCard);
