import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import { request_list } from "../../../../../mock-data";

class Requests extends Component {
  render() {
    return (
      <div className="tab-pane fade active in" id="nav-requests">
        <div className="header-notifications">
          {request_list.map((request, index) => {
            return (
              <div
                className="notification-with-subscribe notification-wrapper"
                key={index}
              >
                <img src={request.image} alt="image4" />
                <div className="user-info">
                  <div className="username">{request.username}</div>
                  <div className="subtitle">Subscribed to your profile</div>
                  <div className="date">{request.date}</div>
                </div>
                <div className="subscribe-btn">
                  <button className="black_button">
                    <img src={images.green_tick} alt={"green-tick"} />
                  </button>
                  <button className="black_button">
                    <img src={images.cross} alt={"cross"} />
                  </button>
                </div>
              </div>
            );
          })}
          <div className="notification-with-subscribe notification-wrapper">
            <img src={images.image} alt="image4" />
            <div className="user-info">
              <div className="username">User name </div>
              <div className="subtitle">Subscribed to your profile</div>
              <div className="date">01.01.2000</div>
            </div>
            <div className="subscribe-btn">
              <button className="black_button">
                <img src={images.green_tick} alt={"green-tick"} />
              </button>
              <button className="black_button">
                <img src={images.cross} alt={"cross"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Requests;
