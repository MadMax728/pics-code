import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Translations } from "../../../../../lib/translations";
import { SelectDailyBudget } from "../../../../../components/common";
import {
  ImageItem,
  VideoItem,
  UserImageItem,
  UserTitleItem
} from "../../../../ui-kit";
import * as enumerations from "../../../../../lib/constants/enumerations";
import { DateFormat } from "../../../../Factory";
import { DescriptionItem } from "../../../../misc/items";

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
      this.setState({ maxClicks: maxClicks });
    }
  }

  render() {
    const { form, handleSelect, userInfo } = this.props;
    const { maxClicks } = this.state;
    const todayDate = new Date();
    return (
      <div className="col-xs-12 no-padding">
        <div className="col-sm-5 upload-form">
          <div className="subtitle">
            {Translations.create_campaigns.define_runtime_budget}c
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
            {form.error && form.endDate.diff(form.startDate, "days") < 0 && (
              <span className="error-msg highlight">
                {Translations.error.create_modal.date}
              </span>
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
            />
            {form.budget.length === 0 && form.error && (
              <span className="error-msg highlight">
                {Translations.error.create_modal.budget}
              </span>
            )}
          </div>
          <div className="form-group">
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
          </div>
          <div className="subtitle">
            {Translations.create_campaigns.information_on_payment}
          </div>
          <p>{Translations.create_campaigns.actively_clicks}</p>
          <ul>
            <li>{Translations.create_campaigns.cost_control}</li>
            <li>{Translations.create_campaigns.cost_per_Click}: 1,00 €</li>
            <li>
              {Translations.create_campaigns.payment_only_after_ad_was_cloes}
            </li>
            <li>
              {Translations.create_campaigns.total_budget_can_not_be_exceeded}
            </li>
          </ul>
        </div>
        <div className="col-sm-7 disp-flex create-campaign-feed-wrapper">
          <div className="feed_wrapper">
            <div className="feed_header">
              <UserImageItem
                item={userInfo ? userInfo.profileUrl : images.image}
                customClass={`padding-rl-10`}
              />
              <UserTitleItem
                date={DateFormat(
                  todayDate,
                  Translations.date_format.date,
                  true
                )}
                title={form.title}
                username={userInfo ? userInfo.username : ""}
              />
              <div className="like_wrapper">
                <img
                  src={images.blue_heart}
                  alt="like1"
                  className="pull-right"
                />
              </div>
            </div>
            <div className="feed_content">
              <div className="feed_image">
                <div className="embed-responsive embed-responsive-16by9">
                  <div className="img-responsive embed-responsive-item">
                    {/* <img src={images.image} alt="altmage1" /> */}
                    {form.typeContent &&
                      form.typeContent.toLowerCase() ===
                        enumerations.mediaTypes.video && (
                        <VideoItem item={form.video} />
                      )}
                    {(!form.typeContent ||
                      (form.typeContent &&
                        form.typeContent.toLowerCase() ===
                          enumerations.mediaTypes.image)) && (
                      <ImageItem item={form.image} userName={userInfo ? userInfo.username : ""} />
                    )}
                  </div>
                </div>
              </div>
              <div className="feed_description padding-15">
                <span className="secondary_title">
                  <DescriptionItem desc={form.description} />
                </span>
              </div>
            </div>
            <div className="feed_footer padding-15">
              <div className="messages">
                <span className="count">0</span>
                <img src={images.feed_msg} alt="profile1" />
              </div>
              <div className="likes">
                <span className="count">0</span>
                <img src={images.feed_like} alt="profile2" />
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

  handleStartDateChange = date => {
    this.setState({ startDate: date });
    this.props.handleDate(date, "startDate");
    if (this.props.form.budget) {
      this.props.calculateMaxClicks();
    }
  };

  handleEndDateChange = date => {
    this.setState({ endDate: date });
    this.props.handleDate(date, "endDate");
    if (this.props.form.budget) {
      this.props.calculateMaxClicks();
    }
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
