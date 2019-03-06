import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import DatePicker from "react-datepicker";
import { Translations } from "../../../../../lib/translations";
import { RightSidebarModal, Label, ErrorSpan } from "../../../../ui-kit";
import { SelectDailyBudget } from "../../../../../components/common";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment().add(7, "days"),
      maxClicks: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { maxClicks } = this.props;
    if (prevState.maxClicks !== maxClicks) {
      this.setState({ maxClicks });
    }
  }

  handleStartDateChange = date => {
    this.setState({ startDate: date });
    this.props.handleDate(date, "startDate");
    // if (this.props.form.budget) {
    //   this.props.calculateMaxClicks();
    // }
  };

  handleEndDateChange = date => {
    this.setState({ endDate: date });
    this.props.handleDate(date, "endDate");
    // if (this.props.form.budget) {
    //   this.props.calculateMaxClicks();
    // }
  };

  render() {
    const { form, handleSelect, userInfo } = this.props;
    const { maxClicks } = this.state;

    return (
      <div className="col-xs-12 no-padding">
        <div className="col-sm-5 upload-form">
          <div className="subtitle">
            {Translations.create_ads.define_runtime_budget}
          </div>
          <div className="form-group">
            <ul className="options dates">
              <li>
                <Label htmlFor="Start" value={Translations.create_ads.start} />
                <div className="input-group date">
                  <DatePicker
                    selected={form.startDate}
                    onChange={this.handleStartDateChange}
                  />
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar" />
                  </span>
                </div>
              </li>
              <li>
                <label htmlFor="End">{Translations.create_ads.end}</label>
                <div className="input-group date">
                  <DatePicker
                    selected={form.endDate}
                    onChange={this.handleEndDateChange}
                  />
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar" />
                  </span>
                </div>
              </li>
            </ul>
            {form.error && form.endDate.diff(form.startDate, "days") < 0 ? (
              <ErrorSpan value={Translations.error.create_modal.date} />
            ) : form.error && form.endDate.diff(form.startDate, "week") <= 0 ? (
              <ErrorSpan
                value={Translations.error.create_modal.weekValidation}
              />
            ) : (
              form.error &&
              form.endDate.diff(form.startDate, "month") > 3 && (
                <ErrorSpan
                  value={Translations.error.create_modal.monthValidation}
                />
              )
            )}
          </div>
          <div className="form-group">
            <Label
              htmlFor="Define"
              value={Translations.create_ads.define_daily_budget}
            />
            <SelectDailyBudget
              value={form.budget || ""}
              className=""
              handleSelect={handleSelect}
              isFor={"ad"}
            />
            {form.budget && form.budget.length === 0 && form.error && (
              <ErrorSpan value={Translations.error.create_modal.budget} />
            )}
          </div>
          {/* <div className="form-group">
            <label htmlFor="Maximum">
              {Translations.create_ads.maximum_number_of_clicks}
            </label>
            <div className="meter orange nostripes">
              <span
                style={{ width: `${maxClicks}px` }}
                className="filled-strip"
              />
              <span className="number-clicks">
                {Translations.create_ads.max_1200_clicks}
              </span>
            </div>
          </div> */}
          <div className="form-group">
            <Label
              htmlFor="Maximum"
              value={Translations.create_ads.maximum_number_of_views}
            />
            <div className="meter orange nostripes">
              <p className="applicant-block">
                <span className="applicant-count">{maxClicks}</span>
                <span className="applicant-label">
                  {Translations.create_ads.views}
                </span>
              </p>
            </div>
          </div>
          <div className="subtitle">
            {Translations.create_ads.information_on_payment}
          </div>
          <p>{Translations.create_ads.actively_clicks}</p>
          <ul>
            <li>{Translations.create_ads.cost_control}</li>
            <li>{Translations.create_ads.cost_per_Click}</li>
            <li>{Translations.create_ads.payment_only_after_ad_was_cloes}</li>
            <li>{Translations.create_ads.total_budget_can_not_be_exceeded}</li>
          </ul>
        </div>
        <RightSidebarModal userInfo={userInfo} form={form} isFor="Ads" />
      </div>
    );
  }
}

StepTwo.propTypes = {
  handleDate: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired,
  handleSelect: PropTypes.func.isRequired,
  userInfo: PropTypes.any,
  maxClicks: PropTypes.any,
  calculateMaxClicks: PropTypes.func
};

export default StepTwo;
