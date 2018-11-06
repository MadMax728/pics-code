import React, { Component } from "react";
import Comments from "./Comments";

import * as images from "../../../../lib/constants/images";
import { Translations } from "../../../../lib/translations";

import { campaign_detail } from "../../../../mock-data";
import { modalType } from "../../../../lib/constants/enumerations";
import { ThreeDots, RenderToolTips } from "../../../common";

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaign_detail: campaign_detail,
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

  handleFavorite = e => {
    this.setState({
      campaign_detail: {
        ...this.state.campaign_detail,
        isFavorite: !this.state.campaign_detail.isFavorite,
        like_count: this.state.campaign_detail.isFavorite
          ? this.state.campaign_detail.like_count - 1
          : this.state.campaign_detail.like_count + 1
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
        id={this.state.campaign_detail.id}
      />
    );
  };

  addComment = (campaignId, comment) => {
    const campaign_detail = this.state.campaign_detail;
    const commentData = {
      comment_id: Math.random(),
      comment,
      user: {
        name: "Vaghela",
        id: 2,
        image: `${images.campaign2}`
      },
      date: "02.02.2000"
    };

    campaign_detail.comments.unshift(commentData);

    this.setState({ campaign_detail });
  };

  render() {
    const { campaign_detail } = this.state;

    return (
      <div className="padding-l-10 middle-section width-80">
        <div className="information-wrapper">
          <div className="info-inner-wrapper">
            <div className="info-main-title">{campaign_detail.title}</div>
            <div className="text">{campaign_detail.desc}</div>
            <img src={campaign_detail.image} alt={"information"} />
            <div className="text">{campaign_detail.desc}</div>
            <button className="filled_button">
              {Translations.apply_campaign}
            </button>
            <div className="feed_wrapper">
              <div className="feed_header">
                <div className="col-sm-1 col-xs-1 no-padding profile_image">
                  <img
                    src={images.image}
                    alt="circle-img-1"
                    className="img-circle img-responsive"
                  />
                </div>
                <div className="col-sm-9 col-xs-7 no-padding">
                  <div className="normal_title">{campaign_detail.title}</div>
                  <div className="secondary_title">
                    {campaign_detail.user.name}
                  </div>
                  <div className="grey_title">{campaign_detail.category}</div>
                </div>
                <div className="col-sm-2 col-xs-2 like_wrapper">
                  {campaign_detail.isFavorite ? (
                    <img
                      src={images.blue_heart}
                      alt="like-1"
                      className="pull-right"
                      role="presentation"
                      onClick={this.handleFavorite}
                      id={campaign_detail.id}
                      onKeyDown={this.handleOnKeyDown}
                    />
                  ) : (
                    <img
                      src={images.feed_like}
                      alt="like"
                      className="pull-right"
                      role="presentation"
                      onClick={this.handleFavorite}
                      id={campaign_detail.id}
                      onKeyDown={this.handleOnKeyDown}
                    />
                  )}
                </div>
              </div>
              <div className="feed_content">
                <div className="feed_description">
                  <div className="col-sm-6 no-padding">
                    <div className="info_wrapper">
                      <span className="normal_title">Start: </span>
                      <span className="secondary_title">
                        {campaign_detail.start}
                      </span>
                    </div>
                    <div className="info_wrapper">
                      <span className="normal_title">Procedure: </span>
                      <span className="secondary_title">
                        {campaign_detail.procedure}
                      </span>
                    </div>
                    <div className="info_wrapper">
                      <span className="normal_title">Target group: </span>
                      <span className="secondary_title">
                        {campaign_detail.target_group}
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 no-padding">
                    <div className="info_wrapper">
                      <span className="normal_title">End: </span>
                      <span className="secondary_title">
                        {campaign_detail.end}
                      </span>
                    </div>
                    <div className="info_wrapper">
                      <span className="normal_title">Type: </span>
                      <span className="secondary_title">
                        {campaign_detail.type}
                      </span>
                    </div>
                    <div className="info_wrapper">
                      <span className="normal_title">Applications: </span>
                      <span className="secondary_title">
                        {campaign_detail.applications}
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 no-padding">
                    <div className="info_wrapper">
                      <span className="normal_title">Start: </span>
                      <span className="secondary_title">
                        {campaign_detail.start}
                      </span>
                    </div>
                    <div className="info_wrapper">
                      <span className="normal_title">Procedure: </span>
                      <span className="secondary_title">
                        {campaign_detail.procedure}
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 no-padding">
                    <div className="info_wrapper">
                      <span className="normal_title">End: </span>
                      <span className="secondary_title">
                        {campaign_detail.end}
                      </span>
                    </div>
                    <div className="info_wrapper">
                      <span className="normal_title">Type: </span>
                      <span className="secondary_title">
                        {campaign_detail.end}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feed_footer margin-t-15 margin-b-15">
                <div className="messages">
                  <span className="count">{campaign_detail.msg_count}</span>
                  <img
                    src={images.feed_msg}
                    alt={"feed_msg"}
                    role="presentation"
                    onClick={this.handleMessage}
                    id={campaign_detail.user.id}
                    onKeyDown={this.handleOnKeyDown}
                  />
                </div>
                <div className="likes">
                  <span className="count">{campaign_detail.like_count}</span>
                  {campaign_detail.isFavorite ? (
                    <img
                      src={images.blue_heart}
                      alt="like-1"
                      className="pull-right"
                      role="presentation"
                      onClick={this.handleFavorite}
                      id={campaign_detail.id}
                      onKeyDown={this.handleOnKeyDown}
                    />
                  ) : (
                    <img
                      src={images.feed_like}
                      alt="like"
                      className="pull-right"
                      role="presentation"
                      onClick={this.handleFavorite}
                      id={campaign_detail.id}
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
              <Comments
                campaign={campaign_detail}
                addComment={this.addComment}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Information;
