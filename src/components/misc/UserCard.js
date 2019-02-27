import React, { Component } from "react";
import PropTypes from "prop-types";
import UserCardBody from "./body/UserCardBody";
import {
  sendRequest,
  getUnsubscribe,
  getDashboard,
  getUser
} from "../../actions";
import { connect } from "react-redux";
import { Translations } from "../../lib/translations";
import { RenderToolTips } from "../common";
import * as enumerations from "../../lib/constants/enumerations";
import { modalType } from "../../lib/constants";

class UserCard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      item: this.props.item,
      index: this.props.index,
      subscribeId: this.props.item.subscribeId,
      isSubscribeStatus: null
    };
  }

  render() {
    const { item, index, isSubscribeStatus, subscribeId } = this.state;
    const { isReport, isBackOffice } = this.props;
    const requestLoading = this.props.usersData.isLoading;
    return (
      <UserCardBody
        user={item}
        index={index}
        handleSubscribed={this.handleSubscribed}
        isReport={isReport}
        isBackOffice={isBackOffice}
        isSubscribeStatus={isSubscribeStatus}
        subscribeId={subscribeId}
        /* eslint-disable */ renderReportTips={() =>
          this.renderReportTips(item.id)
        }
        isLoading={requestLoading}
      />
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  handleSubscribed = e => {
    const selectedUserList = this.state.item;
    const { subscribeId } = this.state;
    if (!subscribeId) {
      const requestData = { followers: selectedUserList.id };
      this.props.sendRequest(requestData).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          // Error
        } else if (
          this.props.usersData &&
          this.props.usersData.isRequestSendData
        ) {
          // Success
          this.setState({
            isSubscribeStatus: "subscribe",
            subscribeId: this.props.usersData.isRequestSendData._id
          });
        }
      });
    } else {
      const subscribedId = selectedUserList.subscribeId
        ? selectedUserList.subscribeId
        : this.state.subscribeId;
      this.props.getUnsubscribe(subscribedId).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          // Error
        } else if (
          this.props.usersData &&
          this.props.usersData.isUnsubscribedData
        ) {
          // Success
          this.setState({
            isSubscribeStatus: "unsubscribe",
            subscribeId: ""
          });
        }
      });
    }
  };

  renderReportTips = id => {
    const { item } = this.state;

    const reportTips = [
      {
        name:
          item.reportStatus === enumerations.reportType.lock
            ? Translations.tool_tips.unlock
            : Translations.tool_tips.lock,
        handleEvent:
          item.reportStatus === enumerations.reportType.lock
            ? this.handleUnlockContent
            : this.handleLockContent
      },
      {
        name: Translations.tool_tips.do_not,
        handleEvent: this.handleDoNotContent
      }
    ];
    return <RenderToolTips items={reportTips} id={id} />;
  };

  handleLockContent = e => {
    const data = {
      typeId: e.target.id,
      contentStatus: enumerations.reportType.lock,
      reportContent: "User"
    };
    this.props.handleModalInfoDetailsCallbackShow(
      modalType.processed,
      data,
      () => {
        this.handleSetState(data);
      }
    );
  };

  handleSetState = data => {
    clearInterval(this.timer);
    const { item } = this.state;
    item.reportStatus = data.contentStatus;
    this.setState({ item });
    this.props.handleRemove(item.id);
  };

  handleDoNotContent = e => {
    const data = {
      typeId: e.target.id,
      contentStatus: enumerations.reportType.doNotLock,
      reportContent: "User"
    };
    this.props.handleModalInfoDetailsCallbackShow(
      modalType.processed,
      data,
      () => {
        this.handleSetState(data);
      }
    );
  };

  handleUnlockContent = e => {
    const data = {
      typeId: e.target.id,
      contentStatus: enumerations.reportType.unLock,
      reportContent: "User"
    };
    this.props.handleModalInfoDetailsCallbackShow(
      modalType.processed,
      data,
      () => {
        this.handleSetState(data);
      }
    );
  };
}

const mapStateToProps = state => ({
  usersData: state.usersData,
  userDataByUsername: state.userDataByUsername
});

const mapDispatchToProps = {
  sendRequest,
  getUnsubscribe,
  getDashboard,
  getUser
};

UserCard.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isReport: PropTypes.bool,
  sendRequest: PropTypes.func,
  getUnsubscribe: PropTypes.func,
  getDashboard: PropTypes.func,
  usersData: PropTypes.any,
  getUser: PropTypes.func,
  userDataByUsername: PropTypes.any,
  isBackOffice: PropTypes.bool,
  handleModalInfoDetailsCallbackShow: PropTypes.func,
  handleRemove: PropTypes.func,
  isLoading: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCard);
