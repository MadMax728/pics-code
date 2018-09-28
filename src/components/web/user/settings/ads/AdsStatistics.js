import React, { Component } from "react";

class AdsStatistics extends Component {
  handleOnChange = () => {};

  render() {
    return (
      <div>
        <div className="padding-rl-10 middle-section">
          <div className="campaign-middle-section">
            <div className="normal_title padding-15">Ad title</div>
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
              <div className="normal_title padding-15">Daily budget</div>
              <div className="indicators">
                <div>
                  <span className="blue-block" />
                  Daily budget spent
                </div>
                <div>
                  <span className="grey-block" />
                  Remaining daily budget
                </div>
              </div>
              <div className="progressbar-wrapper">
                <div className="progressbar">
                  <div style={{ width: "10%" }} />
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
        <div className="right_bar no-padding pull-left">
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
      </div>
    );
  }
}

export default AdsStatistics;
