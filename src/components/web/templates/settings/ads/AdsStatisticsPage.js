import React, { Component } from "react";
import SettingAdsStatisticsRight from "./SettingAdsStatisticsRight";
import { adStatistics } from "../../../../../mock-data";
import { Translations } from "../../../../../lib/translations";

class AdsStatisticsPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      adStatistics
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
              <div className="normal_title padding-15">
                {Translations.create_ads.total_budget}
              </div>
              <div className="indicators">
                <div>
                  <span className="blue-block" />
                  {Translations.create_ads.budget_spent}
                </div>
                <div>
                  <span className="grey-block" />
                  {Translations.create_ads.remaining_Budget}
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
              <div className="normal_title padding-15">
                {Translations.create_ads.daily_budget}
              </div>
              <div className="indicators">
                <div>
                  <span className="blue-block" />
                  {Translations.create_ads.daily_budget_spent}
                </div>
                <div>
                  <span className="grey-block" />
                  {Translations.create_ads.remaining_daily_budget}
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
              <div className="normal_title padding-15">
                {Translations.create_ads.Performance}
              </div>
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
              <div className="normal_title padding-15">
                {Translations.create_ads.runtime}
              </div>
              <div className="indicators">
                <div>
                  <span className="blue-block" />
                  {Translations.create_ads.runtime_passed}
                </div>
                <div>
                  <span className="grey-block" />
                  {Translations.create_ads.remaining_runtime}
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

export default AdsStatisticsPage;
