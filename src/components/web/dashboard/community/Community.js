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
  UserImageItem,
  UserTitleItem,
  Button
} from "../../../ui-kit";
import CommunityItem from './CommunityItem';
import { Auth } from "../../../../auth";

class Community extends Component {
  
  render() {
    const { communityData } = this.props;
    const isLoading = communityData.isLoading;
    const userCommunityList = communityData.userCommunityList;
    return (
      <div>
        <div className="normal_title padding-15">
          {Translations.profile_community_right_sidebar.community}
        </div>

        {!isLoading && (
          <div className="community">
            {userCommunityList && userCommunityList.length > 0 ? (
              userCommunityList.map(user => {
                let classNameText = "filled_button";
                let btnText =
                  Translations.profile_community_right_sidebar.Subscribed;
                if (user.subscribeId) {
                  btnText =
                    Translations.profile_community_right_sidebar.Subscribed;
                  classNameText = "filled_button";
                } else {
                  btnText =
                    Translations.profile_community_right_sidebar.Subscribe;
                  classNameText = "blue_button";
                }
                return (
                  <div key={user.id}>
                    <CommunityItem
                      user={user}
                      classNames={classNameText}
                      handleActionClick={this.handleSubscribed}
                      isLoading={isLoading}
                      btnText={btnText}>
                    </CommunityItem>
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
    this.props.getUserCommunity();
  };

  handleSubscribed = e => {
    const errors = {};
    const { sendRequest, getUnsubscribe, communityData } = this.props;
    const userCommunity = communityData.userCommunityList;
    const selectedUserList = userCommunity.find(
      user => user.id === e.target.id
    );
    if (selectedUserList.subscribeId === "") {
      console.log("subscribe");
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
      console.log("unsubscribe");
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
  communityData: state.communityData,
  usersData: state.usersData
});

const mapDispatchToProps = {
  sendRequest,
  getUnsubscribe,
  getUserCommunity
};

Community.propTypes = {
  sendRequest: PropTypes.func,
  getUnsubscribe: PropTypes.func,
  usersData: PropTypes.any,
  history: PropTypes.any,
  communityData: PropTypes.any,
  getUserCommunity: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Community);
