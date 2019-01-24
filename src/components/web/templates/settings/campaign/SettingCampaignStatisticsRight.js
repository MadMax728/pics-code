import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../../lib/constants/routes";
import { modalType } from "../../../../../lib/constants/enumerations";
import { Translations } from "../../../../../lib/translations";
import moment from "moment";

class SettingCampaignStatisticsRight extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      campaignStatistics: this.props.campaignStatistics
    };
  }

  handleEditCampaign = () => {
    const { campaignStatistics } = this.state;
    this.props.handleModalShow(modalType.editCampaign, campaignStatistics);
  }

  render() {
    const { campaignStatistics } = this.state;
    console.log(campaignStatistics);
    const { budgetSpend, remainingBudget } = this.props;
    let isStatus = "green-circle pull-right";
    if (campaignStatistics.isActive) {
      isStatus = "green-circle pull-right";
    } else {
      isStatus = "red-circle pull-right";
    }
    
    return (
      <div className="right_bar no-padding pull-left">
        <div className="campaigns-right">
          <button className="blue_button" onClick={this.handleEditCampaign} >Edit campaign</button>
          <Link to={routes.SETTINGS_CAMPAIGN_ROUTE}>
            <button className="black_button">
              {" "}
              {Translations.create_campaigns.close_campaign}{" "}
            </button>
          </Link>
          <div className="normal_title padding-15">
            {" "}
            {Translations.create_campaigns.budget_runtime}
          </div>
          <ul className="campaign-right-options">
            <li>
              <span> {Translations.create_campaigns.total_budget_spent}</span>
              <span className="pull-right">{budgetSpend}€</span>
            </li>
            <li>
              <span> {Translations.create_campaigns.remaining_budget}</span>
              <span className="pull-right">{remainingBudget}€</span>
            </li>
            <li>
              <span> {Translations.create_campaigns.Runtime}</span>
              <span className="pull-right">
                {" "}
                {moment
                  .unix(campaignStatistics.startDate)
                  .format(Translations.statistics_date_format.date)}{" "}
                -{" "}
                {moment
                  .unix(campaignStatistics.endDate)
                  .format(Translations.statistics_date_format.date)}
              </span>
            </li>
          </ul>
          <div className="normal_title padding-15">
            {" "}
            {Translations.create_campaigns.performance}
          </div>
          <ul className="campaign-right-options">
            <li>
              <span>{Translations.create_campaigns.views}</span>
              <span className="pull-right">{campaignStatistics.views}</span>
            </li>
            <li>
              <span>{Translations.create_campaigns.clicks}</span>
              <span className="pull-right">{campaignStatistics.clicks}</span>
            </li>
            <li>
              <span>{Translations.create_campaigns.applications}</span>
              <span className="pull-right">
                {campaignStatistics.applicationCount}
              </span>
            </li>
          </ul>
          <div className="normal_title padding-15">
            {Translations.create_campaigns.status}
            <span className={isStatus} />
          </div>
        </div>
      </div>
    );
  }
}

SettingCampaignStatisticsRight.propTypes = {
  handleModalShow: PropTypes.func.isRequired,
  campaignStatistics: PropTypes.shape({
    title: PropTypes.string,
    applications: PropTypes.string,
    views: PropTypes.any,
    clicks: PropTypes.any,
    budget_spent_per: PropTypes.string,
    view_per: PropTypes.string,
    runtime_passed_per: PropTypes.string,
    total_budget_spent: PropTypes.string,
    remaining_budget: PropTypes.string,
    runtime: PropTypes.string,
    id: PropTypes.any,
  }),
  remainingBudget: PropTypes.any,
  budgetSpend: PropTypes.any
};

export default SettingCampaignStatisticsRight;
