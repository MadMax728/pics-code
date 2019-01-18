import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Auth } from "../../../../auth";
import {
  getDashboard,
  sendRequest,
  getUnsubscribe,
  getUser
} from "../../../../actions";
import { Translations } from "../../../../lib/translations";
import { RightSidebarLoading, NoDataFoundRightSidebar } from "../../../ui-kit";

class Community extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { usersList: null, error: null };
  }

  render() {
    const { isLoading, isLoadingusers, usersList, usersData } = this.props;
    const userListIsLoading = usersData.isLoading;
    return (
      <div>
        <div className="normal_title padding-15">
          {Translations.profile_community_right_sidebar.community}
        </div>
        <div className="community">
          {usersList && !isLoadingusers ? (
            usersList.map(user => {
              const profile_route = user.isOwner
                ? `/news-feed`
                : `/news-feed/${user.username}`;
              let classNameText = "filled_button";
              let btnText =
                Translations.profile_community_right_sidebar.Subscribed;
              if (user.isPending) {
                btnText = Translations.profile_community_right_sidebar.Pending;
                classNameText = "filled_button";
              } else if (user.isSubscribe) {
                btnText =
                  Translations.profile_community_right_sidebar.Subscribed;
                classNameText = "filled_button";
              } else {
                btnText =
                  Translations.profile_community_right_sidebar.Subscribe;
                classNameText = "blue_button";
              }
              const actionButton = {
                className: classNameText,
                userId: user.id,
                handleActionClick: this.handleSubscribed,
                btnText: btnText,
                isLoading: userListIsLoading
              };
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
                      <div className="secondary_title">{user.name}</div>
                    </Link>
                  </div>
                  <div className="community-subscribe">
                    <button
                      className={actionButton.className}
                      id={actionButton.userId}
                      onClick={actionButton.handleActionClick}
                      disabled={actionButton.isLoading}
                    >
                      {actionButton.btnText}
                    </button>
                  </div>
                  {/* {user.isSubscribe ? (
                    <div className="community-subscribe">
                      <button
                        className="filled_button"
                        id={user.id}
                        onClick={this.handleSubscribed}
                      >
                        {
                          Translations.profile_community_right_sidebar
                            .Subscribed
                        }
                      </button>
                    </div>
                  ) : (
                    <div className="community-subscribe">
                      <button
                        className="blue_button"
                        id={user.id}
                        onClick={this.handleSubscribed}
                      >
                        {Translations.profile_community_right_sidebar.Subscribe}
                      </button>
                    </div>
                  )} */}
                </div>
              );
            })
          ) : (
            <NoDataFoundRightSidebar />
          )}
        </div>
        {isLoading && <RightSidebarLoading />}
      </div>
    );
  }

  componentDidMount = () => {
    this.getUserData();
    window.scrollTo(0, 0);
  };

  getUserData = () => {
    const { usersList, getDashboard } = this.props;
    getDashboard("users", "").then(() => {
      if (usersList) {
        this.setState({ usersList });
      }
    });
  };

  // Top Bar - User Info
  getUserInfo = () => {
    const storage = Auth.extractJwtFromStorage();
    let userInfo = null;
    if (storage) {
      userInfo = JSON.parse(storage.userInfo);
    }
    const data = { username: userInfo.username };
    const { getUser, userDataByUsername } = this.props;
    getUser(data).then(() => {
      if (userDataByUsername.user.data) {
        // Success
      }
    });
  };

  handleSubscribed = e => {
    const errors = {};
    const { sendRequest, getUnsubscribe, usersList } = this.props;
    const selectedUserList = usersList.find(user => user.id === e.target.id);
    if (selectedUserList.subscribeId === "") {
      const requestData = { followers: e.target.id };
      sendRequest(requestData).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          errors.servererror =
            Translations.profile_community_right_sidebar.serverError;
          this.setState({ error: errors });
        } else if (this.props.usersData.isRequestSendData) {
          this.getUserData();
          this.getUserInfo();
        }
      });
    } else {
      const subscribedId = selectedUserList.subscribeId;
      getUnsubscribe(subscribedId).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          errors.servererror =
            Translations.profile_community_right_sidebar.serverError;
          this.setState({ error: errors });
        } else if (this.props.usersData.isUnsubscribedData) {
          this.getUserData();
          this.getUserInfo();
        }
      });
    }
  };

}

const mapStateToProps = state => ({
  usersList: state.dashboardData.users,
  isLoading: state.dashboardData.isLoading,
  error: state.dashboardData.error,
  usersData: state.usersData,
  userDataByUsername: state.userDataByUsername
});

const mapDispatchToProps = {
  getDashboard,
  sendRequest,
  getUnsubscribe,
  getUser
};

Community.propTypes = {
  getDashboard: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isLoadingusers: PropTypes.bool,
  usersList: PropTypes.any,
  sendRequest: PropTypes.func,
  getUnsubscribe: PropTypes.func,
  usersData: PropTypes.object,
  getUser: PropTypes.func,
  userDataByUsername: PropTypes.any
  // error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Community);
