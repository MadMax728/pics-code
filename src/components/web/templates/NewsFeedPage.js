import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { CampaignCard, AdCard, ImageCard, VideoCard } from "../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class NewsFeedPage extends Component {
  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.props.getProfile("getNewsFeedOther", this.props.match.params.id);
    } else {
      this.props.getProfile("getNewsFeedOwner");
    }
  };

  renderNewsFeedList = () => {
    const { newsFeedList } = this.props;
    return newsFeedList.map(newsFeed => {
      return (
        <div key={newsFeed.id}>
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
  getProfile: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  newsFeedList: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  newsFeedList: state.userDataByUsername.items,
  isLoading: state.userDataByUsername.isLoading,
  error: state.userDataByUsername.error
});

const mapDispatchToProps = {
  getProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeedPage);
