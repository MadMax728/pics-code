import React, { Component } from "react";
import PropTypes from "prop-types";
import CampaignCardHeader from "./headers/CampaignCardHeader";
import CampaignCardBody from "./body/CampaignCardBody";
import CampaignCardFooter from "./footers/CampaignCardFooter";
import { Translations } from "../../lib/translations";
import { RenderToolTips } from "../common";
import CommentCard from "./CommentCard";
import { like, getComments, setSavedPost, addReport } from "../../actions";
import { connect } from "react-redux";
import { getBackendPostType } from "../Factory";
import * as enumerations from "../../lib/constants/enumerations";
import { modalType } from "../../lib/constants";

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

  handleLockContent = (e) => {
    const data = {
      typeId: e.target.id,
      contentStatus: enumerations.reportType.lock,
      reportContent: "Campaign"
    }    
    this.props.handleModalInfoDetailsCallbackShow(modalType.processed, data, () => {
      this.handleSetState(data)
    });
  }
  
  handleSetState = (data) => {
    clearInterval(this.timer);
    const { item } = this.state;
    item.reportStatus = data.contentStatus;
    this.setState({item});
    this.props.handleRemove(item.id)
  }

  handleDoNotContent = (e) => {
    const data = {
      typeId: e.target.id,
      contentStatus: enumerations.reportType.doNotLock,
      reportContent: "Campaign"
    }    
    this.props.handleModalInfoDetailsCallbackShow(modalType.processed, data, () => {
      this.handleSetState(data)
    });
  }

  handleUnlockContent= (e) => {
    const data = {
      typeId: e.target.id,
      contentStatus: enumerations.reportType.unLock,
      reportContent: "Campaign"
    }    
    this.props.handleModalInfoDetailsCallbackShow(modalType.processed, data, () => {
      this.handleSetState(data)
    });
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
          name: item.isReported? Translations.tool_tips.unreport : Translations.tool_tips.report,
          handleEvent: this.handleReportPost
        },
        {
          name: item.isSavedPost? Translations.tool_tips.unsave : Translations.tool_tips.save,
          handleEvent: this.handleSavePost
        }
      ];
    }
    return <RenderToolTips items={reportTips} id={id} />;
  };

  handleReportPost = (e) => {
    const  { item } = this.state;
    const data = {
      typeContent: "Campaign",
      typeId: e.target.id,
      title: item.title
    }    
    this.props.addReport(data).then(()=> {
      if(this.props.reportedContentData && this.props.reportedContentData && this.props.reportedContentData.addReport.typeId === item.id) {
        item.isReported = !item.isReported;
        this.setState({item});
      }
    });
  };

  handleSavePost = e => {
    const { item } = this.state;
    const { isSavedPage } = this.props;
    const data = {
      typeId: e.target.id,
      postType: getBackendPostType(item)
    };

    this.props.setSavedPost(data).then(() => {
      if (this.props.savedData && this.props.savedData.saved && this.props.savedData.saved.typeId === item.id ) {
        item.isSavedPost = !item.isSavedPost;
        this.setState({item});
        if(isSavedPage && !this.state.item.isSavedPost) {
          this.props.handleRemove(item.id);
        }
      }
    });
  };

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
      const totalComment = this.props.comments;
      this.setState({
        isComments: !this.state.isComments,
        comments: this.props.comments,
        totalCommentsCount: totalComment.length
      });
    });
  };

  render() {
    const {
      isStatus,
      isDescription,
      isInformation,
      isBudget,
      isReport,
      likeData,
      reportedContentData,
      savedData
    } = this.props;
    const { isComments, item, comments } = this.state;
    return (
      /* No Data Found - Card */
      <div className="feed_wrapper">
        {/*<div className="feed_wrapper">
         <div className="datanotfound-wrapper" >
          <div className="notfound-body row">
            <div class="notfound-title col-sm-8">Error Title</div>
            <div className="notfound-btn-wrapper col-sm-2">
              <button className="filled_button" id="1" >New</button> 
            </div>
            <div className="notfound-btn-wrapper col-sm-2">
              <button className="filled_button" id="2" >Refresh</button>
            </div>
          </div>   
          <div className="notfound-footer row">
            <div class="col-md-12">Menu title will go here...</div>
          </div>       
    </div>*/}
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
          isLoading={reportedContentData.isLoading || savedData.isLoading}
        />
        <CampaignCardFooter
          campaign={item}
          handleCommentsSections={this.handleCommentsSections}
          isComments={isComments}
          isStatus={isStatus}
          isBudget={isBudget} /* eslint-disable */
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
            totalCommentsCount={comments.length}
            isReport={isReport}
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
  totalCommentsCount: state.totalCommentsCount,
  reportedContentData: state.reportedContentData
});

const mapDispatchToProps = {
  like,
  getComments,
  addReport,
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
  likeData: PropTypes.any,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  isBackOffice: PropTypes.bool,
  addReport: PropTypes.func.isRequired,
  reportedContentData: PropTypes.any,
  handleRemove: PropTypes.func,
  isSavedPage: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignCard);
