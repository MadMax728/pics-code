import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { InlineLoading } from "../../../ui-kit";
import { getCampaigns } from "../../../../actions";
class NewsFeed extends Component {
  componentDidMount = () => {
    this.props.getCampaigns("getNewsFeedCampaigns");
  };

  render() {
    const {
      handleModalShow,
      handleModalInfoShow,
      news_feed_campaigns_list,
      isLoading
    } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        {news_feed_campaigns_list &&
          !isLoading && (
            <NewsFeeds
              campaigns={news_feed_campaigns_list}
              handleModalShow={handleModalShow}
              handleModalInfoShow={handleModalInfoShow}
              isDescription
              isInformation={false}
              isStatus={false}
            />
          )}
        {isLoading && <InlineLoading />}
      </div>
    );
  }
}

NewsFeed.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func,
  getCampaigns: PropTypes.func.isRequired,
  news_feed_campaigns_list: PropTypes.any,
  isLoading: PropTypes.bool,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  news_feed_campaigns_list: state.campaignData.campaigns,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getCampaigns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
