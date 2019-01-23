import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../../lib/constants/routes";
import { Translations } from "../../../../../lib/translations";
import moment from "moment";
import { DateFormat } from "../../../../Factory";
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
    const todayDate = moment().unix();
    const budgetSpent = moment
      .unix(adStatistics.createdAt)
      .diff(todayDate, "hour");
    console.log(budgetSpent);
    return (
      <div className="right_bar no-padding pull-left">
        <div className="campaigns-right">
          <button className="blue_button">Edit ad</button>
          <Link to={routes.SETTINGS_ADS_ROUTE}>
            <button className="black_button">Close ad </button>
          </Link>
          <div className="normal_title padding-15">Budget & Runtime</div>
          <ul className="campaign-right-options">
            <li>
              <span>Daily budget</span>
              <span className="pull-right">{adStatistics.budget}</span>
            </li>
            <li>
              <span>Total budget spent</span>
              <span className="pull-right">{budgetSpent}</span>
            </li>
            <li>
              <span>Total expenses</span>
              <span className="pull-right">{adStatistics.maximumExpenses}</span>
            </li>
            <li>
              <span>Runtime</span>
              <span className="pull-right">
                {moment
                  .unix(adStatistics.startDate)
                  .format(Translations.date_format.date)}{" "}
                -
                {moment
                  .unix(adStatistics.endDate)
                  .format(Translations.date_format.date)}
              </span>
            </li>
          </ul>
          <div className="normal_title padding-15">Performance</div>
          <ul className="campaign-right-options">
            <li>
              <span>Views</span>
              <span className="pull-right">{adStatistics.views}</span>
            </li>
            <li>
              <span>Clicks</span>
              <span className="pull-right">{adStatistics.clicks}</span>
            </li>
          </ul>
          <div className="normal_title padding-15">Details on ad</div>
          <ul className="campaign-right-options">
            <li>
              <span>Location</span>
              <span className="pull-right">
                {adStatistics.location.address}
              </span>
            </li>
            <li>
              <span>Radius</span>
              <span className="pull-right">
                {adStatistics.radius.radiusName}
              </span>
            </li>
            <li>
              <span>Category</span>
              <span className="pull-right">
                {adStatistics.category[0].categoryName}
              </span>
            </li>
            <li>
              <span>Target group</span>
              <span className="pull-right">
                {Translations.target_group[adStatistics.targetGroup]}
              </span>
            </li>
          </ul>
          <div className="normal_title padding-15">
            Status
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

    views: PropTypes.string,
    clicks: PropTypes.string,

    location: PropTypes.string,
    radius: PropTypes.string,
    category: PropTypes.string,
    target_group: PropTypes.string,

    id: PropTypes.number
  })
};

export default SettingAdsStatisticsRight;
