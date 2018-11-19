import React, { Component } from "react";
import { connect } from "react-redux";
import { getCampaigns } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { ImageCard, VideoCard } from "../misc";
import * as enumerations from "../../../lib/constants/enumerations";
import PropTypes from "prop-types";

class ParticipantPage extends Component {
  componentDidMount = () => {
    this.props.getCampaigns("getParticipant");
  };

  renderParticipantList = () => {
    const { participantList, isLoading } = this.props;
    return participantList.map(newsFeed => {
      return (
        <div key={newsFeed.id}>
          {isLoading && <CampaignLoading />}
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
    const { participantList, isLoading } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        {participantList && !isLoading && this.renderParticipantList()}
        {isLoading && <CampaignLoading />}
      </div>
    );
  }
}

ParticipantPage.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func,
  // remove when actual API Call
  getCampaigns: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  participantList: PropTypes.any
};

const mapStateToProps = state => ({
  participantList: state.campaignData.campaigns,
  isLoading: state.campaignData.isLoading
});

const mapDispatchToProps = {
  // remove when actual API Call
  getCampaigns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticipantPage);
