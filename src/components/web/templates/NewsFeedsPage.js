import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { CampaignCard, AdCard, ImageCard, VideoCard } from "../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class NewsFeedsRoot extends Component {
  componentDidMount = () => {
    this.props.getCampaigns("getNewFeedCampaigns");
  };

  renderNewsFeedList = () => {
    const { newsFeedList, isLoading } = this.props;
    return newsFeedList.map(newsFeed => {
      return (
        <div key={newsFeed.id}>
          {isLoading && <CampaignLoading />}
          {newsFeed.type === enumerations.contentTypes.campaign && (
            <CampaignCard
              item={newsFeed}
              isDescription
              isInformation={false}
              isStatus={false}
            />
          )}
          {newsFeed.type === enumerations.contentTypes.ad && (
            <AdCard
              item={newsFeed}
              isDescription
              isInformation={false}
              isStatus={false}
            />
          )}
          {newsFeed.type === enumerations.contentTypes.image && (
            <ImageCard item={newsFeed} />
          )}
          {newsFeed.type === enumerations.contentTypes.video && (
            <VideoCard item={newsFeed} />
          )}
        </div>
      );
    });
  };

  render() {
    const { newsFeedList, isLoading } = this.props;
    console.log(isLoading);

    return (
      <div className={"middle-section padding-rl-10"}>
        {newsFeedList && !isLoading && this.renderNewsFeedList()}
        {isLoading && <CampaignLoading />}
      </div>
    );
  }
}

NewsFeedsRoot.propTypes = {
  handleModalInfoShow: PropTypes.func.isRequired,
  handleModalShow: PropTypes.func,
  getCampaigns: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  newsFeedList: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  newsFeedList: state.campaignData.campaigns,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getCampaigns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeedsRoot);
