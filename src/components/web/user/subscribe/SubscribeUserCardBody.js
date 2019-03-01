import React, { Component } from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import { Button, Loader } from "../../../ui-kit";
import { Translations } from "../../../../lib/translations";

class SubscribeUserCardBody extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: this.props.user
    };
  }

  render() {
    const {
      handleSubscribed,
      isLoading,
      isSubscribeStatus,
      isFor
    } = this.props;
    const { user } = this.state;
    let classNameText = "filled_button";
    let btnText = Translations.profile_community_right_sidebar.Subscribed;
    console.log("status", isSubscribeStatus);
    console.log("followings", typeof user.followers);
    const isfollower = typeof user.followers;
    if (isfollower !== "string") {
      btnText = Translations.profile_community_right_sidebar.Subscribed;
      classNameText = "filled_button";
    } else {
      btnText = Translations.profile_community_right_sidebar.Subscribe;
      classNameText = "blue_button";
    }
    let actionId = "";
    if (isFor === "Subscribers") {
      console.log("subscribe", user.followers);
      actionId = user.followers;
    } else {
      console.log("unsubscribe", user._id);
      actionId = user._id;
    }

    const actionButton = {
      className: classNameText,
      actionId: actionId,
      handleActionClick: handleSubscribed,
      btnText,
      isLoading
    };

    return (
      <div>
        <div className="row">
          <div className="col-sm-3">
            <img
              src={
                isFor === "Subscribers"
                  ? user.following.profileUrl
                  : user.followers.profileUrl
              }
              alt="campaign"
              className="img-circle img-responsive"
            />
          </div>
          <div className="col-sm-4">
            <div className="user-info">
              <div className="username">
                {isFor === "Subscribers"
                  ? user.following.username
                  : user.followers.username}
              </div>
              <div className="subtitle">
                {isFor === "Subscribers"
                  ? user.following.name
                  : user.followers.name}
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="subscribe-btn">
              <Button
                className={actionButton.className}
                id={actionButton.actionId}
                onClick={actionButton.handleActionClick}
                disabled={actionButton.isLoading}
                text={actionButton.btnText}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SubscribeUserCardBody.propTypes = {
  user: PropTypes.object.isRequired,
  handleSubscribed: PropTypes.func.isRequired,
  isLoading: PropTypes.any,
  isSubscribeStatus: PropTypes.any,
  isFor: PropTypes.any
};

export default SubscribeUserCardBody;
