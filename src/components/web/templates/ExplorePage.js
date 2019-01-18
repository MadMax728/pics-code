import React, { Component } from "react";
import { connect } from "react-redux";
import { getDashboard, getSearch } from "../../../actions";
import PropTypes from "prop-types";
import { NoDataFoundCenterPage, CampaignLoading } from "../../ui-kit";
import { MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";

class ExploreRoot extends Component {


  render() {
    const { exploreList, isLoadingexplores } = this.props;
    return (
      <div className={"middle-section padding-rl-10"}>
        { !isLoadingexplores && ( !exploreList || (exploreList && !exploreList.length) ) && <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />}
        { exploreList && exploreList.length && !isLoadingexplores && this.renderExploreList()}
        { isLoadingexplores && <CampaignLoading />}
      </div>
    );
  }
  
  componentDidMount = () => {
    window.scrollTo(0, 0);
    if (this.props.searchData.searchKeyword) {
      this.props.getSearch("");
    }
    if (this.props.searchData.searchKeyword) {
      this.props.getDashboard(
        "explores",
        "?isSearch=" + this.props.searchData.searchKeyword
      );
    } else {
      this.props.getDashboard("explores", "");
    }
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
      this.props.getDashboard("explores", searchParam);
    }
  };

  handleRefresh = () => {
  };

  renderExploreList = () => {
    const { exploreList } = this.props;
    return exploreList.map(explore => {
      return (
        <div key={explore.id}>
          {explore.mediaUrl &&
            explore.postType === enumerations.contentTypes.mediaPost && (
              <MediaCard item={explore} isDescription />
            )}
        </div>
      );
    });
  };

}

ExploreRoot.propTypes = {
  // remove when actual API Call
  getDashboard: PropTypes.func.isRequired,
  isLoadingexplores: PropTypes.bool,
  exploreList: PropTypes.any,
  searchData: PropTypes.any,
  getSearch: PropTypes.func
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  exploreList: state.dashboardData.explores,
  isLoadingexplores: state.dashboardData.isLoadingexplores,
  error: state.dashboardData.error,
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
)(ExploreRoot);
