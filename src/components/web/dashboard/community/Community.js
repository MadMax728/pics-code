import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  sendRequest,
  getUnsubscribe,
  getUserCommunity
} from "../../../../actions";
import { Translations } from "../../../../lib/translations";
import {
  RightSidebarLoading,
  NoDataFoundRightSidebar,
  Button
} from "../../../ui-kit";
import { Auth } from "../../../../auth";

class Community extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userCommunityList: []
    };
  }

  render() {
    const { isLoading } = this.props;
    const { userCommunityList } = this.state;
    return (
      <div>
        <div className="normal_title padding-15">
          {Translations.profile_community_right_sidebar.community}
        </div>

        {!isLoading && (
          <div className="community">
            {userCommunityList && userCommunityList.length > 0 ? (
              userCommunityList.map(user => {
                const profile_route = user.isOwner
                  ? `/news-feed`
                  : `/news-feed/${user.username}`;
                let classNameText = "filled_button";
                let btnText =
                  Translations.profile_community_right_sidebar.Subscribed;
                if (user.isSubscribe) {
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
                  btnText,
                  isLoading
                };
                return (
                  <div key={user.id}>
                    <div className="community_wrapper">
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
                        {/* <Link to={profile_route}> */}
                        <div
                          id={user.id}
                          onClick={this.handleUserListFilter}
                          onKeyDown={this.keyDown}
                          role="button"
                          tabIndex="0"
                        >
                          <div
                            className="normal_title"
                            title={user.username}
                            id={user.id}
                          >
                            {user.username}
                          </div>
                          <div className="secondary_title">{user.name}</div>
                        </div>
                        {/* </Link> */}
                      </div>
                      <div className="community-subscribe">
                        <Button
                          className={actionButton.className}
                          id={actionButton.userId}
                          onClick={actionButton.handleActionClick}
                          disabled={actionButton.isLoading}
                          text={actionButton.btnText}
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <NoDataFoundRightSidebar />
            )}
          </div>
        )}
        {isLoading && <RightSidebarLoading />}
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const storage = Auth.extractJwtFromStorage();
    let userInfo = null;
    if (storage) {
      userInfo = JSON.parse(storage.userInfo);
    }
    if (userInfo) {
      this.getCommunity(userInfo.id);
    }
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.userCommunity !== nextProps.userCommunity) {
      this.setState({
        userCommunityList: nextProps.userCommunity
      });
    }
  };

  getCommunity = userId => {
    const data = { id: userId };
    this.props.getUserCommunity(data).then(() => {
      if (this.props.userCommunity) {
        this.setState({
          userCommunityList: this.props.userCommunity
        });
      }
    });
  };

  handleUserListFilter = e => {
    const { userCommunityList } = this.state;
    const selectedUserList = userCommunityList.filter(
      user => user.id === e.target.id
    );
    if (selectedUserList) {
      const profile_route = `/news-feed/${selectedUserList[0].username}`;
      this.props.history.push(profile_route);
      this.getCommunity(e.target.id);
    }
  };

  handleSubscribed = e => {
    const errors = {};
    const { sendRequest, getUnsubscribe, userCommunity } = this.props;
    const selectedUserList = userCommunity.find(
      user => user.id === e.target.id
    );
    console.log(selectedUserList);
    console.log(e.target.id);
    // if (selectedUserList.isPending) {
    //   // To Do - On Pending request click
    // } else
    if (selectedUserList.subscribeId === "") {
      const requestData = { followers: e.target.id };

      sendRequest(requestData).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          errors.servererror =
            Translations.profile_community_right_sidebar.serverError;
          this.setState({ errors });
        } else if (this.props.usersData.isRequestSendData) {
          // this.getUserData();
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
          this.setState({ errors });
        } else if (this.props.usersData.isUnsubscribedData) {
          // this.getUserData();
        }
      });
    }
  };
}

const mapStateToProps = state => ({
  userCommunity: state.communityData.userCommunity,
  isLoading: state.communityData.isLoading,
  error: state.communityData.error,
  usersData: state.usersData
});

const mapDispatchToProps = {
  sendRequest,
  getUnsubscribe,
  getUserCommunity
};

Community.propTypes = {
  userCommunity: PropTypes.any,
  isLoading: PropTypes.bool,
  sendRequest: PropTypes.func,
  getUnsubscribe: PropTypes.func,
  usersData: PropTypes.any,
  error: PropTypes.any,
  history: PropTypes.any,
  getUserCommunity: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Community);
