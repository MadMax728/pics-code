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
      subscribeId: this.props.item.subscribeId
    };
  }

  render() {
    const { item, index, subscribeId } = this.state;
    const { isReport, isBackOffice } = this.props;
    const requestLoading = this.props.usersData.isLoading;
    return (
      <UserCardBody
        user={item}
        index={index}
        handleSubscribe={this.handleSubscribe}
        handleUnSubscribe={this.handleUnSubscribe}
        isReport={isReport}
        isBackOffice={isBackOffice}
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

  handleSubscribe = e => {
    const requestData = { followers: e.target.id };
    this.props.sendRequest(requestData).then(() => {
      if (this.props.usersData && this.props.usersData.isRequestSendData) {
        this.setState({
          subscribeId: this.props.usersData.isRequestSendData._id
        });
      }
    });
  };

  handleUnSubscribe = e => {
    const subscribedId = e.target.id;
    this.props.getUnsubscribe(subscribedId).then(() => {
      if (this.props.usersData && this.props.usersData.isUnsubscribedData) {
        this.setState({
          subscribeId: ""
        });
      }
    });
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
  userDataByUsername: state.userDataByUsername,
  usersList: state.dashboardData.users
});

const mapDispatchToProps = {
  sendRequest,
  getUnsubscribe,
  getDashboard,
  getUser,
  getDashboard
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
  isLoading: PropTypes.any,
  usersList: PropTypes.any,
  getDashboard: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCard);
