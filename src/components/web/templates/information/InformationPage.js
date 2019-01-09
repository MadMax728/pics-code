import React, { Component } from "react";
import Comments from "./Comments";

import * as images from "../../../../lib/constants/images";
import { Translations } from "../../../../lib/translations";

import { modalType } from "../../../../lib/constants/enumerations";
import { RenderToolTips } from "../../../common";
import PropTypes from "prop-types";
import { getCampaignDetails } from "../../../../actions";
import { connect } from "react-redux";
import { ThreeDots } from "../../../ui-kit";

class InformationPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      campaignId: this.props.match.params.id,
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
    const data = {
      id: this.state.campaignId
    };
    this.props.getCampaignDetails(data);
  };

  handleFavorite = () => {
    this.setState({
      campaignDetails: {
        ...this.props.campaignDetails,
        isSelfLike: !this.props.campaignDetails.isSelfLike,
        like_count: this.props.campaignDetails.isSelfLike
          ? this.props.campaignDetails.like_count - 1
          : this.props.campaignDetails.like_count + 1
      }
    });
  };

  handleMessage = e => {
    this.props.handleModalShow(modalType.messages, { id: e.target.id });
  };

  handleOnKeyDown = () => {};

  handleReportPost = () => {};

  handleSavePost = () => {};

  handleContent = () => {};

  /**
   * Tooltp
   */
  renderReportTips = () => {
    return (
      <RenderToolTips
        items={this.state.ReportTips}
        id={this.props.campaignDetails.id}
      />
    );
  };

  render() {
    const { campaignDetails, isLoading } = this.props;
    return (
      <div className="padding-l-10 middle-section width-80">
        {campaignDetails && !isLoading && (
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
              <button className="filled_button">
                {Translations.apply_campaign}
              </button>
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
                          {campaignDetails.startDate}
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
                          {campaignDetails.endDate}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Type: </span>
                        <span className="secondary_title">
                          {campaignDetails.type}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Applications: </span>
                        <span className="secondary_title">
                          {campaignDetails.applications}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">Start: </span>
                        <span className="secondary_title">
                          {campaignDetails.startDate}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Procedure: </span>
                        <span className="secondary_title">
                          {campaignDetails.procedure}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6 no-padding">
                      <div className="info_wrapper">
                        <span className="normal_title">End: </span>
                        <span className="secondary_title">
                          {campaignDetails.endDate}
                        </span>
                      </div>
                      <div className="info_wrapper">
                        <span className="normal_title">Type: </span>
                        <span className="secondary_title">
                          {campaignDetails.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feed_footer margin-t-15 margin-b-15 padding-lr-30">
                  <div className="messages">
                    <span className="count">{campaignDetails.msg_count}</span>
                    <img
                      src={images.feed_msg}
                      alt={"feed_msg"}
                      role="presentation"
                      onClick={this.handleMessage}
                      id={campaignDetails.createdBy}
                      onKeyDown={this.handleOnKeyDown}
                    />
                  </div>
                  <div className="likes">
                    <span className="count">{campaignDetails.like_count}</span>
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
                      getContent={this.renderReportTips}
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
                {/* Comments Section */}
                <Comments campaign={campaignDetails} />
              </div>
            </div>
          </div>
        )}
        {isLoading && (
          <div className="info-inner-wrapper col-xs-12 no-padding">
            <div className="info-main-title paddindLeft0 gray_box" />
            <div className="text gray_box" />
            <img
              src={images.placeholder_pic}
              alt="information"
              className="gray_img"
            />
            <div className="text gray_box" />
            {/* <button class="filled_button">Apply for this campaign</button> */}
            <div className="feed_wrapper">
              <div className="feed_header feed_header_gray_box">
                <div className="col-sm-1 col-xs-1 no-padding profile_image">
                  <img
                    src={images.placeholder_pic}
                    alt="circle-img-1"
                    className="img-circle img-responsive"
                  />
                </div>
                <div className="col-sm-9 col-xs-7 no-padding">
                  <div className="normal_title gray_box" />
                  <div className="secondary_title gray_box" />
                  <div className="grey_title gray_box" />
                </div>
                <div className="col-sm-2 col-xs-2 like_wrapper">
                  <img
                    src="/global/picstagraph-web/images/feed_like.svg"
                    alt="like"
                    className="pull-right"
                    role="presentation"
                    id="1"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

InformationPage.propTypes = {
  handleModalShow: PropTypes.func,
  match: PropTypes.any,
  getCampaignDetails: PropTypes.func.isRequired,
  campaignDetails: PropTypes.any,
  isLoading: PropTypes.bool
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  campaignDetails: state.campaignData.campaign,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getCampaignDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InformationPage);
