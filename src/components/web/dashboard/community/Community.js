import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sendRequest, getUnsubscribe } from "../../../../actions";
import { Translations } from "../../../../lib/translations";
import {
  RightSidebarLoading,
  NoDataFoundRightSidebar,
  Button
} from "../../../ui-kit";

class Community extends Component {
  render() {
    const { isLoading, userCommunity } = this.props;

    return (
      <div>
        <div className="normal_title padding-15">
          {Translations.profile_community_right_sidebar.community}
        </div>

        {!isLoading && (
          <div className="community">
            {userCommunity && userCommunity.length > 0 ? (
              userCommunity.map(user => {
                const profile_route = user.isOwner
                  ? `/news-feed`
                  : `/news-feed/${user.username}`;
                let classNameText = "filled_button";
                let btnText =
                  Translations.profile_community_right_sidebar.Subscribed;
                // if (user.isPending) {
                //   btnText =
                //     Translations.profile_community_right_sidebar.Pending;
                //   classNameText = "filled_button";
                // } else
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
                        <Link to={profile_route}>
                          <div className="normal_title">{user.username}</div>
                          <div className="secondary_title">{user.name}</div>
                        </Link>
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
    // this.getUserData();
    window.scrollTo(0, 0);
  };

  getUserData = () => {
    const { userCommunity } = this.props;
    if (userCommunity) {
      this.setState({ userCommunity });
    }
  };

  handleSubscribed = e => {
    const errors = {};
    const { sendRequest, getUnsubscribe, userCommunity } = this.props;
    const selectedUserList = userCommunity.find(
      user => user.id === e.target.id
    );
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
          this.setState({ error: errors });
        } else if (this.props.usersData.isRequestSendData) {
          this.getUserData();
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
  getUnsubscribe
};

Community.propTypes = {
  userCommunity: PropTypes.any,
  isLoading: PropTypes.bool,
  sendRequest: PropTypes.func,
  getUnsubscribe: PropTypes.func,
  usersData: PropTypes.any,
  error: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Community);
