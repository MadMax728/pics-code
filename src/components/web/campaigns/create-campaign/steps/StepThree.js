import React, { Component } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { Translations } from "../../../../../lib/translations";
import { SelectDailyBudget } from "../../../../../components/common";
import { RightSidebarModal, Label, ErrorSpan } from "../../../../ui-kit";

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
                <Label
                  htmlFor="Start"
                  value={Translations.create_campaigns.start}
                />
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
                <Label
                  htmlFor="End"
                  value={Translations.create_campaigns.end}
                />
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
              value={Translations.create_campaigns.define_daily_budget}
            />
            <SelectDailyBudget
              value={form.budget}
              className=""
              handleSelect={handleSelect}
              isFor={"campaign"}
            />
            {form.budget && form.budget.length === 0 && form.error && (
              <ErrorSpan value={Translations.error.create_modal.budget} />
            )}
          </div>
          <div className="form-group">
            <Label
              htmlFor="Maximum"
              value={Translations.create_campaigns.maximum_number_of_applicants}
            />
            <div className="meter orange nostripes">
              <p className="applicant-block">
                <span className="applicant-count">{maxClicks}</span>
                <span className="applicant-label">
                  {Translations.create_campaigns.applicant}
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
        <RightSidebarModal
          userInfo={userInfo}
          form={form}
          isFor={"Campaigns"}
        />
      </div>
    );
  }

  handleStartDateChange = date => {
    this.props.handleDate(date, "startDate");
  };

  handleEndDateChange = date => {
    this.props.handleDate(date, "endDate");
  };
}

StepThree.propTypes = {
  form: PropTypes.any.isRequired,
  handleDate: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  userInfo: PropTypes.any,
  maxClicks: PropTypes.any,
};

export default StepThree;
