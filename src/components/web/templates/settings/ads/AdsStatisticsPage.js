import React, { Component } from "react";
import SettingAdsStatisticsRight from "./SettingAdsStatisticsRight";
import { Translations } from "../../../../../lib/translations";
import { getAdDetails } from "../../../../../actions";
import { connect } from "react-redux";
import { InlineLoading } from "../../../../ui-kit";
import PropTypes from "prop-types";
import moment from "moment";
class AdsStatisticsPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      adId: this.props.match.params.id,
      performaceProgress: 0,
      budgetProgress: 0,
      runtimeProgress: 0,
      dailyBudgetProgress: 0,
      budgetSpend: 0,
      remainingBudget: 0
    };
  }

  render() {
    const { adDetails, isLoading, handleModalShow } = this.props;
    const {
      budgetProgress,
      performaceProgress,
      runtimeProgress,
      dailyBudgetProgress,
      // budgetSpend,
      // remainingBudget
    } = this.state;
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
                    <div style={{ width: `${budgetProgress}%` }}>
                      <p className="completed-count">{budgetProgress}%</p>
                    </div>
                  </div>
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
                  <div />
                </div>
                <div className="progressbar-wrapper">
                  <div className="progressbar">
                    <div style={{ width: `${dailyBudgetProgress}%` }}>
                      <p className="completed-count">{dailyBudgetProgress}%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="campaign-block">
                <div className="normal_title padding-15">
                  {Translations.create_ads.Performance}
                </div>
                <div className="indicators">
                  <div>
                    <span className="blue-block" />
                    {Translations.create_ads.views}
                  </div>
                  <div>
                    <span className="grey-block" />
                    {Translations.create_ads.clicks}
                  </div>
                </div>
                <div className="progressbar-wrapper">
                  <div className="progressbar">
                    <div style={{ width: `${performaceProgress}%` }}>
                      <p className="completed-count">{performaceProgress}%</p>
                    </div>
                  </div>
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
                    <div style={{ width: `${runtimeProgress}%` }}>
                      <p className="completed-count">{runtimeProgress}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {adDetails && (
          <SettingAdsStatisticsRight
            adStatistics={adDetails}
            handleModalShow={handleModalShow}
          />
        )}
        {isLoading && <InlineLoading />}
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const data = { id: this.state.adId };
    this.props.getAdDetails(data).then(() => {
      if (this.props.adDetails) {
        this.setState({ adDetails: this.props.ad });
        this.calculateProgress();
        this.calculateBudgetRuntime();
      }
    });
  };

  calculateProgress = () => {
    if (this.props.adDetails) {
      const clicks = this.props.adDetails.clicks;
      const views = this.props.adDetails.views;
      const totalPerformance = parseInt(views) + parseInt(clicks);
      const performancePercentage =
        (parseInt(views) / parseInt(totalPerformance)) * 100;
      this.setState({
        performaceProgress: Math.round(performancePercentage)
      });
    }
  };

  calculateBudgetRuntime = () => {
    if (this.props.adDetails) {
      const { adDetails } = this.props;
      const dailyBudget = adDetails.budget;
      let budgetSpend = 0;
      let remainingBudget = 0;
      let dailyBudgetSpend = 0;
      let dailyRemainingBudget = 0;

      // Calculations of Total No. Of Days
      const startDate = moment
        .unix(adDetails.startDate)
        .format(Translations.complete_date_format.date);
      const endDate = moment
        .unix(adDetails.endDate)
        .format(Translations.complete_date_format.date);
      const totalDuration = moment.duration(
        moment(endDate).diff(moment(startDate))
      );
      const totalNoOfDays = totalDuration.asDays();

      // Total Budget
      const maximumExpense =
        parseInt(adDetails.budget) * parseInt(totalNoOfDays);

      // Calculations of remaining days
      const todayDate = moment().format(Translations.complete_date_format.date);
      let remainingDays = 0;
      let totalRemainingDuration = 0;
      if (todayDate <= startDate) {
        totalRemainingDuration = moment.duration(
          moment(endDate).diff(moment(todayDate))
        );
        remainingDays = totalRemainingDuration.days();

        // Total Budget
        budgetSpend = 0;
        remainingBudget = maximumExpense;

        //Daily Budget
        dailyBudgetSpend = 0;
        dailyRemainingBudget = dailyBudget;
      } else if (todayDate <= endDate) {
        totalRemainingDuration = moment.duration(
          moment(endDate).diff(moment(todayDate))
        );
        remainingDays = totalRemainingDuration.days();

        // Total Budget
        const calculateDay = parseInt(totalNoOfDays) - parseInt(remainingDays);
        budgetSpend = parseInt(adDetails.budget) * parseInt(calculateDay);
        remainingBudget = parseInt(maximumExpense) - parseInt(budgetSpend);

        //Daily Budget
        dailyBudgetSpend = parseInt(adDetails.budget) * parseInt(calculateDay);
        dailyRemainingBudget = parseInt(maximumExpense) - parseInt(budgetSpend);
      } else if (todayDate > endDate) {
        remainingDays = 0;

        // Total Budget
        budgetSpend = maximumExpense;
        remainingBudget = 0;

        // Daily Budget
        dailyBudgetSpend = dailyBudget;
        dailyRemainingBudget = 0;
      }

      // Total Budget Percentage Calculation

      // Daily Budget Percentage Calculation
      const totalDailyBudget =
        parseInt(dailyBudgetSpend) + parseInt(dailyRemainingBudget);
      let DailyBudgetPercentage = 0;
      if (budgetSpend === 0 && totalBudget === 0) {
        DailyBudgetPercentage = 0;
      } else {
        DailyBudgetPercentage =
          (parseInt(dailyBudgetSpend) / parseInt(totalDailyBudget)) * 100;
      }

      // Runtime
      const totalRuntime = parseInt(totalNoOfDays) + parseInt(remainingDays);
      let runtimePercentage = 0;
      if (totalNoOfDays === 0 && remainingDays === 0) {
        runtimePercentage = 0;
      } else {
        runtimePercentage =
          (parseInt(totalNoOfDays) / parseInt(totalRuntime)) * 100;
      }
      // Budget Percentage Calculation
      const totalBudget = parseInt(budgetSpend) + parseInt(remainingBudget);
      let budgetPercentage = 0;
      if (budgetSpend === 0 && totalBudget === 0) {
        budgetPercentage = 0;
      } else {
        budgetPercentage =
          (parseInt(budgetSpend) / parseInt(totalBudget)) * 100;
      }

      this.setState({
        runtimeProgress: Math.round(runtimePercentage),
        budgetProgress: Math.round(budgetPercentage),
        dailyBudgetProgress: Math.round(DailyBudgetPercentage),
        budgetSpend,
        remainingBudget
      });
    }
  };
}

AdsStatisticsPage.propTypes = {
  match: PropTypes.any,
  getAdDetails: PropTypes.func.isRequired,
  adDetails: PropTypes.any,
  isLoading: PropTypes.bool,
  ad: PropTypes.any,
  handleModalShow: PropTypes.func.isRequired
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
