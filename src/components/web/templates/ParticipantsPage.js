import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDashboard, getSearch } from "../../../actions";
import { CampaignLoading, NoDataFoundCenterPage } from "../../ui-kit";
import { MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";
import { search } from "../../../lib/utils/helpers";

class ParticipantsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      participantsList: null
    };
  }

  render() {
    let { participantsList } = this.state;
    const { isLoadingparticipants, searchData } = this.props;
    participantsList = search(
      participantsList,
      "userName",
      searchData.searchKeyword
    );

    return (
      <div className={"middle-section padding-rl-10"}>
        {participantsList &&
          !isLoadingparticipants &&
          this.renderParticipantsList()}
        {isLoadingparticipants && <CampaignLoading />}
        {!isLoadingparticipants &&
          (!participantsList ||
            (participantsList && !participantsList.length)) && (
            <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />
          )}
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.handleRefresh();
    this.handleSearch();
  };

  handleSearch = () => {
    this.props.getDashboard("participants", "").then(() => {
      const { participantsList } = this.props;
      this.setState({ participantsList });
    });
  };

  handleRefresh = () => {
    const { searchData, getSearch } = this.props;
    if (searchData.searchKeyword) {
      getSearch("");
      this.handleSearch();
    }
  };

  renderParticipantsList = () => {
    let { participantsList } = this.state;
    const { searchData } = this.props;
    participantsList = search(
      participantsList,
      "userName",
      searchData.searchKeyword
    );
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
