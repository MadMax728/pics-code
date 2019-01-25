import React, { Component } from "react";
import SettingCampaignStatisticsRight from "./SettingCampaignStatisticsRight";
import { getCampaignDetails } from "../../../../../actions";
import { connect } from "react-redux";
import { InlineLoading } from "../../../../ui-kit";
import PropTypes from "prop-types";
import { Translations } from "../../../../../lib/translations";
import moment from "moment";

class SettingCampaignStatisticsPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      campaignId: this.props.match.params.id,
      performaceProgress: 0,
      budgetProgress: 0,
      runtimeProgress: 0,
      budgetSpend: 0,
      remainingBudget: 0
    };
  }

  render() {
    const { campaignDetails, isLoading, handleModalShow } = this.props;
    const {
      budgetProgress,
      performaceProgress,
      runtimeProgress,
      budgetSpend,
      remainingBudget
    } = this.state;
    return (
      <div>
        <div className="padding-rl-10 middle-section">
          {campaignDetails && !isLoading && (
            <div className="campaign-middle-section">
              <div className="normal_title padding-15">
                {campaignDetails.title}
              </div>
              <div className="campaign-block">
                <div className="normal_title padding-15">
                  {Translations.create_campaigns.total_budget}
                </div>
                <div className="indicators">
                  <div>
                    <span className="blue-block" />
                    {Translations.create_campaigns.budget_spent}
                  </div>
                  <div>
                    <span className="grey-block" />
                    {Translations.create_campaigns.remaining_budget}
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
                  {Translations.create_campaigns.performance}
                </div>
                <div className="indicators">
                  <div>
                    <span className="blue-block" />
                    {Translations.create_campaigns.views}
                  </div>
                  <div>
                    <span className="grey-block" />
                    {Translations.create_campaigns.clicks}
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
                  {" "}
                  {Translations.create_campaigns.Runtime}
                </div>
                <div className="indicators">
                  <div>
                    <span className="blue-block" />
                    {Translations.create_campaigns.runtime_passed}
                  </div>
                  <div>
                    <span className="grey-block" />
                    {Translations.create_campaigns.remaining_runtime}
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
        {campaignDetails && !isLoading && (
          <SettingCampaignStatisticsRight
            campaignStatistics={campaignDetails}
            handleModalShow={handleModalShow}
            budgetSpend={budgetSpend}
            remainingBudget={remainingBudget}
          />
        )}
        {isLoading && <InlineLoading />}
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const data = {
      id: this.state.campaignId
    };
    this.props.getCampaignDetails(data).then(() => {
      if (this.props.campaignDetails) {
        this.setState({
          campaignDetails: this.props.campaignDetails
        });
        this.calculateProgress();
        this.calculateBudgetRuntime();
      }
    });
  };

  calculateProgress = () => {
    if (this.props.campaignDetails) {
      const clicks = this.props.campaignDetails.clicks;
      const views = this.props.campaignDetails.views;
      const totalPerformance = parseInt(views) + parseInt(clicks);
      const performancePercentage =
        (parseInt(views) / parseInt(totalPerformance)) * 100;
      this.setState({
        performaceProgress: Math.round(performancePercentage)
      });
    }
  };

  calculateBudgetRuntime = () => {
    if (this.props.campaignDetails) {
      const { campaignDetails } = this.props;

      // const dailyBudget = campaignDetails.budget;

      // Calculations of Total No. Of Days
      const startDate = moment
        .unix(campaignDetails.startDate)
        .format(Translations.complete_date_format.date);
      const endDate = moment
        .unix(campaignDetails.endDate)
        .format(Translations.complete_date_format.date);
      const totalDuration = moment.duration(
        moment(endDate).diff(moment(startDate))
      );
      const totalNoOfDays = totalDuration.asDays();

      const maximumExpense =
        parseInt(campaignDetails.budget) * parseInt(totalNoOfDays);
      let budgetSpend = 0;
      let remainingBudget = 0;

      // Calculations of remaining days
      const todayDate = moment().format(Translations.complete_date_format.date);
      let remainingDays = 0;
      let totalRemainingDuration = 0;
      if (todayDate <= startDate) {
        totalRemainingDuration = moment.duration(
          moment(endDate).diff(moment(todayDate))
        );
        budgetSpend = 0;

        // Budget
        remainingBudget = maximumExpense;
        remainingDays = totalRemainingDuration.days();
      } else if (todayDate <= endDate) {
        totalRemainingDuration = moment.duration(
          moment(endDate).diff(moment(todayDate))
        );
        remainingDays = totalRemainingDuration.days();

        // Budget
        const calculateDay = parseInt(totalNoOfDays) - parseInt(remainingDays);
        budgetSpend = parseInt(campaignDetails.budget) * parseInt(calculateDay);
        remainingBudget = parseInt(maximumExpense) - parseInt(budgetSpend);
      } else if (todayDate > endDate) {
        remainingDays = 0;

        // Budget
        budgetSpend = maximumExpense;
        remainingBudget = 0;
      }
      const totalRuntime = parseInt(totalNoOfDays) + parseInt(remainingDays);
      const runtimePercentage =
        (parseInt(totalNoOfDays) / parseInt(totalRuntime)) * 100;

      // Budget Percentage Calculation
      const totalBudget = parseInt(budgetSpend) + parseInt(remainingBudget);
      const budgetPercentage =
        (parseInt(budgetSpend) / parseInt(totalBudget)) * 100;

      this.setState({
        runtimeProgress: Math.round(runtimePercentage),
        budgetProgress: Math.round(budgetPercentage),
        budgetSpend: budgetSpend,
        remainingBudget: remainingBudget
      });
    }
  };
}

SettingCampaignStatisticsPage.propTypes = {
  match: PropTypes.any,
  getCampaignDetails: PropTypes.func.isRequired,
  campaignDetails: PropTypes.any,
  isLoading: PropTypes.bool,
  handleModalShow: PropTypes.func.isRequired
  // error: PropTypes.any
};

const mapStateToProps = state => ({
  campaignDetails: state.campaignData.campaign,
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
