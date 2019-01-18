import React, { Component } from "react";
import Comments from "./Comments";

import * as images from "../../../../lib/constants/images";
import { Translations } from "../../../../lib/translations";

import { modalType } from "../../../../lib/constants/enumerations";
import { RenderToolTips } from "../../../common";
import PropTypes from "prop-types";
import {
  getCampaignDetails,
  like,
  getSearch,
  getComments,
  setSavedPost,
  addReport
} from "../../../../actions";
import { getBackendPostType } from "../../../Factory";
import { connect } from "react-redux";
import { ThreeDots, CampaignDetailsLoading } from "../../../ui-kit";
import moment from "moment";
import * as routes from "../../../../lib/constants/routes";

class InformationPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isComments: false,
      campaignId: this.props.match.params.id,
      comments: null,
      ReportTips: [
        {
          name: "Report Post",
          handleEvent: this.handleReportPost
        },
        {
          name: "Save Post",
          handleEvent: this.handleSavePost
        },
        {
          name: "locks / unlocks content",
          handleEvent: this.handleContent
        }
      ]
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.getCampaignDetailsData();
  };

  getCampaignDetailsData = () => {
    const data = {
      id: this.state.campaignId
    };
    this.props.getCampaignDetails(data).then(() => {
      if (this.props.campaignDetails) {
        this.setState({
          campaignDetails: this.props.campaignDetails
        });
      }
    });
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.searchData.searchKeyword) {
      this.props.getSearch("");
    }
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      this.props.getSearch(nextProps.searchData.searchKeyword);
      const searchKeyword = nextProps.searchData.searchKeyword;
      this.props.history.push("/campaign/company?search=" + searchKeyword);
    }
  };

  handleFavorite = () => {
    this.setState({
      campaignDetails: {
        ...this.props.campaignDetails,
        isSelfLike: !this.props.campaignDetails.isSelfLike,
        likeCount: this.props.campaignDetails.isSelfLike
          ? this.props.campaignDetails.likeCount - 1
          : this.props.campaignDetails.likeCount + 1
      }
    });
    this.props.campaignDetails.isSelfLike = !this.props.campaignDetails
      .isSelfLike;
    this.props.campaignDetails.likeCount = this.props.campaignDetails.isSelfLike
      ? this.props.campaignDetails.likeCount + 1
      : this.props.campaignDetails.likeCount - 1;
    const campeignLike = {
      typeOfContent: "campaign",
      typeId: this.state.campaignId
    };
    this.props.like(campeignLike);
  };

  handleApplyParticipant = e => {
    this.props.handleModalShow(modalType.upload, {
      campaignId: e.target.id,
      campaignName: this.props.campaignDetails.campaignName
    });
  };

  handleComment = commet => {
    const campaignDetails = this.props.campaignDetails;
    campaignDetails.commentCount = commet
      ? campaignDetails.commentCount + 1
      : campaignDetails.commentCount - 1;
    this.setState({ campaignDetails });
  };

  handleCommentsSections = () => {
    const CampaignId = { typeId: this.props.match.params.id };
    this.props.getComments(CampaignId).then(() => {
      const totalComment = this.props.comments;
      this.setState({
        isComments: !this.state.isComments,
        comments: this.props.comments,
        totalCommentsCount: totalComment.length
      });
    });
  };

  handleOnKeyDown = () => {};

  handleReportPost = e => {
    const { campaignDetails } = this.state;
    const data = {
      typeContent: "Campaign",
      typeId: e.target.id,
      title: campaignDetails.title
    };
    this.props.addReport(data).then(() => {
      if (
        this.props.reportedContentData &&
        this.props.reportedContentData &&
        this.props.reportedContentData.addReport.typeId === campaignDetails.id
      ) {
        campaignDetails.isReported = !campaignDetails.isReported;
        this.setState({ campaignDetails });
      }
    });
  };

  handleSavePost = e => {
    const { campaignDetails } = this.state;
    // const { isSavedPage } = this.props;
    const data = {
      typeId: e.target.id,
      postType: getBackendPostType(campaignDetails)
    };

    this.props.setSavedPost(data).then(() => {
      if (
        this.props.savedData &&
        this.props.savedData.saved &&
        this.props.savedData.saved.typeId === campaignDetails.id
      ) {
        campaignDetails.isSavedPost = !campaignDetails.isSavedPost;
        this.setState({ campaignDetails });
      }
    });
  };

  handleContent = () => {};

  /**
   * Tooltp
   */
  renderReportTips = () => {
    let reportTips;
    const { campaignDetails } = this.state;
    if (campaignDetails) {
      reportTips = [
        {
          name: campaignDetails.isReported
            ? Translations.tool_tips.unreport
            : Translations.tool_tips.report,
          handleEvent: this.handleReportPost
        },
        {
          name: campaignDetails.isSavedPost
            ? Translations.tool_tips.unsave
            : Translations.tool_tips.save,
          handleEvent: this.handleSavePost
        }
      ];
      return <RenderToolTips items={reportTips} id={campaignDetails.id} />;
    }
  };

  render() {
    const { campaignDetails, isLoading } = this.props;
    const { isComments, comments } = this.state;
    return (
      <div className="padding-l-10 middle-section width-80">
        {/* {campaignDetails && !isLoading && (
          <div className="information-wrapper ht100">
            <div className="info-inner-wrapper col-xs-12">
              <div className="info-main-title paddindLeft0">
                {campaignDetails.title}
              </div>
              <div className="text">{campaignDetails.description}</div>
              <img src={campaignDetails.profileImage} alt={"information"} />
              <div className="text paddTop20">
                {campaignDetails.description}
              </div>
              {campaignDetails.isOwner ||
              campaignDetails.isAlreadyParticipant ? (
                ""
              ) : (
                <button
                  className="filled_button"
                  onClick={this.handleApplyParticipant}
                  id={campaignDetails.id}
                >
                  {Translations.apply_campaign}
                </button>
              )}
              <div className="feed_wrapper">
                <div className="feed_header">
                  <div className="no-padding profile_image">
                    <img
                      src={images.image}
                      alt="circle-img-1"
                      className="img-circle img-responsive"
                    />
                  </div>
                  <div className="col-sm-9 col-xs-7">
                    <div className="normal_title">{campaignDetails.title}</div>
                    <div className="secondary_title">
                      {campaignDetails.userName}
                    </div>
                    <div className="grey_title">{campaignDetails.category}</div>
                  </div>
                  <div className="col-sm-2 col-xs-2 like_wrapper">
                    {campaignDetails.isSelfLike ? (
                      <img
                        src={images.blue_heart}
                        alt="like-1"
                        className="pull-right"
                        role="presentation"
                        onClick={this.handleFavorite}
                        id={campaignDetails.id}
                        onKeyDown={this.handleOnKeyDown}
                      />
                    ) : (
                      <img
                        src={images.feed_like}
                        alt="like"
                        className="pull-right"
                        role="presentation"
                        onClick={this.handleFavorite}
                        id={campaignDetails.id}
                        onKeyDown={this.handleOnKeyDown}
                      />
                    )}
                  </div>
                </div>
                <div className="feed_content col-xs-12">
                  <div className="feed_description col-xs-12">
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">Start: </span>
                        <span className="secondary_title">
                          {moment(campaignDetails.startDate).format(
                            "MMMM Do YYYY"
                          )}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Procedure: </span>
                        <span className="secondary_title">
                          {campaignDetails.procedure}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Target group: </span>
                        <span className="secondary_title">
                          {campaignDetails.target_group}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">End: </span>
                        <span className="secondary_title">
                          {moment(campaignDetails.endDate).format(
                            "MMMM Do YYYY"
                          )}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Type: </span>
                        <span className="secondary_title">
                          {campaignDetails.typeContent}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Applications: </span>
                        <span className="secondary_title">
                          {campaignDetails.applications
                            ? campaignDetails.applications
                            : "22/22"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="feed_description col-xs-12">
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">
                          {Translations.create_campaigns.offer}:{" "}
                        </span>
                        <span className="secondary_title">
                          {campaignDetails.offerTagList &&
                            campaignDetails.offerTagList[0].offerTagName}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">
                          {Translations.create_campaigns.inquiry}:{" "}
                        </span>
                        <span className="secondary_title">
                          {campaignDetails.inquiryTagList &&
                            campaignDetails.inquiryTagList[0].inquiryTagName}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">
                          {Translations.create_campaigns.offer_tag}:{" "}
                        </span>
                        <span className="secondary_title">
                          {campaignDetails.offerTagList &&
                            campaignDetails.offerTagList[0].offerTagName}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">
                          {Translations.create_campaigns.inquiry_tag}:{" "}
                        </span>
                        <span className="secondary_title">
                          {campaignDetails.inquiryTagList &&
                            campaignDetails.inquiryTagList[0].inquiryTagName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feed_footer margin-t-15 margin-b-15 padding-lr-30">
                  <div className="messages">
                    <span className="count">
                      {campaignDetails.commentCount}
                    </span>
                    <img
                      src={images.comment}
                      alt={"feed_msg"}
                      role="presentation"
                      id={campaignDetails.createdBy}
                      onKeyDown={this.handleOnKeyDown}
                      onClick={this.handleCommentsSections}
                    />
                  </div>
                  <div className="likes">
                    <span className="count">{campaignDetails.likeCount}</span>
                    {campaignDetails.isSelfLike ? (
                      <img
                        src={images.blue_heart}
                        alt="like-1"
                        className="pull-right"
                        role="presentation"
                        onClick={this.handleFavorite}
                        id={campaignDetails.id}
                        onKeyDown={this.handleOnKeyDown}
                      />
                    ) : (
                      <img
                        src={images.feed_like}
                        alt="like"
                        className="pull-right"
                        role="presentation"
                        onClick={this.handleFavorite}
                        id={campaignDetails.id}
                        onKeyDown={this.handleOnKeyDown}
                      />
                    )}
                  </div>
                  <div className="show_more_options">
                    <ThreeDots
                      id="report"
                      role="button"
                      dataTip="tooltip"
                      dataClass="tooltip-wrapr"
                      getContent={() => this.renderReportTips()}
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
              </div>
            </div>

            <div className="feed_wrapper">
              <div className="feed-comment">
                {isComments && (
                  <Comments
                    campaign={campaignDetails}
                    campaignComments={comments}
                    campeignId={campaignDetails.id}
                    typeContent={campaignDetails.typeContent}
                    handleComment={this.handleComment}
                    totalCommentsCount={comments.length}
                    isReport={false}
                  />
                )}
              </div>
            </div>
          </div>
        )} */}
        {!isLoading && <CampaignDetailsLoading count={1} />}
      </div>
    );
  }
}

InformationPage.propTypes = {
  handleModalShow: PropTypes.func,
  match: PropTypes.any,
  getCampaignDetails: PropTypes.func.isRequired,
  campaignDetails: PropTypes.any,
  isLoading: PropTypes.bool,
  handleFavorite: PropTypes.func,
  like: PropTypes.func.isRequired,
  searchData: PropTypes.any,
  getSearch: PropTypes.func.isRequired,
  history: PropTypes.any,
  getComments: PropTypes.func.isRequired,
  comments: PropTypes.any,
  handleRemove: PropTypes.func,
  reportedContentData: PropTypes.any,
  savedData: PropTypes.any,
  setSavedPost: PropTypes.func,
  addReport: PropTypes.func
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  campaignDetails: state.campaignData.campaign,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error,
  searchData: state.searchData,
  comments: state.commentData.comments,
  likeData: state.likeData,
  savedData: state.savedData,
  totalCommentsCount: state.totalCommentsCount,
  reportedContentData: state.reportedContentData
});

const mapDispatchToProps = {
  getCampaignDetails,
  like,
  getSearch,
  getComments,
  addReport,
  setSavedPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InformationPage);
