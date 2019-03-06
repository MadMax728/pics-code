import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDashboard } from "../../../actions";
import { CampaignLoading, NoDataFoundCenterPage } from "../../ui-kit";
import { MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class ParticipantPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      participantList: null,
      isLoading: null
    };
  }

  render() {
    const { participantList, isLoadingparticipants } = this.state;
    return (
      <div className={"middle-section padding-rl-10"}>
        {participantList &&
          participantList.length > 0 &&
          !isLoadingparticipants &&
          this.renderParticipantList()}
        {isLoadingparticipants && <CampaignLoading />}
        {!isLoadingparticipants &&
          (!participantList ||
            (participantList && !participantList.length > 0)) && (
            <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />
          )}
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const data = `?id=${this.props.params.id}`;
    this.props.getDashboard("participants", data).then(() => {
      if (this.props.participantList) {
        this.setState({
          participantList: this.props.participantList.filter(
            e => e.isActive === true
          )
        });
      }
    });
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

  handleRefresh = () => {};

  handleParticipantFilterList = data => {
    const { participantList } = this.state;
    this.setState({
      participantList: participantList.filter(
        e => e.id !== data.id && e.isActive === true
      )
    });
  };

  renderParticipantList = () => {
    const { participantList } = this.state;
    const isParticipant = true;
    const { handleModalShow } = this.props;
    return (
      <div>
        {participantList && participantList.length > 0 ? (
          participantList.map(participant => {
            return (
              <div key={participant.id}>
                {participant.postType &&
                  participant.mediaUrl &&
                  participant.postType.toLowerCase() ===
                    enumerations.contentTypes.companyParticipantCampaign && (
                    <MediaCard
                      item={participant}
                      isParticipant={isParticipant}
                      handleFilterList={this.handleParticipantFilterList}
                      isDescription
                      handleModalShow={handleModalShow}
                    />
                  )}
              </div>
            );
          })
        ) : (
          <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />
        )}
      </div>
    );
  };
}

ParticipantPage.propTypes = {
  // remove when actual API Call
  getDashboard: PropTypes.func.isRequired,
  isLoadingparticipants: PropTypes.bool,
  participantList: PropTypes.any,
  searchData: PropTypes.any,
  params: PropTypes.any,
  isParticipant: PropTypes.any,
  handleModalShow: PropTypes.func
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
  getDashboard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticipantPage);
