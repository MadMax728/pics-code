import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNewsFeed } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { CampaignCard, AdCard, MediaCard } from "../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class NewsFeedPage extends Component {
  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.props.getNewsFeed("getNewsFeedOther", this.props.match.params.id);
    } else {
      this.props.getNewsFeed("getNewsFeedOwner");
    }
  };

  renderNewsFeedList = () => {
    const { newsFeedList } = this.props;
    return newsFeedList.map(newsFeed => {
      return (
        <div key={newsFeed.id}>
          {newsFeed.postType.toLowerCase() === enumerations.contentTypes.companyCampaign && (
            <CampaignCard
              item={newsFeed}
              isDescription
              isInformation={false}
              isStatus={false}
            />
          )}
          {newsFeed.postType.toLowerCase() === enumerations.contentTypes.ad && (
            <AdCard
              item={newsFeed}
              isDescription
              isInformation={false}
              isStatus={false}
            />
          )}
          {newsFeed.postType.toLowerCase() === enumerations.contentTypes.image || newsFeed.postType.toLowerCase() === enumerations.contentTypes.video && (
            <MediaCard item={newsFeed} />
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

NewsFeedPage.propTypes = {
  match: PropTypes.any.isRequired,
  getNewsFeed: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  newsFeedList: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  newsFeedList: state.newsFeedData.newsFeed,
  isLoading: state.newsFeedData.isLoading,
  error: state.newsFeedData.error
});

const mapDispatchToProps = {
  getNewsFeed
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeedPage);
