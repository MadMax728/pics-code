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

    this.state = {};
  }

  render() {
    const { campaigns, handleModalInfoShow } = this.props;

    return campaigns.map(campaign => {
      return (
        <div key={campaign.id}>
          <Feed campaign={campaign} handleModalInfoShow={handleModalInfoShow} />
        </div>
      );
    });
  }
}

NewsFeeds.propTypes = propTypes;

export default NewsFeeds;
