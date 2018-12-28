import React, { Component } from "react";
import * as images from "../../../../../lib/constants/images";
import { request_list } from "../../../../../mock-data";
import { Translations } from "../../../../../lib/translations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as routes from "../../../../../lib/constants/routes";
import {
  getPendingUserList,
  getUnsubscribe,
  acceptRequest
} from "../../../../../actions";
import moment from "moment";

class Requests extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount = () => {
    this.getRequestList();
  };

  getRequestList = () => {
    this.props.getPendingUserList().then(() => {
      if (
        this.props.usersData.error &&
        this.props.usersData.error.status === 400
      ) {
        //  Error
      } else if (this.props.usersData.pendingUserList) {
        // Success
      }
    });
  };

  handleAccepted = e => {
    console.log(e.target.id);
    if (e.target.id) {
      const requestData = { following: e.target.id, isAccepted: true };
      this.props.acceptRequest(requestData).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          //  Error
        } else if (this.props.usersData.isAcceptRequest) {
          console.log("aacept", this.props.usersData.isAcceptRequest);
          this.getRequestList();
        }
      });
    }
  };

  handleRejected = e => {
    const subscribedId = e.target.id;
    console.log(subscribedId);
    if (subscribedId) {
      this.props.getUnsubscribe(subscribedId).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          // Error
        } else if (this.props.usersData.isUnsubscribed) {
          console.log("reject", this.props.usersData.isUnsubscribed);
          this.getRequestList();
        }
      });
    }
  };

  render() {
    return (
      <div className="tab-pane fade active in" id="nav-requests">
        <div className="header-notifications">
          {this.props.usersData.pendingUserList.length > 0 ? (
            this.props.usersData.pendingUserList.map(request => {
              return (
                <div
                  className="notification-with-subscribe notification-wrapper"
                  key={request.id}
                >
                  <img src={request.profileUrl} alt="image4" />
                  <div className="user-info">
                    <div className="username">{request.username}</div>
                    <div className="subtitle">
                      {Translations.notification.subscribed_to_your_profile}
                    </div>
                    <div className="date">
                      {moment(request.createdAt).format("MM.DD.YYYY")}
                    </div>
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
                        <img
                          src={images.green_tick}
                          alt={"green-tick"}
                          id={request.id}
                        />
                      </button>
                      <button
                        className="black_button"
                        id={request.subscribeId}
                        onClick={this.handleRejected}
                      >
                        <img
                          src={images.cross}
                          alt={"cross"}
                          id={request.subscribeId}
                        />
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="notification-with-subscribe notification-wrapper">
              <div className="user-info">
                <div className="subtitle">
                  {Translations.notification.no_request_avail}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usersData: state.usersData
});

const mapDispatchToProps = {
  getPendingUserList,
  getUnsubscribe,
  acceptRequest
};

Requests.propTypes = {
  isLoading: PropTypes.bool,
  getPendingUserList: PropTypes.func,
  getUnsubscribe: PropTypes.func,
  acceptRequest: PropTypes.func,
  usersData: PropTypes.any,
  history: PropTypes.any
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Requests);
