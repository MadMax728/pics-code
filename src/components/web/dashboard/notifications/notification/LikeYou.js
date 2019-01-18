import React, { Component } from "react";
import { likeYou_list } from "../../../../../mock-data";
import { Translations } from "../../../../../lib/translations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFollowUserList } from "../../../../../actions";

class LikeYou extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      likeYou_list
    };
  }

  componentDidMount = () => {
    this.getLikeYouList();
  };

  getLikeYouList = () => {
    // if (userId && type) {
    //   const userRequestData = {
    //     id: userId,
    //     type: type
    //   };
    //   this.props.getFollowUserList(userRequestData).then(() => {
    //     console.log("prop", this.props);
    //   });
    // }
  };

  handleLike = e => {
    const likeYou_list = this.state.likeYou_list;
    likeYou_list.filter(
      like =>
        like.id === parseInt(e.target.id) &&
        (like.user.isLikeToo = !like.user.isLikeToo)
    );
    this.setState({ likeYou_list });
  };

  handleOnKeyDown = () => {};

  handleMessage = e => {
    this.props.handleMessage(e);
  };

  render() {
    return (
      <div className="tab-pane fade active in" id="nav-like">
        <div className="header-notifications">
          {likeYou_list.map(like_you => {
            return (
              <div
                className="notification-with-subscribe notification-wrapper"
                key={like_you.id}
              >
                <img src={like_you.image} alt={"image1"} />
                <div className="user-info">
                  <div className="username">{like_you.username}</div>
                  <div className="subtitle">
                    {Translations.notification.subscribed_to_your_profile}
                  </div>
                  <div className="date">{like_you.date}</div>
                </div>
                {like_you.isMessage && (
                  <div className="subscribe-btn">
                    <button
                      className="filled_button"
                      onClick={this.handleMessage}
                      onKeyDown={this.handleOnKeyDown}
                      id={like_you.user.id}
                    >
                      {Translations.message}
                    </button>
                  </div>
                )}
                {like_you.isLike &&
                  (like_you.user.isLikeToo ? (
                    <div className="subscribe-btn">
                      <button
                        className="filled_button"
                        id={like_you.id}
                        onClick={this.handleLike}
                      >
                        {Translations.like}
                      </button>
                    </div>
                  ) : (
                    <div className="subscribe-btn">
                      <button
                        className="blue_button"
                        id={like_you.id}
                        onClick={this.handleLike}
                      >
                        {Translations.like_you_too}
                      </button>
                    </div>
                  ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

LikeYou.propTypes = {
  handleMessage: PropTypes.func.isRequired,
  getFollowUserList: PropTypes.func
};

const mapStateToProps = state => ({
  usersData: state.usersData
});

const mapDispatchToProps = {
  getFollowUserList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeYou);
