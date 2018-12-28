import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getDashboard, sendRequest, getUnsubscribe } from "../../../../actions";
import { Translations } from "../../../../lib/translations";

class Community extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { usersList: null, error: null };
  }

  componentDidMount = () => {
    this.getUserData();
  };

  getUserData = () => {
    this.props.getDashboard("users").then(() => {
      if (this.props.usersList) {
        this.setState({ usersList: this.props.usersList });
      }
    });
  };

  handleSubscribed = e => {
    const errors = {};
    const { usersList } = this.state;
    let selectedUserList = usersList.find(user => user.id === e.target.id);
    if (selectedUserList.subscribeId === "") {
      const requestData = { followers: e.target.id };
      this.props.sendRequest(requestData).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          errors.servererror =
            Translations.profile_community_right_sidebar.serverError;
          this.setState({ error: errors });
        } else if (this.props.usersData.isRequestSend) {
          this.getUserData();
        }
      });
    } else {
      const subscribedId = selectedUserList.subscribeId;
      this.props.getUnsubscribe(subscribedId).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          errors.servererror =
            Translations.profile_community_right_sidebar.serverError;
          this.setState({ error: errors });
        } else if (this.props.usersData.isUnsubscribed) {
          this.getUserData();
        }
      });
    }
  };

  // static getDerivedStateFromProps = (nextProps, prevState) => {
  //   console.log("ahi ave che");
  //   // this.forceUpdate();
  // };

  render() {
    const { usersList, isLoading } = this.state;

    return (
      <div>
        <div className="normal_title padding-15">
          {Translations.profile_community_right_sidebar.community}
        </div>
        <div className="community">
          {this.props.usersList &&
            !isLoading &&
            this.props.usersList.map(user => {
              const profile_route = user.isOwner
                ? `/news-feed`
                : `/news-feed/${user.username}`;
              return (
                <div className="community_wrapper" key={user.id}>
                  <div className="community-user-image">
                    <Link to={profile_route}>
                      <img
                        src={user.profileUrl}
                        alt="campaign"
                        className="img-circle img-responsive"
                      />
                    </Link>
                  </div>
                  <div className="community-user-name">
                    <Link to={profile_route}>
                      <div className="normal_title">{user.username}</div>
                      <div className="secondary_title">{"user.name"}</div>
                    </Link>
                  </div>
                  {user.isSubscribe ? (
                    <div className="community-subscribe">
                      <button
                        className="filled_button"
                        id={user.id}
                        onClick={this.handleSubscribed}
                      >
                        {Translations.profile_community_right_sidebar.Subscribe}
                      </button>
                    </div>
                  ) : (
                    <div className="community-subscribe">
                      <button
                        className="blue_button"
                        id={user.id}
                        onClick={this.handleSubscribed}
                      >
                        {
                          Translations.profile_community_right_sidebar
                            .Subscribed
                        }
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usersList: state.dashboardData.users,
  isLoading: state.dashboardData.isLoading,
  error: state.dashboardData.error,
  usersData: state.usersData
});

const mapDispatchToProps = {
  getDashboard,
  sendRequest,
  getUnsubscribe
};

Community.propTypes = {
  getDashboard: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  usersList: PropTypes.any,
  sendRequest: PropTypes.func,
  getUnsubscribe: PropTypes.func,
  usersData: PropTypes.func
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Community);
