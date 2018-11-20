import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { CampaignCard, AdCard, ImageCard, VideoCard } from "../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class SavedPage extends Component {
  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.props.getProfile("getSavedOther", this.props.match.params.id);
    } else {
      this.props.getProfile("getSavedOwner");
    }
  };
  renderSavedList = () => {
    const { savedList } = this.props;
    return savedList.map(newsFeed => {
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
    const { savedList, isLoading } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        {savedList && !isLoading && this.renderSavedList()}
        {isLoading && <CampaignLoading />}
      </div>
    );
  }
}

SavedPage.propTypes = {
  match: PropTypes.any.isRequired,
  getProfile: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  savedList: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  savedList: state.userDataByUsername.items,
  isLoading: state.userDataByUsername.isLoading,
  error: state.userDataByUsername.error
});

const mapDispatchToProps = {
  getProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedPage);
