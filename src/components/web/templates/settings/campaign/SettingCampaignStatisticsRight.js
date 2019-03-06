import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../../lib/constants/routes";
import { modalType } from "../../../../../lib/constants/enumerations";
import { Translations } from "../../../../../lib/translations";
import moment from "moment";
import { Button } from "../../../../ui-kit";

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
  };

  render() {
    const { campaignStatistics } = this.state;
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
          <Button
            className="blue_button"
            onClick={this.handleEditCampaign}
            text={Translations.create_campaigns.edit_campaign}
          />
          <Link to={routes.SETTINGS_CAMPAIGN_ROUTE}>
            <Button
              className="black_button"
              text={Translations.create_campaigns.close_campaign}
            />
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
            {/* <li>
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
            </li> */}
            <li>
              <span>
                {Translations.create_campaigns.application_authorised}
              </span>
              <span className="pull-right">{"50"}</span>
            </li>
            <li>
              <span>{Translations.create_campaigns.application_removed}</span>
              <span className="pull-right">{"10"}</span>
            </li>
            <li>
              <span>
                {Translations.create_campaigns.application_removed_by_applicant}
              </span>
              <span className="pull-right">{"10"}</span>
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
  campaignStatistics: PropTypes.object.isRequired,
  remainingBudget: PropTypes.any,
  budgetSpend: PropTypes.any
};

export default SettingCampaignStatisticsRight;
