import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import { request_list } from "../../../../../mock-data";
import { Translations } from "../../../../../lib/translations";

class Requests extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      request_list
    };
  }

  handleAccepted = e => {
    const request_list = this.state.request_list;
    request_list.filter(
      req =>
        req.id === parseInt(e.target.id) && (req.isAccepted = !req.isAccepted)
    );
    this.setState({ request_list });
  };

  handleRejected = e => {
    const request_list = this.state.request_list;
    request_list.filter(
      req =>
        req.id === parseInt(e.target.id) && (req.isRejected = !req.isRejected)
    );
    this.setState({ request_list });
  };

  render() {
    return (
      <div className="tab-pane fade active in" id="nav-requests">
        <div className="header-notifications">
          {request_list.map((request, index) => {
            return (
              !request.isRejected && (
                <div
                  className="notification-with-subscribe notification-wrapper"
                  key={index}
                >
                  <img src={request.image} alt="image4" />
                  <div className="user-info">
                    <div className="username">{request.username}</div>
                    <div className="subtitle">
                      {Translations.notification.subscribed_to_your_profile}
                    </div>
                    <div className="date">{request.date}</div>
                  </div>
                  {request.isAccepted && (
                    <div className="subscribe-btn">
                      <button className="black_button">
                        <img src={images.green_tick} alt={"green-tick"} />
                      </button>
                    </div>
                  )}
                  {!request.isAccepted && (
                    <div className="subscribe-btn">
                      <button
                        className="black_button"
                        id={request.id}
                        onClick={this.handleAccepted}
                      >
                        <img src={images.green_tick} alt={"green-tick"} />
                      </button>
                      <button
                        className="black_button"
                        id={request.id}
                        onClick={this.handleRejected}
                      >
                        <img src={images.cross} alt={"cross"} />
                      </button>
                    </div>
                  )}
                </div>
              )
            );
          })}
        </div>
      </div>
    );
  }
}

export default Requests;
