import React, { Component } from "react";
import PropTypes from "prop-types";
import CampaignCardHeader from "./headers/CampaignCardHeader";
import CampaignCardBody from "./body/CampaignCardBody";
import CampaignCardFooter from "./footers/CampaignCardFooter";
import { Translations } from "../../../lib/translations";
import { RenderToolTips } from "../../common";
import CommentCard from "./CommentCard";

class CampaignCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isComments: false
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
    return <RenderToolTips items={reportTips} id={this.props.campaign.id} />;
  };

  handleReportPost = () => {};

  handleSavePost = () => {};

  handleContent = () => {};

  handleFavorite = e => {};

  handleCommentsSections = () => {
    this.setState({ isComments: !this.state.isComments });
  };

  render() {
    return (
      <div className="feed_wrapper">
        <CampaignCardHeader
          campaign={this.props.campaign}
          isDescription={this.props.isDescription}
          isInformation={this.props.isInformation}
          handleFavorite={this.handleFavorite}
        />
        <CampaignCardBody
          campaign={this.props.campaign}
          isDescription={this.props.isDescription}
          isInformation={this.props.isInformation}
        />
        <CampaignCardFooter
          campaign={this.props.campaign}
          handleCommentsSections={this.handleCommentsSections}
          isComments={this.state.isComments}
          isStatus={this.props.isStatus}
          renderReportTips={this.renderReportTips}
          handleFavorite={this.handleFavorite}
        />
        {this.state.isComments && (
          <CommentCard campaign={this.props.campaign} />
        )}
      </div>
    );
  }
}

CampaignCard.propTypes = {
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

export default CampaignCard;
