import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDashboard } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { CampaignCard, AdCard, MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class NewsRoot extends Component {
  componentDidMount = () => {
    this.props.getDashboard("news");
  };

  renderNewsFeedList = () => {
    const { newsFeedList } = this.props;
    return newsFeedList.map(newsFeed => {
      return (
        <div key={newsFeed.id}>
        
          {/* {newsFeed.postType && newsFeed.postType.toLowerCase() ===
            enumerations.contentTypes.mediaPost && (
            <MediaCard item={newsFeed} isParticipant={false} isDescription />
          )}
          {newsFeed.postType && newsFeed.postType.toLowerCase() ===
            enumerations.contentTypes.companyCampaign && (
            <CampaignCard
              item={newsFeed}
              isDescription={false}
              isInformation
              isStatus={false}
              isBudget={false}
              isReport={false}
            />
          )}
          {newsFeed.postType && newsFeed.postType.toLowerCase() ===
            enumerations.contentTypes.creatorCampaign && (
            <CampaignCard
              item={newsFeed}
              isDescription={false}
              isInformation
              isStatus={false}
              isBudget={false}
              isReport={false}
            />
          )}
          {newsFeed.postType && newsFeed.postType.toLowerCase() ===
            enumerations.contentTypes.companyParticipantCampaign && (
            <MediaCard item={newsFeed} isParticipant isDescription/>
          )} */}
          {newsFeed.postType && newsFeed.postType.toLowerCase() === enumerations.contentTypes.ad && (
            <AdCard
              item={newsFeed}
              isDescription
              isInformation={false}
              isStatus={false}
            />
          )}
        </div>
      );
    });
  };

  render() {
    const { newsFeedList, isLoading } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        {newsFeedList && !isLoading && this.renderNewsFeedList()}
        {isLoading && <CampaignLoading />}
      </div>
    );
  }
}

NewsRoot.propTypes = {
  getDashboard: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  newsFeedList: PropTypes.any,
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  newsFeedList: state.dashboardData.news,
  isLoading: state.dashboardData.isLoading,
  error: state.dashboardData.error
});

const mapDispatchToProps = {
  getDashboard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsRoot);
