import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { getCampaigns } from "../../../../../actions";
import { NewsFeeds } from "../../../feeds";
import { InlineLoading } from "../../../../ui-kit";

class SettingCampaignPage extends Component {
  componentDidMount = () => {
    this.props.getCampaigns("getSettingsCampaigns");
  };

  render() {
    const {
      isBackOffice,
      handleModalShow,
      handleModalInfoShow,
      setting_campaigns,
      isLoading
    } = this.props;

    return (
      <div className="padding-rl-10 middle-section">
        {setting_campaigns &&
          !isLoading && (
            <NewsFeeds
              campaigns={setting_campaigns}
              handleModalShow={handleModalShow}
              handleModalInfoShow={handleModalInfoShow}
              isDescription={false}
              isInformation
              isStatus
            />
          )}
        {isLoading && <InlineLoading />}
      </div>
    );
  }
}

SettingCampaignPage.propTypes = {
  handleModalShow: propTypes.func,
  handleModalInfoShow: propTypes.func,
  isBackOffice: propTypes.bool.isRequired,
  getCampaigns: propTypes.func.isRequired,
  isLoading: propTypes.bool.isRequired,
  setting_campaigns: propTypes.any,
  error: propTypes.any
};

const mapStateToProps = state => ({
  setting_campaigns: state.campaignData.campaigns,
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
