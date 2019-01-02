import React, { Component } from "react";
import { connect } from "react-redux";
import { getDashboard } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";
import PropTypes from "prop-types";

class ParticipantsPage extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.getDashboard("participants");
  };

  renderParticipantsList = () => {
    const { participantsList } = this.props;
    return participantsList.map(participant => {
      return (
        <div key={participant.id}>
          {participant.postType &&
            participant.mediaUrl &&
            participant.postType.toLowerCase() ===
              enumerations.contentTypes.companyParticipantCampaign && (
              <MediaCard item={participant} isDescription />
            )}
        </div>
      );
    });
  };

  render() {
    const { participantsList, isLoadingparticipants } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        {participantsList && !isLoadingparticipants && this.renderParticipantsList()}
        {isLoadingparticipants && <CampaignLoading />}
      </div>
    );
  }
}

ParticipantsPage.propTypes = {
  // remove when actual API Call
  getDashboard: PropTypes.func.isRequired,
  isLoadingparticipants: PropTypes.bool,
  participantsList: PropTypes.any
  // errorparticipants: PropTypes.any
};

const mapStateToProps = state => ({
  participantsList: state.dashboardData.participants,
  isLoadingparticipants: state.dashboardData.isLoadingparticipants,
  errorparticipants: state.dashboardData.errorparticipants
});

const mapDispatchToProps = {
  // remove when actual API Call
  getDashboard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticipantsPage);
