import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Translations } from "../../../lib/translations";

const propTypes = {
  id: PropTypes.any.isRequired,
  isLoading: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      handleEvent: PropTypes.func
    }).isRequired
  ).isRequired
};

class SubscribeToolTips extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleKeyPress = () => {};

  handleSubscribe = e => {
    console.log("subscribe", e.target.id);
  };

  render() {
    const { items, id, isLoading } = this.props;
    return (
      <div id="">
        <h4 className="normal_title">
          {Translations.top_bar_info_modal.modal_title}
        </h4>
        <div className="header-notifications">
          {items.map(user => {
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

SubscribeToolTips.propTypes = propTypes;

export default SubscribeToolTips;
