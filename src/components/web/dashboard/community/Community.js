import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  sendRequest,
  getUnsubscribe,
  getUserCommunity
} from "../../../../actions";
import { Translations } from "../../../../lib/translations";
import { RightSidebarLoading, NoDataFoundRightSidebar } from "../../../ui-kit";
import CommunityItem from "./CommunityItem";

class Community extends Component {
  render() {
    const { communityData, usersData } = this.props;
    const isLoading = communityData.isLoading;
    const isSubscribeLoading = usersData.isLoading;
    const userCommunityList = communityData.userCommunity || [];
    return (
      <div>
        <div className="normal_title padding-15">
          {Translations.profile_community_right_sidebar.community}
        </div>

        {!isLoading && (
          <div className="community">
            {userCommunityList && userCommunityList.length > 0 ? (
              userCommunityList.map(user => {
                return (
                  <div key={user.id}>
                    <CommunityItem user={user} isLoading={isSubscribeLoading} />
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

  // handleSubscribe = e => {
  //   const requestData = { followers: e.target.id };
  //   this.props.sendRequest(requestData).then(() => {
  //     this.props.getUserCommunity();
  //   });
  // };

  // handleUnSubscribe = e => {
  //   const subscribedId = e.target.id;
  //   this.props.getUnsubscribe(subscribedId).then(() => {
  //     this.props.getUserCommunity();
  //   });
  // };
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
