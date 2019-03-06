import React, { Component } from "react";
import PropTypes from "prop-types";
import CommunityBodyItem from "./CommunityBodyItem";
import { sendRequest, getUnsubscribe } from "../../../../actions";
import { connect } from "react-redux";
import { Translations } from "../../../../lib/translations";

class CommunityItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      item: this.props.user,
      subscriberId: this.props.user.subscriberId
    };
  }

  render() {
    const { item, subscriberId } = this.state;
    const requestLoading = this.props.usersData.isLoading;
    return (
      <CommunityBodyItem
        user={item}
        handleSubscribe={this.handleSubscribe}
        handleUnSubscribe={this.handleUnSubscribe}
        subscriberId={subscriberId}
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
          subscriberId: this.props.usersData.isRequestSendData._id
        });
      }
    });
  };

  handleUnSubscribe = e => {
    const subscriberId = e.target.id;
    this.props.getUnsubscribe(subscriberId).then(() => {
      if (this.props.usersData && this.props.usersData.isUnsubscribedData) {
        this.setState({
          subscriberId: ""
        });
      }
    });
  };
}

const mapStateToProps = state => ({
  usersData: state.usersData,
  userDataByUsername: state.userDataByUsername,
  usersList: state.dashboardData.users
});

const mapDispatchToProps = {
  sendRequest,
  getUnsubscribe
};

CommunityItem.propTypes = {
  sendRequest: PropTypes.func,
  getUnsubscribe: PropTypes.func,
  usersData: PropTypes.any,
  isLoading: PropTypes.any,
  user: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityItem);
