import React, { Component } from "react";
import PropTypes from "prop-types";
import Feed from "./Feed";
import * as images from "../../../lib/constants/images";

const propTypes = {
  campaigns: PropTypes.array.isRequired,
  handleModalInfoShow: PropTypes.func,
  handleModalShow: PropTypes.func,
  isDescription: PropTypes.bool.isRequired,
  isInformation: PropTypes.bool.isRequired
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
    campaigns.filter(
      campaign =>
        campaign.id === parseInt(id) &&
        (campaign.like_count = campaign.isFavorite
          ? campaign.like_count + 1
          : campaign.like_count - 1)
    );
    this.setState({ campaigns });
  };

  render() {
    const { handleModalInfoShow, isInformation, isDescription } = this.props;
    const { campaigns } = this.state;

    return campaigns.map(campaign => {
      return (
        <div key={campaign.id}>
          <Feed
            campaign={campaign}
            handleModalInfoShow={handleModalInfoShow}
            handleFavorite={this.handleFavorite}
            handleMessage={this.handleMessage}
            isDescription={isDescription}
            isInformation={isInformation}
          />
        </div>
      );
    });
  }
}

NewsFeeds.propTypes = propTypes;

export default NewsFeeds;
