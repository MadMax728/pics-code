import React, { Component } from "react";
import { connect } from "react-redux";
import { getDashboard, getSearch } from "../../../actions";
import { CampaignLoading } from "../../ui-kit";
import { MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";
import PropTypes from "prop-types";

class ParticipantPage extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
    if (this.props.searchData.searchKeyword) {
      this.props.getSearch("");
    }
    this.props.getDashboard("participants", "");
  };

  componentWillReceiveProps = nextProps => {
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

  renderParticipantList = () => {
    const { participantList } = this.props;
    return participantList.map(participant => {
      return (
        <div key={participant.id}>
          {(participant.mediaUrl &&
            participant.postType.toLowerCase() ===
              enumerations.contentTypes.mediaPost) ||
            (participant.postType.toLowerCase() ===
              enumerations.contentTypes.companyParticipantCampaign && (
              <MediaCard item={participant} isDescription />
            ))}
        </div>
      );
    });
  };

  render() {
    const { participantList, isLoadingparticipants } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        {participantList &&
          !isLoadingparticipants &&
          this.renderParticipantList()}
        {isLoadingparticipants && <CampaignLoading />}
      </div>
    );
  }
}

ParticipantPage.propTypes = {
  // remove when actual API Call
  getDashboard: PropTypes.func.isRequired,
  isLoadingparticipants: PropTypes.bool,
  participantList: PropTypes.any,
  getSearch: PropTypes.func,
  searchData: PropTypes.any
  // errorparticipants: PropTypes.any
};

const mapStateToProps = state => ({
  participantList: state.dashboardData.participants,
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
)(ParticipantPage);
