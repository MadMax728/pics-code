import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns, getSearch } from "../../../actions";
import { CampaignLoading, NoDataFoundCenterPage } from "../../ui-kit";
import { CampaignCard } from "../../misc";
import * as enumerations from "../../../lib/constants/enumerations";
import { search } from "../../../lib/utils/helpers";

class CampaignPage extends Component {
  constructor(props) {
    super(props);
    this.state = { type: props.type, campaignList: null };
  }

  render() {
    let { campaignList } = this.state;
    const { isLoading, searchData } = this.props;
    campaignList = search(campaignList, "userName", searchData.searchKeyword);

    return (
      <div className={"padding-rl-10 middle-section"}>
        {campaignList && !isLoading && this.renderCampaignList()}
        {isLoading && <CampaignLoading />}
        {!isLoading &&
          (!campaignList || (campaignList && campaignList.length === 0)) && (
            <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />
          )}
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.handleRefresh();
    this.handleCampeignList();
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.type !== prevState.type) {
      return {
        type: nextProps.type
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { type } = this.state;
    if (prevState.type !== type) {
      const data = { userType: type };
      this.props.getCampaigns("getCampaignType", data).then(() => {
        const { campaignList } = this.props;
        this.setState({ campaignList });
      });
      this.props.getSearch("");
    }
  }

  handleCampeignList = () => {
    const data = {
      userType: this.state.type
    };
    this.props.getCampaigns("getCampaignType", data).then(() => {
      const { campaignList } = this.props;
      this.setState({ campaignList });
    });
  };

  handleRefresh = () => {
    const { searchData, getSearch } = this.props;
    if (searchData.searchKeyword) {
      getSearch("");
      this.handleCampeignList();
    }
  };

  renderCampaignList = () => {
    let { campaignList } = this.state;
    const { searchData, handleModalInfoShow } = this.props;
    campaignList = search(campaignList, "userName", searchData.searchKeyword);

    return campaignList.map(campaign => {
      return (
        <div key={campaign.id}>
          {campaign.mediaUrl &&
            campaign.typeContent &&
            campaign.typeContent.toLowerCase() !==
              enumerations.mediaTypes.video &&
            (campaign.postType.toLowerCase() ===
              enumerations.contentTypes.companyCampaign ||
              campaign.postType.toLowerCase() ===
                enumerations.contentTypes.creatorCampaign) && (
              <CampaignCard
                item={campaign}
                isDescription={false}
                isInformation
                isStatus={false}
                isBudget={false}
                isReport={false}
                handleModalInfoShow={handleModalInfoShow}
              />
            )}
        </div>
      );
    });
  };
}

CampaignPage.propTypes = {
  type: PropTypes.string.isRequired,
  getCampaigns: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  campaignList: PropTypes.any,
  searchData: PropTypes.any,
  getSearch: PropTypes.func,
  handleModalInfoShow: PropTypes.func
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  campaignList: state.campaignData.campaigns,
  searchData: state.searchData,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getCampaigns,
  getSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignPage);
