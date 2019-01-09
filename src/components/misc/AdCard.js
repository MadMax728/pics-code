import React, { Component } from "react";
import PropTypes from "prop-types";
import AdCardHeader from "./headers/AdCardHeader";
import AdCardBody from "./body/AdCardBody";
import AdCardFooter from "./footers/AdCardFooter";
import { Translations } from "../../lib/translations";
import { RenderToolTips } from "../common";
import CommentCard from "./CommentCard";
import { like, getComments, setSavedPost, addReport } from "../../actions";
import { connect } from "react-redux";
import { getBackendPostType } from "../Factory";
import * as enumerations from "../../lib/constants/enumerations";

class AdCard extends Component {
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
    let reportTips;
    const { isBackOffice } = this.props;
    const { item } = this.state;

    if (isBackOffice){
      reportTips = [
        {
          name: item.reportStatus === enumerations.reportType.lock? Translations.tool_tips.unlock : Translations.tool_tips.lock ,
          handleEvent: item.reportStatus === enumerations.reportType.lock? this.handleUnlockContent : this.handleLockContent,
        },
        {
          name: Translations.tool_tips.do_not,
          handleEvent: this.handleDoNotContent
        }
      ];
    }
    else {
      reportTips = [
        {
          name: Translations.tool_tips.report,
          handleEvent: this.handleReportPost
        },
        {
          name: Translations.tool_tips.save,
          handleEvent: this.handleSavePost
        }
      ];
    }
    return <RenderToolTips items={reportTips} id={id} />;
  };

  handleReportPost = (e) => {
    const  { item } = this.state;
    const data = {
      typeContent: "Ads",
      typeId: e.target.id,
      title: item.title
    }    
    this.props.addReport(data).then(()=> {
      if(this.props.reportedContentData && !this.props.reportedContentData.error && this.props.reportedContentData.addReport.success) {
        // console.log(this.props.reportedContentData.addReport.success);
      }
    });
  };

  handleContent = () => {};

  handleFavorite = e => {
    const item = this.state.item;
    item.isSelfLike = !this.state.item.isSelfLike;
    item.likeCount = item.isSelfLike ? item.likeCount + 1 : item.likeCount - 1;
    this.setState({ item });

    const adLike = {
      typeOfContent: "ad",
      typeId: item.id
    };
    this.props.like(adLike);
  };

  handleComment = commet => {
    const item = this.state.item;
    item.commentCount = commet ? item.commentCount + 1 : item.commentCount - 1;
    this.setState({ item });
  };

  handleCommentsSections = () => {
    const AdId = {
      typeId: this.state.item.id
    };
    this.props.getComments(AdId).then(() => {
      this.setState({
        isComments: !this.state.isComments,
        comments: this.props.comments,
        totalCommentsCount: (this.props.comments).length
      });
    });
  };

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

  render() {
    const { isStatus, isDescription, isInformation, isReport, reportedContentData } = this.props;
    const { isComments, item, comments } = this.state;
    return (
      <div className="feed_wrapper">
        <AdCardHeader
          ad={item}
          isDescription={isDescription}
          isInformation={isInformation}
          handleFavorite={this.handleFavorite}
          isLoading={false}
        />
        <AdCardBody
          ad={item}
          isDescription={isDescription}
          isInformation={isInformation}
          isLoading={reportedContentData.isLoading}
        />
        <AdCardFooter
          ad={item}
          handleCommentsSections={this.handleCommentsSections}
          isComments={isComments}
          isStatus={isStatus}
          /* eslint-disable */
          renderReportTips={() => this.renderReportTips(item.id)}
          handleFavorite={this.handleFavorite}
          isLoading={false}
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

AdCard.propTypes = {
  isDescription: PropTypes.bool.isRequired,
  isInformation: PropTypes.bool.isRequired,
  isStatus: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  likeData: PropTypes.any,
  like: PropTypes.func.isRequired,
  setSavedPost: PropTypes.func.isRequired,
  savedData: PropTypes.any,
  getComments: PropTypes.func.isRequired,
  comments: PropTypes.any,
  isReport: PropTypes.bool,
  isBackOffice: PropTypes.bool,
  addReport: PropTypes.func.isRequired,
  reportedContentData: PropTypes.any
};

const mapStateToProps = state => ({
  likeData: state.likeData,
  savedData: state.savedData,
  comments: state.commentData.comments,
  totalCommentsCount: state.totalCommentsCount,
  reportedContentData: state.reportedContentData
});

const mapDispatchToProps = {
  like,
  getComments,
  setSavedPost,
  addReport
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdCard);
