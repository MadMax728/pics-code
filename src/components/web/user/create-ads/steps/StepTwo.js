import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import moment from "moment";
import DatePicker from "react-datepicker";
import { Translations } from "../../../../../lib/translations";
import { SelectDailyBudget } from "../../../../../components/common";
class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
  }

  handleStartDateChange = date => {
    this.setState({ startDate: date });
    this.props.handleDate(date, "startDate");
  };

  handleEndDateChange = date => {
    this.setState({ endDate: date });
    this.props.handleDate(date, "endDate");
  };

  render() {
    const { form, handleSelect, userInfo } = this.props;
    const todayDate = new Date();
    return (
      <div className="col-xs-12 no-padding">
        <div className="col-sm-5 upload-form">
          <div className="subtitle">
            {Translations.create_ads.define_runtime_budget}
          </div>
          <div className="form-group">
            <ul className="options dates">
              <li>
                <label htmlFor="Start">{Translations.create_ads.start}</label>
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
            {form.error && form.endDate.diff(form.startDate, "days") < 0 && (
              <span className="error-msg highlight">
                {Translations.error.create_modal.date}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="Define">
              {Translations.create_ads.define_daily_budget}
            </label>
            <SelectDailyBudget
              value={form.budget ? form.budget : ""}
              className=""
              handleSelect={handleSelect}
            />
            {form.budget.length === 0 && form.error && (
              <span className="error-msg highlight">
                {Translations.error.create_modal.budget}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="Maximum">
              {Translations.create_ads.maximum_number_of_clicks}
            </label>
            <div className="meter orange nostripes">
              <span style={{ width: "157px" }} className="filled-strip" />
              <span className="number-clicks">
                {Translations.create_ads.max_1200_clicks}
              </span>
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
        <div className="col-sm-7 disp-flex create-campaign-feed-wrapper">
          <div className="feed_wrapper">
            <div className="feed_header">
              <div className="no-padding profile_image">
                <img
                  src={images.image}
                  alt="image1"
                  className="img-circle img-responsive"
                />
              </div>
              <div className="no-padding titles_wrapper">
                <div className="normal_title">{form.title}</div>
                <div className="secondary_title">{userInfo.username} </div>
                <div className="grey_title">
                  {moment(todayDate).format("DD.MM.YYYY")} in Category
                </div>
              </div>
              <div className="like_wrapper">
                <img
                  src={images.blue_heart}
                  alt={"blue_heart"}
                  className="pull-right"
                />
              </div>
            </div>
            <div className="feed_content">
              <div className="feed_image">
                <div className="embed-responsive embed-responsive-16by9">
                  <div className="img-responsive embed-responsive-item">
                    {/* <img src={images.image} alt="image2" /> */}
                    {form.fileType && form.image && (
                      <img src={form.image} alt={"information"} />
                    )}
                    {!form.fileType && form.video && (
                      <video controls>
                        <track kind="captions" />
                        <source src={form.video} type={form.file.type} />
                      </video>
                    )}
                  </div>
                </div>
              </div>
              <div className="feed_description padding-15">
                <span className="secondary_title">{form.description}</span>
              </div>
            </div>
            <div className="feed_footer padding-15">
              <div className="messages">
                <span className="count">0</span>
                <img src={images.feed_msg} alt="feed_msg" />
              </div>
              <div className="likes">
                <span className="count">0</span>
                <img src={images.feed_like} alt="feed_like" />
              </div>
              <div className="show_more_options">
                <div>• • •</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StepTwo.propTypes = {
  handleDate: PropTypes.func.isRequired,
  form: PropTypes.any.isRequired,
  handleSelect: PropTypes.func.isRequired,
  userInfo: PropTypes.any
};

export default StepTwo;
