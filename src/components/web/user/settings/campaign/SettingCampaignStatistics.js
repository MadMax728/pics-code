import React, { Component } from "react";
import SettingCampaignStatisticsRight from "./SettingCampaignStatisticsRight";
import { campaignStatistics } from "../../../../../mock-data";

class SettingCampaignStatistics extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      campaign_statistics: campaignStatistics
    };
  }
  render() {
    const { campaign_statistics } = this.state;
    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <div className="campaign-middle-section">
            <div className="normal_title padding-15">
              {campaign_statistics.title}
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
                    style={{ width: `${campaign_statistics.budget_spent_per}` }}
                  />
                </div>
                <span className="counter">
                  {campaign_statistics.budget_spent_per}
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
                  <div style={{ width: `${campaign_statistics.view_per}` }} />
                </div>
                <span className="counter">{campaign_statistics.view_per}</span>
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
                      width: `${campaign_statistics.runtime_passed_per}`
                    }}
                  />
                </div>
                <span className="counter">
                  {campaign_statistics.runtime_passed_per}
                </span>
              </div>
            </div>
          </div>
        </div>
        <SettingCampaignStatisticsRight
          campaignStatistics={campaign_statistics}
        />
      </div>
    );
  }
}

export default SettingCampaignStatistics;
