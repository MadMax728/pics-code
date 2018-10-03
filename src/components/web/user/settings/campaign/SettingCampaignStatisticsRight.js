import React, { Component } from "react";

class SettingCampaignStatisticsRight extends Component {
  render() {
    return (
      <div>
        <div className="campaigns-right">
          <button className="blue_button">Edit campaign</button>
          <button className="black_button">Close campaign </button>
          <div className="normal_title padding-15">Budget & Runtime</div>
          <ul className="campaign-right-options">
            <li>
              <span>Total budget spent</span>
              <span className="pull-right">100 E</span>
            </li>
            <li>
              <span>Remaining budget</span>
              <span className="pull-right">20 E</span>
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
            <li>
              <span>Applications</span>
              <span className="pull-right">0</span>
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

export default SettingCampaignStatisticsRight;
