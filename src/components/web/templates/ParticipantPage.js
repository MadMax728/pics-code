import React, { Component } from "react";
import { connect } from "react-redux";
import { getDashboard } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";
import PropTypes from "prop-types";

class ParticipantPage extends Component {
  componentDidMount = () => {
    this.props.getDashboard("participants");
  };

  renderParticipantList = () => {
    const { participantList } = this.props;
    return participantList.map(participant => {
      return (
        <div key={participant.id}>
          { participant.mediaUrl && participant.postType.toLowerCase() === enumerations.contentTypes.mediaPost ||
            (participant.postType.toLowerCase() ===
              enumerations.contentTypes.companyParticipantCampaign && (
            <MediaCard item={participant} isDescription/>)
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
  // remove when actual API Call
  getDashboard: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  participantList: PropTypes.any,
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  participantList: state.dashboardData.participants,
  isLoading: state.dashboardData.isLoading,
  error: state.dashboardData.error
});

const mapDispatchToProps = {
  // remove when actual API Call
  getDashboard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticipantPage);
