import React, { Component } from "react";
import SettingAdsStatisticsRight from "./SettingAdsStatisticsRight";
import { Translations } from "../../../../../lib/translations";
import { getAdDetails } from "../../../../../actions";
import { connect } from "react-redux";
import { InlineLoading } from "../../../../ui-kit";
import PropTypes from "prop-types";
class AdsStatisticsPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      adId: this.props.match.params.id
    };
  }

  componentDidMount = () => {
    this.props.getAdDetails(this.state.adId);
  };

  render() {
    const { ad_details, isLoading } = this.props;

    return (
      <div>
        <div className="padding-rl-10 middle-section">
          {ad_details && (
            <div className="campaign-middle-section">
              <div className="normal_title padding-15">{ad_details.title}</div>
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
                      style={{ width: `${ad_details.total_budget_spent_per}` }}
                    />
                  </div>
                  <span className="counter">
                    {ad_details.total_budget_spent_per}
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
                      style={{ width: `${ad_details.daily_budget_spent_per}` }}
                    />
                  </div>
                  <span className="counter">
                    {ad_details.daily_budget_spent_per}
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
                      style={{ width: `${ad_details.performance_view_per}` }}
                    />
                  </div>
                  <span className="counter">
                    {ad_details.performance_view_per}
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
                      style={{ width: `${ad_details.runtime_passed_per}` }}
                    />
                  </div>
                  <span className="counter">
                    {ad_details.runtime_passed_per}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        {ad_details && <SettingAdsStatisticsRight adStatistics={ad_details} />}
        {isLoading && <InlineLoading />}
      </div>
    );
  }
}

AdsStatisticsPage.propTypes = {
  match: PropTypes.any,
  getAdDetails: PropTypes.func.isRequired,
  ad_details: PropTypes.any,
  isLoading: PropTypes.bool,
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  ad_details: state.adData.ad[0],
  isLoading: state.adData.isLoading,
  error: state.adData.error
});

const mapDispatchToProps = {
  getAdDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdsStatisticsPage);
