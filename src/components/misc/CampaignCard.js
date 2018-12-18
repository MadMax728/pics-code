import React, { Component } from "react";
import PropTypes from "prop-types";
import CampaignCardHeader from "./headers/CampaignCardHeader";
import CampaignCardBody from "./body/CampaignCardBody";
import CampaignCardFooter from "./footers/CampaignCardFooter";
import { Translations } from "../../lib/translations";
import { RenderToolTips } from "../common";
import CommentCard from "./CommentCard";
import { like, getComments, setSavedPost } from "../../actions";
import { connect } from "react-redux";
import { getBackendPostType } from "../Factory";


class CampaignCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isComments: false,
      item: this.props.item,
      comments: "",
      totalCommentsCount: ""
    };
  }

  renderReportTips = (id) => {
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
    return <RenderToolTips items={reportTips} id={id} />;
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

  handleFavorite = () => {
    const item = this.state.item;
    item.isSelfLike = !this.state.item.isSelfLike;
    item.likeCount = item.isSelfLike ? item.likeCount + 1 : item.likeCount - 1;
    this.setState({ item });

    const campaignLike = {
      typeOfContent: "campaign",
      typeId: item.id
    };
    this.props.like(campaignLike);
  };

  handleComment = commet => {
    const item = this.state.item;
    item.commentCount = commet ? item.commentCount + 1 : item.commentCount - 1;
    this.setState({ item });
  };

  handleCommentsSections = () => {
    const CampaignId = {
      typeId: this.state.item.id
    };
    this.props.getComments(CampaignId).then(() => {
      this.setState({
        isComments: !this.state.isComments,
        comments: this.props.comments,
        totalCommentsCount: (this.props.comments).length
      });
    });
  };

  render() {
    const { isStatus, isDescription, isInformation, isBudget, isReport, likeData } = this.props;
    const { isComments, item, comments } = this.state;
    return (
      <div className="feed_wrapper">
        <CampaignCardHeader
          campaign={item}
          isDescription={isDescription}
          isInformation={isInformation}
          handleFavorite={this.handleFavorite}
          isLoading={likeData.isLoading}
        />
        <CampaignCardBody
          campaign={item}
          isDescription={isDescription}
          isInformation={isInformation}
        />
        <CampaignCardFooter
          campaign={item}
          handleCommentsSections={this.handleCommentsSections}
          isComments={isComments}
          isStatus={isStatus}
          isBudget={isBudget}
          /* eslint-disable */
          renderReportTips={() => this.renderReportTips(item.id)}
          handleFavorite={this.handleFavorite}
          isLoading={likeData.isLoading}
          isReport={isReport}
        />
        {isComments && (
          <CommentCard
            item={comments}
            itemId={item.id}
            typeContent={item.typeContent}
            handleComment={this.handleComment}
            totalCommentsCount={(comments).length}
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

CampaignCard.propTypes = {
  getComments: PropTypes.func.isRequired,
  setSavedPost: PropTypes.func.isRequired,
  savedData: PropTypes.any,
  comments: PropTypes.any,
  isDescription: PropTypes.bool.isRequired,
  isInformation: PropTypes.bool.isRequired,
  isStatus: PropTypes.bool.isRequired,
  isBudget: PropTypes.bool.isRequired,
  isReport: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  like: PropTypes.func.isRequired,
  likeData: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignCard);
