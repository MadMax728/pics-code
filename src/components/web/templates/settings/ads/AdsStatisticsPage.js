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

  render() {
    const { adDetails, isLoading } = this.props;
    return (
      <div>
        <div className="padding-rl-10 middle-section">
          {adDetails && (
            <div className="campaign-middle-section">
              <div className="normal_title padding-15">{adDetails.title}</div>
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
                      style={{ width: `${adDetails.total_budget_spent_per}` }}
                    />
                  </div>
                  <span className="counter">
                    {adDetails.total_budget_spent_per}
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
                      style={{ width: `${adDetails.daily_budget_spent_per}` }}
                    />
                  </div>
                  <span className="counter">
                    {adDetails.daily_budget_spent_per}
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
                      style={{ width: `${adDetails.performance_view_per}` }}
                    />
                  </div>
                  <span className="counter">
                    {adDetails.performance_view_per}
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
                    <div style={{ width: `${adDetails.runtime_passed_per}` }} />
                  </div>
                  <span className="counter">
                    {adDetails.runtime_passed_per}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        {adDetails && <SettingAdsStatisticsRight adStatistics={adDetails} />}
        {isLoading && <InlineLoading />}
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const data = { id: this.state.adId };
    this.props.getAdDetails(data).then(() => {
      if (this.props.ad) {
        this.setState({ adDetails: this.props.ad });
      }
    });
  };
}

AdsStatisticsPage.propTypes = {
  match: PropTypes.any,
  getAdDetails: PropTypes.func.isRequired,
  adDetails: PropTypes.any,
  isLoading: PropTypes.bool,
  ad: PropTypes.any
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  adDetails: state.adData.ad,
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
