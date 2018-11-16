import React, { Component } from "react";
import { NewsFeeds } from "../../feeds";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns } from "../../../../actions";
import { InlineLoading } from "../../../ui-kit";

class Participants extends Component {
  componentDidMount = () => {
    this.props.getCampaigns("getParticipantsCampaigns");
  };

  render() {
    const {
      handleModalInfoShow,
      handleModalShow,
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

Participants.propTypes = {
  handleModalShow: propTypes.func,
  handleModalInfoShow: propTypes.func,
  getCampaigns: propTypes.func.isRequired,
  participants_campaigns_list: propTypes.any,
  isLoading: propTypes.bool.isRequired,
  error: propTypes.any
};

const mapStateToProps = state => ({
  participants_campaigns_list: state.campaignData.campaigns,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getCampaigns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Participants);
