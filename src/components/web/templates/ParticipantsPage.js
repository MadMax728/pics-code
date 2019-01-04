import React, { Component } from "react";
import { connect } from "react-redux";
import { getDashboard, getSearch } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";
import PropTypes from "prop-types";

class ParticipantsPage extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
    if (this.props.searchData.searchKeyword) {
      this.props.getDashboard(
        "participants",
        "?isSearch=" + this.props.searchData.searchKeyword
      );
    } else {
      this.props.getDashboard("participants", "");
    }
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.searchData.searchKeyword) {
      this.props.getSearch("");
    }
    if (
      nextProps.searchData.searchKeyword !== this.props.searchData.searchKeyword
    ) {
      const searchKeyword = nextProps.searchData.searchKeyword;
      let searchParam = "";
      if (searchKeyword) {
        searchParam = "?isSearch=" + searchKeyword;
      }
      this.props.getDashboard("participants", searchParam);
    }
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
        {participantsList &&
          !isLoadingparticipants &&
          this.renderParticipantsList()}
        {isLoadingparticipants && <CampaignLoading />}
      </div>
    );
  }
}

ParticipantsPage.propTypes = {
  // remove when actual API Call
  getDashboard: PropTypes.func.isRequired,
  isLoadingparticipants: PropTypes.bool,
  participantsList: PropTypes.any,
  searchData: PropTypes.any,
  getSearch: PropTypes.func
  // errorparticipants: PropTypes.any
};

const mapStateToProps = state => ({
  participantsList: state.dashboardData.participants,
  isLoadingparticipants: state.dashboardData.isLoadingparticipants,
  errorparticipants: state.dashboardData.errorparticipants,
  searchData: state.searchData
});

const mapDispatchToProps = {
  // remove when actual API Call
  getDashboard,
  getSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticipantsPage);
