import React, { Component } from "react";
import PropTypes from "prop-types";
import SubscribeUserCardBody from "./SubscribeUserCardBody";
import { InlineLoading } from "../../../ui-kit";
import {
  sendRequest,
  getUnsubscribe,
  getDashboard,
  getUser
} from "../../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../../lib/translations";
import { RenderToolTips } from "../../common";
import * as enumerations from "../../../../lib/constants/enumerations";
import { modalType } from "../../../../lib/constants";

class SubscribeUserCard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      item: this.props.item,
      subscribeId: this.props.item.subscribeId,
      isSubscribeStatus: null
    };
  }

  render() {
    const { item, isSubscribeStatus, subscribeId } = this.state;
    const { isLoading, isFor } = this.props;
    return (
      <div>
        <SubscribeUserCardBody
          user={item}
          handleSubscribed={this.handleSubscribed}
          isSubscribeStatus={isSubscribeStatus}
          subscribeId={subscribeId}
          isLoading={isLoading}
          isFor={isFor}
        />
      </div>
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

SubscribeUserCard.propTypes = {
  item: PropTypes.object.isRequired,
  isReport: PropTypes.bool,
  sendRequest: PropTypes.func,
  getUnsubscribe: PropTypes.func,
  getDashboard: PropTypes.func,
  usersData: PropTypes.any,
  getUser: PropTypes.func,
  userDataByUsername: PropTypes.any,
  isLoading: PropTypes.any,
  isFor: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscribeUserCard);
