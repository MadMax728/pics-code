import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSaved } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { CampaignCard, AdCard, MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class SavedPage extends Component {
  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.props.getSaved("getSavedOther", this.props.match.params.id);
    } else {
      this.props.getSaved("getSavedOwner");
    }
  };
  renderSavedList = () => {
    const { savedList } = this.props;
    return savedList.map(saved => {
      return (
        <div key={saved.id}>
        {saved.postType.toLowerCase() === enumerations.contentTypes.mediaPost && (
            <MediaCard item={saved} isParticipant={false} />
          )}
          {saved.postType.toLowerCase() === enumerations.contentTypes.companyCampaign && (
            <CampaignCard
              item={saved}
              isDescription={false}
              isInformation
              isStatus={false}
            />
          )}
          {saved.postType.toLowerCase() === enumerations.contentTypes.creatorCampaign && (
            <CampaignCard
              item={saved}
              isDescription={false}
              isInformation
              isStatus={false}
            />
          )}
          {saved.postType.toLowerCase() === enumerations.contentTypes.companyParticipantCampaign && (
            <MediaCard item={saved} isParticipant />
          )}
          {saved.postType.toLowerCase() === enumerations.contentTypes.ad && (
            <AdCard
              item={saved}
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
  getSaved: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  savedList: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  savedList: state.savedData.saved,
  isLoading: state.savedData.isLoading,
  error: state.savedData.error
});

const mapDispatchToProps = {
  getSaved
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedPage);
