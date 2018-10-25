import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import propTypes from "prop-types";
import moment from "moment";
import DatePicker from "react-datepicker";

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
    this.props.handleDate(date.format("MM/DD/YYYY"), "start_date");
  };

  handleEndDateChange = date => {
    this.setState({ end_date: date });
    this.props.handleDate(date.format("MM/DD/YYYY"), "end_date");
  };

  render() {
    const { handleChangeField } = this.props;
    return (
      <div className="modal-body">
        <div className="col-sm-5 upload-form">
          <div className="subtitle">Define runtime & budget</div>
          <div className="form-group">
            <ul className="options dates">
              <li>
                <label htmlFor="Start">Start</label>
                <div className="input-group date">
                  <DatePicker
                    selected={this.state.start_date}
                    onChange={this.handleStartDateChange}
                  />
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar" />
                  </span>
                </div>
              </li>
              <li>
                <label htmlFor="End">End</label>
                <div className="input-group date">
                  <DatePicker
                    selected={this.state.end_date}
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
            <label htmlFor="Define">Define daily budget</label>
            <select onBlur={handleChangeField} name="daily_budget">
              <option>100 €</option>
              <option>200 €</option>
              <option>300 €</option>
              <option>400 €</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Maximum">Maximum number of clicks</label>
            <div className="meter orange nostripes">
              <span style={{ width: "157px" }} className="filled-strip" />
              <span className="number-clicks">Max. 1200 clicks</span>
            </div>
          </div>
          <div className="subtitle">Information on payment</div>
          <p>
            You only have to pay when a user actively clicks on your ad on
            Picstagraph.
          </p>
          <ul>
            <li>100 % cost control</li>
            <li>Cost per Click: 1,00 €</li>
            <li>Payment only after ad was cloes</li>
            <li>Total budget can not be exceeded</li>
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
  handleDate: propTypes.func.isRequired
};

export default StepTwo;
