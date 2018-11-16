import React, { Component } from "react";
import SettingCampaignStatisticsRight from "./SettingCampaignStatisticsRight";
import { getCampaignDetails } from "../../../../../actions";
import { connect } from "react-redux";
import { InlineLoading } from "../../../../ui-kit";
import PropTypes from "prop-types";

class SettingCampaignStatisticsPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      campaignId: this.props.match.params.id
    };
  }

  componentDidMount = () => {
    this.props.getCampaignDetails(this.state.campaignId);
  };

  render() {
    const { campaign_detail, isLoading } = this.props;
    return (
      <div>
        <div className="padding-rl-10 middle-section">
          {campaign_detail &&
            !isLoading && (
              <div className="campaign-middle-section">
                <div className="normal_title padding-15">
                  {campaign_detail.title}
                </div>
                <div className="campaign-block">
                  <div className="normal_title padding-15">Total budget</div>
                  <div className="indicators">
                    <div>
                      <span className="blue-block" />
                      Budget spent
                    </div>
                    <div>
                      <span className="grey-block" />
                      Remaining Budget
                    </div>
                  </div>
                  <div className="progressbar-wrapper">
                    <div className="progressbar">
                      <div
                        style={{ width: `${campaign_detail.budget_spent_per}` }}
                      />
                    </div>
                    <span className="counter">
                      {campaign_detail.budget_spent_per}
                    </span>
                  </div>
                </div>
                <div className="campaign-block">
                  <div className="normal_title padding-15">Performance</div>
                  <div className="indicators">
                    <div>
                      <span className="blue-block" />
                      Views
                    </div>
                    <div>
                      <span className="grey-block" />
                      Clicks
                    </div>
                  </div>
                  <div className="progressbar-wrapper">
                    <div className="progressbar">
                      <div style={{ width: `${campaign_detail.view_per}` }} />
                    </div>
                    <span className="counter">{campaign_detail.view_per}</span>
                  </div>
                </div>
                <div className="campaign-block">
                  <div className="normal_title padding-15">Runtime</div>
                  <div className="indicators">
                    <div>
                      <span className="blue-block" />
                      Runtime passed
                    </div>
                    <div>
                      <span className="grey-block" />
                      Remaining runtime
                    </div>
                  </div>
                  <div className="progressbar-wrapper">
                    <div className="progressbar">
                      <div
                        style={{
                          width: `${campaign_detail.runtime_passed_per}`
                        }}
                      />
                    </div>
                    <span className="counter">
                      {campaign_detail.runtime_passed_per}
                    </span>
                  </div>
                </div>
              </div>
            )}
        </div>
        {campaign_detail &&
          !isLoading && (
            <SettingCampaignStatisticsRight
              campaignStatistics={campaign_detail}
            />
          )}
        {isLoading && <InlineLoading />}
      </div>
    );
  }
}

SettingCampaignStatisticsPage.propTypes = {
  match: PropTypes.any,
  getCampaignDetails: PropTypes.func.isRequired,
  campaign_detail: PropTypes.any,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.any
};

const mapStateToProps = state => ({
  campaign_detail: state.campaignData.campaign[0],
  isLoading: state.campaignData.isLoading,
  error: state.campaignData.error
});

const mapDispatchToProps = {
  getCampaignDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingCampaignStatisticsPage);
