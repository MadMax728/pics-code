import React, { Component } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../../lib/constants/routes";

class SettingCampaignStatisticsRight extends Component {
  render() {
    const { campaignStatistics } = this.props;

    return (
      <div className="right_bar no-padding pull-left">
        <div className="campaigns-right">
          <button className="blue_button">Edit campaign</button>
          <Link to={routes.SETTINGS_CAMPAIGN_ROUTE}>
            <button className="black_button">Close campaign </button>
          </Link>
          <div className="normal_title padding-15">Budget & Runtime</div>
          <ul className="campaign-right-options">
            <li>
              <span>Total budget spent</span>
              <span className="pull-right">
                {campaignStatistics.total_budget_spent}
              </span>
            </li>
            <li>
              <span>Remaining budget</span>
              <span className="pull-right">
                {campaignStatistics.remaining_budget}
              </span>
            </li>
            <li>
              <span>Runtime</span>
              <span className="pull-right">{campaignStatistics.runtime}</span>
            </li>
          </ul>
          <div className="normal_title padding-15">Performance</div>
          <ul className="campaign-right-options">
            <li>
              <span>Views</span>
              <span className="pull-right">{campaignStatistics.views}</span>
            </li>
            <li>
              <span>Clicks</span>
              <span className="pull-right">{campaignStatistics.clicks}</span>
            </li>
            <li>
              <span>Applications</span>
              <span className="pull-right">
                {campaignStatistics.applications}
              </span>
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

SettingCampaignStatisticsRight.propTypes = {
  campaignStatistics: propTypes.shape({
    title: propTypes.string,
    applications: propTypes.string,
    views: propTypes.string,
    clicks: propTypes.string,
    budget_spent_per: propTypes.string,
    view_per: propTypes.string,
    runtime_passed_per: propTypes.string,
    total_budget_spent: propTypes.string,
    remaining_budget: propTypes.string,
    runtime: propTypes.string,
    id: propTypes.number
  })
};

export default SettingCampaignStatisticsRight;
