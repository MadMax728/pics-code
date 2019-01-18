import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../../lib/constants/routes";
class SettingAdsStatisticsRight extends Component {
 
  render() {
    const { adStatistics } = this.props;
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
