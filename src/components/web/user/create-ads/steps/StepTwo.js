import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import propTypes from "prop-types";
import moment from "moment";
import DatePicker from "react-datepicker";
import { Translations } from "../../../../../lib/translations";

class StepTwo extends Component {
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
            {Translations.create_ads.define_runtime_budget}
          </div>
          <div className="form-group">
            <ul className="options dates">
              <li>
                <label htmlFor="Start">{Translations.create_ads.start}</label>
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
                <label htmlFor="End">{Translations.create_ads.end}</label>
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
              {Translations.create_ads.define_daily_budget}
            </label>
            <select
              onChange={handleChangeField}
              value={this.props.form.daily_budget}
              onBlur={handleChangeField}
              name="daily_budget"
            >
              <option>100 €</option>
              <option>200 €</option>
              <option>300 €</option>
              <option>400 €</option>
            </select>
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
                <div className="normal_title">Title of campaigns</div>
                <div className="secondary_title">Santosh Shinde</div>
                <div className="grey_title">01.01.2000 in Category</div>
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
                    <img src={images.image} alt="image2" />
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
                <img src={images.feed_msg} alt="feed_msg" />
              </div>
              <div className="likes">
                <span className="count">12</span>
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
  handleChangeField: propTypes.func.isRequired,
  handleDate: propTypes.func.isRequired,
  form: propTypes.any.isRequired
};

export default StepTwo;
