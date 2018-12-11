import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns } from "../../../../../actions";
import { CampaignLoading } from "../../../../ui-kit";
import { CampaignCard } from "../../../../misc";
import * as enumerations from "../../../../../lib/constants/enumerations";

class SettingCampaignPage extends Component {
  componentDidMount = () => {
    this.props.getCampaigns("getSettingsCampaigns");
  };

  renderCampaignList = () => {
    const { campaignList } = this.props;
    return campaignList.map(campaign => {
      return (
        <div key={campaign.id}>
          {campaign.type === enumerations.contentTypes.campaign && (
            <CampaignCard
              item={campaign}
              isDescription={false}
              isInformation
              isStatus
            />
          )}
        </div>
      );
    });
  };

  render() {
    const { campaignList, isLoading } = this.props;

    return (
      <div className="padding-rl-10 middle-section"> 
        {campaignList && !isLoading && this.renderCampaignList()}
        {isLoading && <CampaignLoading />}
      </div>
    );
  }
}

SettingCampaignPage.propTypes = {
  getCampaigns: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  campaignList: PropTypes.any,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  campaignList: state.campaignData.campaigns,
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getCampaigns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingCampaignPage);
