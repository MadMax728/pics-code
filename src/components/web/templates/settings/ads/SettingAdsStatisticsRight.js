import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../../lib/constants/routes";
import { Translations } from "../../../../../lib/translations";
import moment from "moment";

class SettingAdsStatisticsRight extends Component {
  render() {
    const { adStatistics } = this.props;
    let isStatus = "green-circle pull-right";
    if (adStatistics.isActive) {
      isStatus = "green-circle pull-right";
    } else {
      isStatus = "red-circle pull-right";
    }

    // Calculation of Daily budget spent (24 hours counter – counter starts when ad was created) (Ref from SRS)
    const createdDate = moment
      .unix(adStatistics.createdAt)
      .format(Translations.complete_date_format.date);
    const todayDate = moment().format(Translations.complete_date_format.date);
    const duration = moment.duration(
      moment(todayDate).diff(moment(createdDate))
    );
    const budgetSpentInHours = duration.hours();

    return (
      <div className="right_bar no-padding pull-left">
        <div className="campaigns-right">
          <button className="blue_button">
            {Translations.create_ads.edit_ad}
          </button>
          <Link to={routes.SETTINGS_ADS_ROUTE}>
            <button className="black_button">
              {" "}
              {Translations.create_ads.close_ad}{" "}
            </button>
          </Link>
          <div className="normal_title padding-15">
            {Translations.create_ads.budget_runtime}
          </div>
          <ul className="campaign-right-options">
            <li>
              <span className="left-title">
                {" "}
                {Translations.create_ads.daily_budget}
              </span>
              <span className="pull-right right-content">
                {adStatistics.budget}€
              </span>
            </li>
            <li>
              <span className="left-title">
                {Translations.create_ads.daily_budget_spent}
              </span>
              <span className="pull-right right-content">
                {budgetSpentInHours}
              </span>
            </li>
            <li>
              <span className="left-title">
                {Translations.create_ads.total_expense}
              </span>
              <span className="pull-right right-content">
                {adStatistics.maximumExpenses}€
              </span>
            </li>
            <li>
              <span className="left-title">
                {Translations.create_ads.runtime}
              </span>
              <span className="pull-right right-content">
                {moment
                  .unix(adStatistics.startDate)
                  .format(Translations.statistics_date_format.date)}{" "}
                -
                {moment
                  .unix(adStatistics.endDate)
                  .format(Translations.statistics_date_format.date)}
              </span>
            </li>
          </ul>
          <div className="normal_title padding-15">
            {Translations.create_ads.Performance}
          </div>
          <ul className="campaign-right-options">
            <li>
              <span className="left-title">
                {" "}
                {Translations.create_ads.views}
              </span>
              <span className="pull-right right-content">
                {adStatistics.views}
              </span>
            </li>
            <li>
              <span className="left-title">
                {" "}
                {Translations.create_ads.clicks}
              </span>
              <span className="pull-right right-content">
                {adStatistics.clicks}
              </span>
            </li>
          </ul>
          <div className="normal_title padding-15">
            {" "}
            {Translations.create_ads.DetailsonAd}
          </div>
          <ul className="campaign-right-options">
            <li>
              <span className="left-title">
                {Translations.create_ads.location}
              </span>
              <span className="pull-right right-content">
                {adStatistics.location.address}
              </span>
            </li>
            <li>
              <span className="left-title">
                {Translations.create_ads.radius}
              </span>
              <span className="pull-right right-content">
                {adStatistics.radius.radiusName}
              </span>
            </li>
            <li>
              <span className="left-title">
                {Translations.create_ads.category}
              </span>
              <span className="pull-right right-content">
                {adStatistics.category[0].categoryName}
              </span>
            </li>
            <li>
              <span className="left-title">
                {Translations.create_ads.target_group}
              </span>
              <span className="pull-right right-content">
                {Translations.target_group[adStatistics.targetGroup]}
              </span>
            </li>
          </ul>
          <div className="normal_title padding-15">
            {Translations.create_ads.status}
            <span className={isStatus} />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  handleOnChange = () => {};
}

SettingAdsStatisticsRight.propTypes = {
  adStatistics: PropTypes.shape({
    title: PropTypes.string,
    total_budget_spent_per: PropTypes.string,
    daily_budget_spent_per: PropTypes.string,
    performance_view_per: PropTypes.string,
    runtime_passed_per: PropTypes.string,

    daily_budget: PropTypes.string,
    total_budget_spent: PropTypes.string,
    total_expenses: PropTypes.string,
    runtime: PropTypes.string,

    views: PropTypes.any,
    clicks: PropTypes.any,

    location: PropTypes.any,
    radius: PropTypes.any,
    category: PropTypes.any,
    target_group: PropTypes.string,

    id: PropTypes.string
  })
};

export default SettingAdsStatisticsRight;
