import React, { Component } from "react";
import propTypes from "prop-types";

class SettingAdsStatisticsRight extends Component {
  handleOnChange = () => {};

  render() {
    const { adStatistics } = this.props;
    return (
      <div className="right_bar no-padding pull-left">
        <div className="campaigns-right">
          <button className="blue_button">Edit ad</button>
          <button className="black_button">Close ad </button>
          <div className="normal_title padding-15">Budget & Runtime</div>
          <ul className="campaign-right-options">
            <li>
              <span>Daily budget</span>
              <span className="pull-right">{adStatistics.daily_budget}</span>
            </li>
            <li>
              <span>Total budget spent</span>
              <span className="pull-right">
                {adStatistics.total_budget_spent}
              </span>
            </li>
            <li>
              <span>Total expenses</span>
              <span className="pull-right">{adStatistics.total_expenses}</span>
            </li>
            <li>
              <span>Runtime</span>
              <span className="pull-right">{adStatistics.runtime}</span>
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
              <span className="pull-right">{adStatistics.location}</span>
            </li>
            <li>
              <span>Radius</span>
              <span className="pull-right">{adStatistics.radius}</span>
            </li>
            <li>
              <span>Category</span>
              <span className="pull-right">{adStatistics.category}</span>
            </li>
            <li>
              <span>Target group</span>
              <span className="pull-right">{adStatistics.target_group}</span>
            </li>
          </ul>
          <div className="normal_title padding-15">
            Status
            <span className="green-circle pull-right" />
          </div>
        </div>
      </div>
    );
  }
}

SettingAdsStatisticsRight.propTypes = {
  adStatistics: propTypes.shape({
    title: propTypes.string,
    total_budget_spent_per: propTypes.string,
    daily_budget_spent_per: propTypes.string,
    performance_view_per: propTypes.string,
    runtime_passed_per: propTypes.string,

    daily_budget: propTypes.string,
    total_budget_spent: propTypes.string,
    total_expenses: propTypes.string,
    runtime: propTypes.string,

    views: propTypes.string,
    clicks: propTypes.string,

    location: propTypes.string,
    radius: propTypes.string,
    category: propTypes.string,
    target_group: propTypes.string,

    id: propTypes.number
  })
};

export default SettingAdsStatisticsRight;
