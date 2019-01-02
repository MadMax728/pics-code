import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../lib/translations";
import { connect } from "react-redux";
import { getFollowUserList } from "../../../actions";
import { Auth } from "../../../auth";

class SubscriberTooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const storage = Auth.extractJwtFromStorage();
    let userInfo = null;
    if (storage) {
      userInfo = JSON.parse(storage.userInfo);
    }
    if (userInfo.id && this.props.type) {
      const userRequestData = { id: userInfo.id, type: "followings" };
      this.props.getFollowUserList("subscriber", userRequestData).then(() => {
        // Success
      });
    }
  };

  handleKeyPress = () => {};

  render() {
    return (
      <div id="">
        <h4 className="normal_title">
          {Translations.top_bar_info_modal.modal_title}
        </h4>
        <div className="header-notifications">
          {this.props.subscribeData.subscriber.map(user => {
            return (
              <div
                className="notification-with-subscribe notification-wrapper"
                key={user.id}
              >
                <img
                  src={user.profileUrl}
                  alt="campaign"
                  className="img-circle img-responsive"
                />
                <div className="user-info">
                  <div className="username">{user.username}</div>
                  <div className="subtitle">{user.name}</div>
                </div>
                <div className="subscribe-btn">
                  <button
                    className="filled_button"
                    id={user.id}
                    onClick={this.handleSubscribe}
                  >
                    {Translations.top_bar_info_modal.subscribe_btn}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subscribeData: state.subscribeData
});

const mapDispatchToProps = {
  getFollowUserList
};

SubscriberTooltip.propTypes = {
  type: PropTypes.any,
  getFollowUserList: PropTypes.func,
  subscribeData: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscriberTooltip);
