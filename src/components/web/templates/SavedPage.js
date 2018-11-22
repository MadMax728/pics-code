import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSaved } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { CampaignCard, AdCard, ImageCard, VideoCard } from "../misc";
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
          {saved.type === enumerations.contentTypes.campaign && (
            <CampaignCard
              item={saved}
              isDescription
              isInformation={false}
              isStatus={false}
            />
          )}
          {saved.type === enumerations.contentTypes.ad && (
            <AdCard
              item={saved}
              isDescription
              isInformation={false}
              isStatus={false}
            />
          )}
          {saved.type === enumerations.contentTypes.image && (
            <ImageCard item={saved} />
          )}
          {saved.type === enumerations.contentTypes.video && (
            <VideoCard item={saved} />
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
  isLoading: PropTypes.bool.isRequired,
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
