import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import { campaigns_list } from "../../../../mock-data";
import PropTypes from "prop-types";

class NewsFeed extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      news_feed_campaigns_list: campaigns_list
    };
  }

  render() {
    const { news_feed_campaigns_list } = this.state;
    const { handleModalShow, handleModalInfoShow } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        {news_feed_campaigns_list && (
          <NewsFeeds
            campaigns={news_feed_campaigns_list}
            handleModalShow={handleModalShow}
            handleModalInfoShow={handleModalInfoShow}
            isDescription
            isInformation={false}
          />
        )}
      </div>
    );
  }
}

NewsFeed.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func
};

export default NewsFeed;
