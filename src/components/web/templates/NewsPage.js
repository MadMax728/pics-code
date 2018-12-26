import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDashboard } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { CampaignCard, AdCard, MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class NewsRoot extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
    if (this.props.searchData.searchKeyword) {
      this.props.getDashboard(
        "news",
        "?isSearch=" + this.props.searchData.searchKeyword
      );
    } else {
      this.props.getDashboard("news", "");
    }
  };

  componentWillReceiveProps = nextProps => {
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      const searchKeyword = nextProps.searchData.searchKeyword;
      let searchParam = "";
      if (searchKeyword) {
        searchParam = "?isSearch=" + searchKeyword;
      }
      this.props.getDashboard("news", searchParam);
    }
  };

  renderNewsFeedList = () => {
    const { newsFeedList } = this.props;
    return newsFeedList.map(newsFeed => {
      return (
        <div key={newsFeed.id}>
          {newsFeed.mediaUrl && newsFeed.postType && newsFeed.mediaUrl &&
            newsFeed.postType.toLowerCase() ===
              enumerations.contentTypes.mediaPost && (
              <MediaCard item={newsFeed} isParticipant={false} isDescription />
            )}
          {newsFeed.mediaUrl && newsFeed.postType && newsFeed.mediaUrl &&
            newsFeed.postType.toLowerCase() ===
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
          {newsFeed.mediaUrl && newsFeed.postType && newsFeed.mediaUrl &&
            newsFeed.postType.toLowerCase() ===
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
          {newsFeed.mediaUrl && newsFeed.postType && newsFeed.mediaUrl &&
            newsFeed.postType.toLowerCase() ===
              enumerations.contentTypes.companyParticipantCampaign && (
              <MediaCard item={newsFeed} isParticipant isDescription />
            )}
          {newsFeed.mediaUrl && newsFeed.postType && newsFeed.mediaUrl &&
            newsFeed.postType.toLowerCase() ===
              enumerations.contentTypes.ad && (
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
  searchData: PropTypes.any
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  newsFeedList: state.dashboardData.news,
  searchData: state.searchData,
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
