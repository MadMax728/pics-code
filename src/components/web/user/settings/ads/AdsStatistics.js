import React, { Component } from "react";
import SettingAdsStatisticsRight from "./SettingAdsStatisticsRight";
import { adStatistics } from "../../../../../mock-data";

class AdsStatistics extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      adStatistics: adStatistics
    };
  }
  render() {
    const { adStatistics } = this.state;

    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <div className="campaign-middle-section">
            <div className="normal_title padding-15">{adStatistics.title}</div>
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
                    style={{ width: `${adStatistics.total_budget_spent_per}` }}
                  />
                </div>
                <span className="counter">
                  {adStatistics.total_budget_spent_per}
                </span>
              </div>
            </div>
            <div className="campaign-block">
              <div className="normal_title padding-15">Daily budget</div>
              <div className="indicators">
                <div>
                  <span className="blue-block" />
                  Daily budget spent
                </div>
                <div>
                  <span className="grey-block" />
                  Remaining daily budget
                </div>
              </div>
              <div className="progressbar-wrapper">
                <div className="progressbar">
                  <div
                    style={{ width: `${adStatistics.daily_budget_spent_per}` }}
                  />
                </div>
                <span className="counter">
                  {adStatistics.daily_budget_spent_per}
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
                  <div
                    style={{ width: `${adStatistics.performance_view_per}` }}
                  />
                </div>
                <span className="counter">
                  {adStatistics.performance_view_per}
                </span>
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
                    style={{ width: `${adStatistics.runtime_passed_per}` }}
                  />
                </div>
                <span className="counter">
                  {adStatistics.runtime_passed_per}
                </span>
              </div>
            </div>
          </div>
        </div>
        <SettingAdsStatisticsRight adStatistics={adStatistics} />
      </div>
    );
  }
}

export default AdsStatistics;
