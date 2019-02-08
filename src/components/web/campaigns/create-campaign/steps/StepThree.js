import React, { Component } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Translations } from "../../../../../lib/translations";
import { SelectDailyBudget } from "../../../../../components/common";
import { RightSidebarModal } from "../../../../ui-kit";

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
      maxClicks: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { maxClicks } = this.props;
    if (prevState.maxClicks !== maxClicks) {
      this.setState({ maxClicks });
    }
  }

  render() {
    const { form, handleSelect, userInfo } = this.props;
    const { maxClicks } = this.state;
    return (
      <div className="col-xs-12 no-padding">
        <div className="col-sm-5 upload-form">
          <div className="subtitle">
            {Translations.create_campaigns.define_runtime_budget}
          </div>
          <div className="form-group">
            <ul className="options dates">
              <li>
                <label htmlFor="Start">
                  {Translations.create_campaigns.start}
                </label>
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
                <label htmlFor="End">{Translations.create_campaigns.end}</label>
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
              <span className="error-msg highlight">
                {Translations.error.create_modal.date}
              </span>
            ) : form.error && form.endDate.diff(form.startDate, "week") <= 0 ? (
              <span className="error-msg highlight">
                {Translations.error.create_modal.weekValidation}
              </span>
            ) : (
              form.error &&
              form.endDate.diff(form.startDate, "month") > 3 && (
                <span className="error-msg highlight">
                  {Translations.error.create_modal.monthValidation}
                </span>
              )
            )}
          </div>

          <div className="form-group">
            <label htmlFor="Define">
              {Translations.create_campaigns.define_daily_budget}
            </label>
            <SelectDailyBudget
              value={form.budget}
              className=""
              handleSelect={handleSelect}
              isFor={"campaign"}
            />
            {form.budget && form.budget.length === 0 && form.error && (
              <span className="error-msg highlight">
                {Translations.error.create_modal.budget}
              </span>
            )}
          </div>
          {/* <div className="form-group">
            <label htmlFor="Maximum">
              {Translations.create_campaigns.maximum_number_of_clicks}
            </label>
            <div className="meter orange nostripes">
              <span
                style={{ width: `${maxClicks}px` }}
                className="filled-strip"
              />
              <span className="number-clicks">
                {Translations.create_campaigns.max_1200_clicks}
              </span>
            </div>
          </div> */}
          <div className="form-group">
            <label htmlFor="Maximum">
              {Translations.create_campaigns.maximum_number_of_applicants}
            </label>
            <div className="meter orange nostripes">
              <p className="applicant-block">
                <span className="applicant-count">{maxClicks}</span>
                <span className="applicant-label">
                  {" "}
                  {Translations.applicant}
                </span>
              </p>
            </div>
          </div>
          <div className="subtitle">
            {Translations.create_campaigns.information_on_payment}
          </div>
          <p>{Translations.create_campaigns.actively_clicks}</p>
          <ul>
            <li>{Translations.create_campaigns.start_fee}</li>
            <li>{Translations.create_campaigns.cost_per_Click} </li>
            <li>{Translations.create_campaigns.cost_control}</li>
            <li>
              {Translations.create_campaigns.payment_only_after_ad_was_cloes}
            </li>
            <li>
              {Translations.create_campaigns.total_budget_can_not_be_exceeded}
            </li>
          </ul>
        </div>
        <RightSidebarModal userInfo={userInfo} form={form} />
      </div>
    );
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
}

StepThree.propTypes = {
  form: PropTypes.any.isRequired,
  handleDate: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  userInfo: PropTypes.any,
  maxClicks: PropTypes.any,
  calculateMaxClicks: PropTypes.func
};

export default StepThree;
