import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import { connect } from "react-redux";
import { getCampaigns } from "../../../../actions";
import { InlineLoading } from "../../../ui-kit";

import PropTypes from "prop-types";

class Participant extends Component {
  componentDidMount = () => {
    this.props.getCampaigns("getParticipantCampaigns");
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
              isStatus={false}
            />
          )}
        {isLoading && <InlineLoading />}
      </div>
    );
  }
}

Participant.propTypes = {
  handleModalShow: PropTypes.func,
  handleModalInfoShow: PropTypes.func,
  // remove when actual API Call
  getCampaigns: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  participants_campaigns_list: PropTypes.any
};

const mapStateToProps = state => ({
  participants_campaigns_list: state.campaignData.campaigns,
  isLoading: state.campaignData.isLoading
});

const mapDispatchToProps = {
  // remove when actual API Call
  getCampaigns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Participant);
