import React, { Component } from "react";

class SettingCampaignStatistics extends Component {
  handleOnChange = () => {};

  render() {
    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <div className="campaign-middle-section">
            <div className="normal_title padding-15">Campaign title</div>
            <div className="campaign-block">
              <div className="normal_title padding-15">Total budget</div>
              <div className="indicators">
                <div>
                  <span className="blue-block" />
                  Budget spent
                </div>
                <div>
                  <span className="grey-block" />
                  Remaining Budget
                </div>
              </div>
              <div className="progressbar-wrapper">
                <div className="progressbar">
                  <div style={{ width: "80%" }} />
                </div>
                <span className="counter">0,00</span>
              </div>
            </div>
            <div className="campaign-block">
              <div className="normal_title padding-15">Performance</div>
              <div className="indicators">
                <div>
                  <span className="blue-block" />
                  Views
                </div>
                <div>
                  <span className="grey-block" />
                  Clicks
                </div>
              </div>
              <div className="progressbar-wrapper">
                <div className="progressbar">
                  <div style={{ width: "50%" }} />
                </div>
                <span className="counter">0,00</span>
              </div>
            </div>
            <div className="campaign-block">
              <div className="normal_title padding-15">Runtime</div>
              <div className="indicators">
                <div>
                  <span className="blue-block" />
                  Runtime passed
                </div>
                <div>
                  <span className="grey-block" />
                  Remaining runtime
                </div>
              </div>
              <div className="progressbar-wrapper">
                <div className="progressbar">
                  <div style={{ width: "20%" }} />
                </div>
                <span className="counter">0,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SettingCampaignStatistics;
