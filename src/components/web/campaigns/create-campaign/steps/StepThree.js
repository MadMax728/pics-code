import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import propTypes from "prop-types";

import DatePicker from "react-datepicker";
import moment from "moment";
import { Translations } from "../../../../../lib/translations";

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: moment(),
      end_date: moment()
    };
  }

  handleStartDateChange = date => {
    this.setState({ start_date: date });
    this.props.handleDate(date, "start_date");
  };

  handleEndDateChange = date => {
    this.setState({ end_date: date });
    this.props.handleDate(date, "end_date");
  };

  render() {
    const { handleChangeField } = this.props;
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
                    selected={this.props.form.start_date}
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
                    selected={this.props.form.end_date}
                    onChange={this.handleEndDateChange}
                  />
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar" />
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="form-group">
            <label htmlFor="Define">
              {Translations.create_campaigns.define_daily_budget}
            </label>
            <select
              onBlur={handleChangeField}
              onChange={handleChangeField}
              value={this.props.form.daily_budget}
              name="daily_budget"
            >
              <option value="100 E">100 E</option>
              <option value="200 E">200 E</option>
              <option value="300 E">300 E</option>
              <option value="400 E">400 E</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Maximum">
              {Translations.create_campaigns.maximum_number_of_clicks}
            </label>
            <div className="meter orange nostripes">
              <span style={{ width: "157px" }} className="filled-strip" />
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
              <div className="padding-right-15 profile_image">
                <img
                  src={images.image}
                  alt="feed1"
                  className="img-circle img-responsive"
                />
              </div>
              <div className="no-padding titles_wrapper">
                <div className="normal_title">Title of campaigns</div>
                <div className="secondary_title">Santosh Shinde</div>
                <div className="grey_title">01.01.2000 in Category</div>
              </div>
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
                    <img src={images.image} alt="altmage1" />
                  </div>
                </div>
              </div>
              <div className="feed_description padding-15">
                <span className="secondary_title">
                  {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`}
                </span>
              </div>
            </div>
            <div className="feed_footer padding-15">
              <div className="messages">
                <span className="count">12</span>
                <img src={images.feed_msg} alt="profile1" />
              </div>
              <div className="likes">
                <span className="count">12</span>
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
}

StepThree.propTypes = {
  handleChangeField: propTypes.func.isRequired,
  form: propTypes.any.isRequired,
  handleDate: propTypes.func.isRequired
};

export default StepThree;
