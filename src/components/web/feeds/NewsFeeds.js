import React, { Component } from "react";
import PropTypes from "prop-types";
import Feed from "./Feed";
import { modalType } from "../../../lib/constants/enumerations";
import * as images from "../../../lib/constants/images";

const propTypes = {
  campaigns: PropTypes.array.isRequired,
  handleModalInfoShow: PropTypes.func,
  handleModalShow: PropTypes.func
};

class NewsFeeds extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      campaigns: this.props.campaigns
    };
  }

  handleFavorite = e => {
    const id = e.target.id;
    const campaigns = this.state.campaigns;
    campaigns.filter(
      campaign =>
        campaign.id === parseInt(id) &&
        (campaign.isFavorite = !campaign.isFavorite)
    );
    this.setState({ campaigns });
  };

  handleMessage = e => {
    this.props.handleModalShow(modalType.messages, { id: e.target.id });
  };

  addComment = (campaignId, comment) => {
    const campaigns = this.state.campaigns;
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

    campaigns.filter(
      campaign =>
        campaign.id === parseInt(campaignId) &&
        campaign.comments.unshift(commentData)
    );

    this.setState({ campaigns });
  };

  render() {
    const { handleModalInfoShow } = this.props;
    const { campaigns } = this.state;

    return campaigns.map(campaign => {
      return (
        <div key={campaign.id}>
          <Feed
            campaign={campaign}
            handleModalInfoShow={handleModalInfoShow}
            handleFavorite={this.handleFavorite}
            handleMessage={this.handleMessage}
            addComment={this.addComment}
          />
        </div>
      );
    });
  }
}

NewsFeeds.propTypes = propTypes;

export default NewsFeeds;
