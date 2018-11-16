import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";
import FeedHeader from "./FeedHeader";
import { Link } from "react-router-dom";
import { ImageItem, VideoItem } from "../../ui-kit";
import Comments from "./Comments";
import { RenderToolTips } from "../../common";
import { ThreeDots } from "../../ui-kit";

class Feed extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isComments: false,
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

  handleReportPost = () => {};

  handleSavePost = () => {};

  handleContent = () => {};

  handleFavorite = e => {
    this.props.handleFavorite(e);
  };

  handleOnKeyDown = () => {};

  handleCommentsSections = () => {
    this.setState({ isComments: !this.state.isComments });
  };

  /**
   * Tooltp
   */
  renderReportTips = () => {
    return (
      <RenderToolTips
        items={this.state.ReportTips}
        id={this.props.campaign.id}
      />
    );
  };

  /**
   * Decide to render
   */
  renderContents = (campaign, isDescription, isInformation) => {
    switch (campaign.type) {
      case "video":
        return <VideoItem item={campaign.video} />;
      case "image":
        return (
          <ImageItem
            item={campaign.image}
            isOtherCardExist={!isDescription && isInformation}
          />
        );
      default:
        return (
          <ImageItem
            item={campaign.image}
            isOtherCardExist={!isDescription && isInformation}
          />
        );
    }
  };

  render() {
    const {
      campaign,
      handleModalInfoShow,
      handleFavorite,
      isDescription,
      isInformation,
      isStatus
    } = this.props;
    const { isComments } = this.state;
    return (
      <div className="feed_wrapper">
        <FeedHeader
          campaign={campaign}
          handleModalInfoShow={handleModalInfoShow}
          handleFavorite={handleFavorite}
          isInformation={isInformation}
          isDescription={isDescription}
        />
        <div className="feed_content">
          {campaign && (
            <Link to={`/campaign/${campaign.id}/information`}>
              {this.renderContents(campaign, isInformation, isDescription)}
            </Link>
          )}
          {campaign &&
            isDescription &&
            campaign.desc && (
              <div className="feed_description padding-15">
                <span className="secondary_title">{campaign.desc}</span>
              </div>
            )}
          {campaign &&
            isInformation && (
              <div className="feed_description padding-10">
                <div className="normal_title">{campaign.title}</div>
                <div className="col-sm-6 no-padding">
                  <div className="info_wrapper">
                    <span className="normal_title">Start: </span>
                    <span className="secondary_title">{campaign.title}</span>
                  </div>
                  <div className="info_wrapper">
                    <span className="normal_title">Procedure: </span>
                    <span className="secondary_title">
                      {campaign.procedure}
                    </span>
                  </div>
                  <div className="info_wrapper">
                    <span className="normal_title">Target group: </span>
                    <span className="secondary_title">
                      {campaign.target_group}
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 no-padding">
                  <div className="info_wrapper">
                    <span className="normal_title">End: </span>
                    <span className="secondary_title">{campaign.end}</span>
                  </div>
                  <div className="info_wrapper">
                    <span className="normal_title">Type: </span>
                    <span className="secondary_title">{campaign.type}</span>
                  </div>
                  <div className="info_wrapper">
                    <span className="normal_title">Applications: </span>
                    <span className="secondary_title">
                      {campaign.applications}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="col-sm-6 no-padding">
                  <div className="info_wrapper">
                    <span className="normal_title">Offer: </span>
                    <span className="secondary_title">{campaign.offer}</span>
                  </div>
                  <div className="info_wrapper">
                    <span className="normal_title">Inquiry: </span>
                    <span className="secondary_title">{campaign.inquiry}</span>
                  </div>
                </div>
                <div className="col-sm-6 no-padding">
                  <div className="info_wrapper">
                    <span className="normal_title">Offer Tag: </span>
                    <span className="secondary_title">
                      {campaign.offer_tag}
                    </span>
                  </div>
                  <div className="info_wrapper">
                    <span className="normal_title">Inquiry Tag: </span>
                    <span className="secondary_title">
                      {campaign.inquiry_tag}
                    </span>
                  </div>
                </div>
              </div>
            )}
        </div>

        <div className="feed_footer padding-15">
          <div className="messages" role="article">
            <span className="count">{campaign.msg_count}</span>
            <img
              src={images.comment}
              alt="company-comments"
              onClick={this.handleCommentsSections}
              role="presentation"
              id={campaign.user.id}
              onKeyDown={this.handleOnKeyDown}
            />
          </div>
          <div className="likes" role="article">
            <span className="count">{campaign.like_count}</span>
            {campaign.isFavorite ? (
              <img
                src={images.blue_heart}
                alt="like"
                className="pull-right"
                role="presentation"
                onClick={this.handleFavorite}
                id={campaign.id}
                onKeyDown={this.handleOnKeyDown}
              />
            ) : (
              <img
                src={images.feed_like}
                alt="like"
                className="pull-right"
                role="presentation"
                onClick={this.handleFavorite}
                id={campaign.id}
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
          {campaign &&
            isStatus && (
              <div className="status">
                <div className="status-wrapper">
                  <div className="title">Status</div>
                  <div className="subtitle">
                    <span className="green-circle" />
                  </div>
                </div>
                <div className="status-wrapper">
                  <div className="title">Views</div>
                  <div className="subtitle">{campaign.views}</div>
                </div>
                <div className="status-wrapper">
                  <div className="title">Clicks</div>
                  <div className="subtitle">{campaign.clicks}</div>
                </div>
                <div className="status-wrapper">
                  <div className="title">Applications</div>
                  <div className="subtitle">{campaign.applications}</div>
                </div>
                <div className="status-wrapper">
                  <Link to={`/settings/campaigns/${campaign.id}/statistics`}>
                    <button className="blue_button">statistics</button>
                  </Link>
                </div>
              </div>
            )}
        </div>

        {/* Comments Section */}

        {isComments && <Comments campaign={campaign} />}
      </div>
    );
  }
}

Feed.propTypes = {
  handleFavorite: PropTypes.func.isRequired,
  handleModalInfoShow: PropTypes.func,
  isDescription: PropTypes.bool.isRequired,
  isInformation: PropTypes.bool.isRequired,
  isStatus: PropTypes.bool.isRequired,
  campaign: PropTypes.shape({
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

export default Feed;
