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
      dataList: []
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
    const { dataList } = this.state;
    const { isFor, username } = this.props;
    const isLoading = this.props.subscribeData.isLoading;
    // console.log(subscribeData.subscribeData);
    // const subscribeData = subscribeData.subscribeData;
    // const limit = subscribeData.limit;
    // const page = subscribeData.page;

    // let hasMore = false;

    // if (
    //   limit &&
    //   subscribeData.pages &&
    //   parseInt(subscribeData.pages) > parseInt(page)
    // ) {
    //   hasMore = true;
    // }

    // if (
    //   page &&
    //   subscribeData.pages &&
    //   parseInt(subscribeData.pages) > parseInt(page)
    // ) {
    //   hasMore = true;
    // }

    return (
      <div id="" className="subscriber-tooltip">
        <h4 className="normal_title">
          {Translations.top_bar_info_modal.modal_title}
        </h4>
        {isLoading && <InlineLoading />}
        <div className="header-notifications">
          {dataList.length > 0 ? (
            dataList.map(user => {
              return (
                <div onScroll={this.trackScrolling} key={user._id}>
                  <SubscribeUserCard
                    item={user}
                    isLoading={isLoading}
                    isFor={isFor}
                    username={username}
                  />
                </div>
              );
            })
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
    const params = { limit: 10, page: 1 };
    this.getTooltipUserList(this.props.userId, params);
    window.addEventListener("scroll", this.onScroll, false);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.onScroll);
  };

  onScroll = () => {
    console.log("dataScroll");
    const { dataList, currentPage } = this.state;
    const currentScrollHeight = parseInt(window.innerHeight + window.scrollY);
    console.log(currentScrollHeight);
    // console.log(currentScrollHeight, (document.body.offsetHeight));
    if (
      dataList &&
      currentScrollHeight + 1 >= document.body.offsetHeight &&
      dataList.length
    ) {
      const { lastEvaluatedKey } = this.props;
      console.log("onScroll", lastEvaluatedKey);
      let payload = "";
      if (currentPage < lastEvaluatedKey.pages) {
        for (let i in lastEvaluatedKey) {
          if (i === "limit") {
            payload += lastEvaluatedKey[i] && `&${i}=${lastEvaluatedKey[i]}`;
          } else {
            const currentPage = parseInt(lastEvaluatedKey[i]) + 1;
            payload += lastEvaluatedKey[i] && `&${i}=${currentPage}`;
            this.setState({ currentPage });
          }
        }
        const userId = this.props.userId;
        let userRequestData = {
          id: userId,
          type: "following",
          params: payload
        };
        if (this.props.isFor === "Subscribers") {
          userRequestData = {
            id: userId,
            type: "following",
            params: payload
          };
        } else if (this.props.isFor === "Subscribed") {
          userRequestData = {
            id: userId,
            type: "followers",
            params: payload
          };
        }
        this.props.getFollowUserList(userRequestData).then(() => {
          const { dataList } = this.state;
          this.setState({
            dataList: dataList.concat(
              this.props.subscribeData.subscribeData.data
            )
          });
        });
      }
    }
  };

  // Tooltip List
  getTooltipUserList = (userId, paginationParam) => {
    if (userId) {
      const paginationParams =
        "&limit=" + paginationParam.limit + "&page=" + paginationParam.page;
      let userRequestData = {
        id: userId,
        type: "following",
        params: paginationParams
      };

      if (this.props.isFor === "Subscribers") {
        userRequestData = {
          id: userId,
          type: "following",
          params: paginationParams
        };
      } else if (this.props.isFor === "Subscribed") {
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
