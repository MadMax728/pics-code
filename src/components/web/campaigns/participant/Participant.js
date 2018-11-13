import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import { connect } from "react-redux";
import { getParticipantCampaignsMock } from "../../../../actions";

import PropTypes from "prop-types";

class Participant extends Component {
  componentDidMount = () => {
    this.props.getParticipantCampaignsMock();
  };

  render() {
    const {
      handleModalShow,
      handleModalInfoShow,
      participants_campaigns_list,
      isLoading
    } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        {participants_campaigns_list &&
          !isLoading && (
            <NewsFeeds
              campaigns={participants_campaigns_list}
              handleModalShow={handleModalShow}
              handleModalInfoShow={handleModalInfoShow}
              isDescription
              isInformation={false}
            />
          )}
      </div>
    );
  }
}

Participant.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func,
  // remove when actual API Call
  getParticipantCampaignsMock: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  participants_campaigns_list: PropTypes.any
};

const mapStateToProps = state => ({
  participants_campaigns_list: state.campaignData.participantCampaigns,
  isLoading: state.campaignData.isLoading
});

const mapDispatchToProps = {
  // remove when actual API Call
  getParticipantCampaignsMock
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Participant);
