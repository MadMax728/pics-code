import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSaved } from "../../../actions";
import { CampaignLoading, NoDataFoundCenterPage } from "../../ui-kit";
import { CampaignCard, AdCard, MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class SavedPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      savedList: null
    };
  }

  render() {
    const { isLoading } = this.props;
    const { savedList } = this.state;
    return (
      <div className={"middle-section padding-rl-10"}>
        {savedList && this.renderSavedList()}
        {!savedList && isLoading && <CampaignLoading />}
        {!isLoading &&
          (!savedList || (savedList && savedList.length === 0)) && (
            <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />
          )}
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.getSaved("getSavedOwner").then(() => {
      if (this.props.savedList) {
        this.setState({ savedList: this.props.savedList });
      }
    });
  };

  handleRefresh = () => {};

  handleRemove = id => {
    const { savedList } = this.state;
    this.setState({ savedList: savedList.filter(e => e.id !== id) });
  };

  renderSavedList = () => {
    const { savedList } = this.state;
    const { handleModalInfoShow, handleModalShow } = this.props;
    return savedList.map(saved => {
      return (
        <div key={saved.id}>
          {saved.mediaUrl &&
            saved.postType.toLowerCase() ===
              enumerations.contentTypes.mediaPost && (
              <MediaCard
                item={saved}
                isParticipant={false}
                isDescription
                isSavedPage
                handleRemove={this.handleRemove}
                handleModalShow={handleModalShow}
              />
            )}
          {saved.mediaUrl &&
            saved.typeContent &&
            saved.typeContent.toLowerCase() !== enumerations.mediaTypes.video &&
            saved.postType.toLowerCase() ===
              enumerations.contentTypes.companyCampaign && (
              <CampaignCard
                isSavedPage
                handleRemove={this.handleRemove}
                item={saved}
                isDescription={false}
                isInformation
                isStatus={false}
                isBudget={false}
                isReport={false}
                handleModalInfoShow={handleModalInfoShow}
              />
            )}
          {saved.mediaUrl &&
            saved.typeContent &&
            saved.typeContent.toLowerCase() !== enumerations.mediaTypes.video &&
            saved.postType.toLowerCase() ===
              enumerations.contentTypes.creatorCampaign && (
              <CampaignCard
                isSavedPage
                handleRemove={this.handleRemove}
                item={saved}
                isDescription={false}
                isInformation
                isStatus={false}
                isBudget={false}
                isReport={false}
                handleModalInfoShow={handleModalInfoShow}
              />
            )}
          {saved.mediaUrl &&
            saved.postType.toLowerCase() ===
              enumerations.contentTypes.companyParticipantCampaign && (
              <MediaCard
                item={saved}
                isParticipant
                isDescription
                isSavedPage
                handleRemove={this.handleRemove}
                handleModalShow={handleModalShow}
              />
            )}
          {saved.mediaUrl &&
            saved.postType.toLowerCase() === enumerations.contentTypes.ad && (
              <AdCard
                item={saved}
                isDescription
                isInformation={false}
                isStatus={false}
                isSavedPage
                handleRemove={this.handleRemove}
              />
            )}
        </div>
      );
    });
  };
}

SavedPage.propTypes = {
  getSaved: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  savedList: PropTypes.any,
  handleModalInfoShow: PropTypes.func,
  handleModalShow: PropTypes.func
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  savedList: state.savedData.saves,
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
