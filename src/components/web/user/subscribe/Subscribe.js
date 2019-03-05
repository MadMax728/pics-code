import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Translations } from "../../../../lib/translations";
import { Button, InlineLoading } from "../../../ui-kit";
import {
  getFollowUserList,
  sendRequest,
  getUnsubscribe,
  getDashboard,
  getUser
} from "../../../../actions";
import SubscribeUserCard from "./SubscribeUserCard";
import InfiniteScroll from "react-infinite-scroller";

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      page: 1,
      limit: 3,
      hasMore: false
    };
  }

  handleModalHides = () => {
    this.props.handleModalHide();
    // this.props.handleConfirmation(true);
  };

  handleModalAction = () => {
    this.props.handleModalHide();
    this.props.handleConfirmation(false);
  };

  render() {
    const { dataList, page } = this.state;
    const { isFor, username, subscribeData } = this.props;
    const isLoading = this.props.subscribeData.isLoading;
    let hasMore = false;
    const userList = subscribeData.subscribeData;
    if (userList) {
      if (
        userList.pages &&
        userList.page &&
        parseInt(userList.pages) > parseInt(userList.page)
      ) {
        hasMore = true;
      } else {
        hasMore = false;
      }
    }
    return (
      <div id="" className="subscriber-tooltip">
        <h4 className="normal_title">
          {isFor === "Subscribers"
            ? Translations.top_bar_info_modal.subscriber_modal_title
            : Translations.top_bar_info_modal.subscribed_modal_title}
        </h4>

        <div className="header-notifications">
          {/* style={{ height: "200px", overflow: "auto" }}*/}

          {dataList.length > 0 ? (
            <InfiniteScroll
              pageStart={0}
              loadMore={this.getMoreUsers}
              hasMore={hasMore}
              loader={<div className="loader">Loading ...</div>}
            >
              {dataList.map(user => {
                return (
                  <div key={user._id}>
                    {isLoading && <InlineLoading />}
                    <SubscribeUserCard
                      item={user}
                      isLoading={isLoading}
                      isFor={isFor}
                      username={username}
                    />
                  </div>
                );
              })}
            </InfiniteScroll>
          ) : (
            <div className="notification-with-subscribe notification-wrapper">
              <div className="user-info">
                <div className="subtitle">
                  {Translations.top_bar_info_modal.no_data}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    const { limit, page } = this.state;
    const params = { limit, page };
    this.getTooltipUserList(this.props.userId, params);
    window.addEventListener("scroll", this.onScroll, false);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.onScroll);
  };

  getMoreUsers = () => {
    console.log("inscroll");
    const { subscribeData } = this.props;
    const params = { limit: this.state.limit, page: 1 };
    const userList = subscribeData.subscribeData;
    if (
      userList.pages &&
      userList.page &&
      parseInt(userList.pages) > parseInt(userList.page)
    ) {
      params.page = parseInt(userList.page) + 1;
    } else {
      params.page = 0;
    }
    console.log(params);
    // this.getTooltipUserList(this.props.userId, params);
  };

  // Tooltip List
  getTooltipUserList = (userId, paginationParam) => {
    console.log("params", paginationParam);
    const { isFor } = this.props;
    if (userId) {
      const paginationParams =
        "&limit=" + paginationParam.limit + "&page=" + paginationParam.page;
      let userRequestData = {
        id: userId,
        type: "following",
        params: paginationParams
      };

      if (isFor === "Subscribers") {
        userRequestData = {
          id: userId,
          type: "following",
          params: paginationParams
        };
      } else if (isFor === "Subscribed") {
        userRequestData = {
          id: userId,
          type: "followers",
          params: paginationParams
        };
      }
      this.props.getFollowUserList(userRequestData).then(() => {
        // Success
        if (
          this.props.subscribeData &&
          this.props.subscribeData.subscribeData &&
          this.props.subscribeData.subscribeData.data
        ) {
          this.setState({
            dataList: this.props.subscribeData.subscribeData.data
          });
        }
      });
    }
  };
}

const mapStateToProps = state => ({
  subscribeData: state.subscribeData,
  usersData: state.usersData,
  usersList: state.dashboardData.users,
  userDataByUsername: state.userDataByUsername
});

const mapDispatchToProps = {
  getFollowUserList,
  sendRequest,
  getUnsubscribe,
  getDashboard,
  getUser
};

Subscribe.propTypes = {
  type: PropTypes.any,
  userId: PropTypes.any,
  username: PropTypes.any,
  getFollowUserList: PropTypes.func,
  sendRequest: PropTypes.func,
  getUnsubscribe: PropTypes.func,
  subscribeData: PropTypes.any,
  usersData: PropTypes.any,
  getUserData: PropTypes.any,
  getDashboard: PropTypes.func,
  usersList: PropTypes.any,
  userDataByUsername: PropTypes.any,
  getUser: PropTypes.func,
  handleModalHide: PropTypes.func,
  handleConfirmation: PropTypes.func,
  isFor: PropTypes.any,
  lastEvaluatedKey: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subscribe);
