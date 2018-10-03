import React, { Component } from "react";

class SettingAdsStatisticsRight extends Component {
  handleOnChange = () => {};

  render() {
    return (
      <div>
        <div className="campaigns-right">
          <button className="blue_button">Edit ad</button>
          <button className="black_button">Close ad </button>
          <div className="normal_title padding-15">Budget & Runtime</div>
          <ul className="campaign-right-options">
            <li>
              <span>Daily budget</span>
              <span className="pull-right">100 E</span>
            </li>
            <li>
              <span>Total budget spent</span>
              <span className="pull-right">20 E</span>
            </li>
            <li>
              <span>Total expenses</span>
              <span className="pull-right">200 E</span>
            </li>
            <li>
              <span>Runtime</span>
              <span className="pull-right">01.01.2000 - 01.01.2000</span>
            </li>
          </ul>
          <div className="normal_title padding-15">Performance</div>
          <ul className="campaign-right-options">
            <li>
              <span>Views</span>
              <span className="pull-right">100</span>
            </li>
            <li>
              <span>Clicks</span>
              <span className="pull-right">100</span>
            </li>
          </ul>
          <div className="normal_title padding-15">Details on ad</div>
          <ul className="campaign-right-options">
            <li>
              <span>Location</span>
              <span className="pull-right">Example</span>
            </li>
            <li>
              <span>Radius</span>
              <span className="pull-right">0 Km</span>
            </li>
            <li>
              <span>Category</span>
              <span className="pull-right">Example</span>
            </li>
            <li>
              <span>Target group</span>
              <span className="pull-right">Example</span>
            </li>
          </ul>
          <div className="normal_title padding-15">
            Status
            <span className="green-circle pull-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default SettingAdsStatisticsRight;
