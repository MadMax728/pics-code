import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../../lib/constants/routes";
import { Translations } from "../../../../../lib/translations";
import moment from "moment";
import { modalType } from "../../../../../lib/constants";
import { Button } from "../../../../ui-kit";

class SettingAdsStatisticsRight extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      adStatistics: this.props.adStatistics
    };
  }

  handleEditAd = () => {
    const { adStatistics } = this.state;
    this.props.handleModalShow(modalType.editAds, adStatistics);
  };

  render() {
    const { adStatistics } = this.state;
    const { remainingBudget, totalBudget } = this.props;
    let isStatus = "green-circle pull-right";
    if (adStatistics.isActive) {
      isStatus = "green-circle pull-right";
    } else {
      isStatus = "red-circle pull-right";
    }

    // Calculation of Daily budget spent (24 hours counter – counter starts when ad was created) (Ref from SRS)
    // const createdDate = moment
    //   .unix(adStatistics.createdAt)
    //   .format(Translations.complete_date_format.date);
    // const todayDate = moment().format(Translations.complete_date_format.date);
    // const duration = moment.duration(
    //   moment(todayDate).diff(moment(createdDate))
    // );
    // const budgetSpentInHours = duration.hours();

    return (
      <div className="right_bar no-padding pull-left">
        <div className="campaigns-right">
          <Button
            className="blue_button"
            onClick={this.handleEditAd}
            text={Translations.create_ads.edit_ad}
          />
          <Link to={routes.SETTINGS_ADS_ROUTE}>
            <Button
              className="black_button"
              text={Translations.create_ads.close_ad}
            />
          </Link>
          <div className="normal_title padding-15">
            {Translations.create_ads.budget_runtime}
          </div>
          <ul className="campaign-right-options">
            <li>
              <span className="left-title">
                {" "}
                {Translations.create_ads.total_budget_spent}
              </span>
              <span className="pull-right right-content">{totalBudget}€</span>
            </li>
            <li>
              <span className="left-title">
                {Translations.create_ads.remaining_Budget}
              </span>
              <span className="pull-right right-content">
                {remainingBudget}€
              </span>
            </li>
            {/* <li>
              <span className="left-title">
                {Translations.create_ads.total_expense}
              </span>
              <span className="pull-right right-content">
                {adStatistics.maximumExpenses}€
              </span>
            </li> */}
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
            {Translations.create_ads.views_clicks}
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
  adStatistics: PropTypes.object.isRequired,
  handleModalShow: PropTypes.func.isRequired,
  remainingBudget: PropTypes.any,
  totalBudget: PropTypes.any
};

export default SettingAdsStatisticsRight;
