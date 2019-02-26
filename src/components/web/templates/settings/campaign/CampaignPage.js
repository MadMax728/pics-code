import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns } from "../../../../../actions";
import { CampaignLoading, NoDataFoundCenterPage } from "../../../../ui-kit";
import { CampaignCard } from "../../../../misc";
import * as enumerations from "../../../../../lib/constants/enumerations";
import { Auth } from "../../../../../auth";

class SettingCampaignPage extends Component {
  render() {
    const { campaignList, isLoading } = this.props;

    return (
      <div className="padding-rl-10 middle-section">
        {campaignList && !isLoading && this.renderCampaignList()}
        {isLoading && <CampaignLoading />}
        {!isLoading &&
          (!campaignList || (campaignList && campaignList.length === 0)) && (
            <NoDataFoundCenterPage handleRefresh={this.handleRefresh} />
          )}
      </div>
    );
  }

  handleRefresh = () => {};

  componentDidMount = () => {
    const storage = Auth.extractJwtFromStorage();
    let userInfo = null;
    if (storage) {
      userInfo = JSON.parse(storage.userInfo);
    }
    if (userInfo) {
      const data = `${userInfo.id}?type=User`;
      this.props.getCampaigns("getSettingsCampaigns", data);
    }
    window.scrollTo(0, 0);
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
      this.props.getCampaigns("getSettingsCampaigns", searchParam);
    }
  };

  renderCampaignList = () => {
    const { campaignList, handleModalInfoShow, handleModalShow } = this.props;
    return campaignList.map(campaign => {
      return (
        <div key={campaign.id}>
          {campaign.type === enumerations.contentTypes.campaign &&
            campaign.typeContent &&
            campaign.typeContent.toLowerCase() !==
              enumerations.mediaTypes.video && (
              <CampaignCard
                item={campaign}
                isDescription={false}
                isInformation
                isStatus
                isBudget={false}
                isReport={false}
                handleModalInfoShow={handleModalInfoShow}
                handleModalShow={handleModalShow}
              />
            )}
        </div>
      );
    });
  };
}

SettingCampaignPage.propTypes = {
  getCampaigns: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  campaignList: PropTypes.any,
  searchData: PropTypes.any,
  handleModalInfoShow: PropTypes.func,
  handleModalShow: PropTypes.func
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  campaignList: state.campaignData.campaigns,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error,
  searchData: state.searchData
});

const mapDispatchToProps = {
  getCampaigns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingCampaignPage);
