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
      handleUnSubscribed,
      isLoading,
      isFor,
      isView
    } = this.props;
    const { user } = this.state;
    return (
      <div>
        {isView && (
          <div>
          <div className="row">
            <div className="col-sm-4">
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
            <div className="col-md-4">
              <div className="subscribe-btn">
                {isFor === "Subscribers" ? (
                  <Button
                    className={"blue_button"}
                    id={user.following.id}
                    onClick={handleSubscribed}
                    disabled={isLoading}
                    text={
                      Translations.profile_community_right_sidebar.Subscribe
                    }
                  />
                ) : (
                  <Button
                    className={"filled_button"}
                    id={user._id}
                    onClick={handleUnSubscribed}
                    disabled={isLoading}
                    text={
                      Translations.profile_community_right_sidebar.Subscribed
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    );
  }
}

SubscribeUserCardBody.propTypes = {
  user: PropTypes.object.isRequired,
  handleSubscribed: PropTypes.func.isRequired,
  handleUnSubscribed: PropTypes.func.isRequired,
  isLoading: PropTypes.any,
  isSubscribeStatus: PropTypes.any,
  isFor: PropTypes.any,
  isView: PropTypes.any
};

export default SubscribeUserCardBody;
