import React, { Component } from "react";
import { connect } from "react-redux";
import { getDashboard, getSearch } from "../../../actions";
import PropTypes from "prop-types";
import { NoDataFoundCenterPage, CampaignLoading } from "../../ui-kit";
import { MediaCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";
import { search } from "../../../lib/utils/helpers";

class ExploreRoot extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      exploreList: null
    };
  }

  render() {
    let { exploreList } = this.state;
    const { isLoadingexplores, searchData } = this.props;
    exploreList = search(exploreList, "userName", searchData.searchKeyword);

    return (
      <div className={"middle-section padding-rl-10"}>
        {exploreList && !isLoadingexplores && this.renderExploreList()}
        {isLoadingexplores && <CampaignLoading />}
        {!isLoadingexplores &&
          (!exploreList || (exploreList && exploreList.length === 0)) && (
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
    this.props.getDashboard("explores", "").then(() => {
      const { exploreList } = this.props;
      this.setState({ exploreList });
    });
  };

  handleRefresh = () => {
    const { searchData, getSearch } = this.props;
    if (searchData.searchKeyword) {
      getSearch("");
      this.handleSearch();
    }
  };

  renderExploreList = () => {
    let { exploreList } = this.state;
    const { searchData } = this.props;
    exploreList = search(exploreList, "userName", searchData.searchKeyword);
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
