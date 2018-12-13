import React, { Component } from "react";
import { connect } from "react-redux";
import { getDashboard } from "../../../actions";
import PropTypes from "prop-types";
import { CampaignLoading } from "../../ui-kit";
import { MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class ExploreRoot extends Component {
  componentDidMount = () => {
    this.props.getDashboard("explores");
  };

  renderExploreList = () => {
    const { exploreList } = this.props;
    return exploreList.map(explore => {
      return (
        <div key={explore.id}>
          {explore.postType === enumerations.contentTypes.mediaPost && (
            <MediaCard item={explore} isDescription/>
          )}
        </div>
      );
    });
  };

  render() {
    const { exploreList, isLoading } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        {exploreList && !isLoading && this.renderExploreList()}
        {isLoading && <CampaignLoading />}
      </div>
    );
  }
}

ExploreRoot.propTypes = {
  // remove when actual API Call
  getDashboard: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  exploreList: PropTypes.any,
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  exploreList: state.dashboardData.explores,
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
)(ExploreRoot);
