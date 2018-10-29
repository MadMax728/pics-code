import React, { Component } from "react";
import PropTypes from "prop-types";
import Feed from "./Feed";

const propTypes = {
  campaigns: PropTypes.array.isRequired,
  handleModalInfoShow: PropTypes.func
};

class NewsFeeds extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      campaigns: this.props.campaigns
    };
  }

  handleFavorite = e => {
    let id = e.target.id;
    let campaigns = this.state.campaigns;
    console.log(id);
    campaigns.filter(
      campaign =>
        campaign.id === parseInt(id) &&
        (campaign.isFavorite = !campaign.isFavorite)
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
          />
        </div>
      );
    });
  }
}

NewsFeeds.propTypes = propTypes;

export default NewsFeeds;
