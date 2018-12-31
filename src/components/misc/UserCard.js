import React, { Component } from "react";
import PropTypes from "prop-types";
import UserCardBody from "./body/UserCardBody";
import { Auth } from "../../auth";
import {
  sendRequest,
  getUnsubscribe,
  getDashboard,
  getUser
} from "../../actions";
import { connect } from "react-redux";

const storage = Auth.extractJwtFromStorage();
class UserCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      item: this.props.item,
      index: this.props.index
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  handleSubscribed = e => {
    const data = { username: e.target.id };
    this.props.getUser(data).then(() => {
      if (this.props.userDataByUsername.user.data) {
        // success
        const selectedUserList = this.props.userDataByUsername.user.data;
        if (!selectedUserList.isSubscribe) {
          const requestData = { followers: selectedUserList.id };
          this.props.sendRequest(requestData).then(() => {
            if (
              this.props.usersData.error &&
              this.props.usersData.error.status === 400
            ) {
              // Error
            } else if (this.props.usersData.isRequestSend) {
              // Success
              this.props.getDashboard("users");
            }
          });
        } else {
          const subscribedId = selectedUserList.subscribeId;
          this.props.getUnsubscribe(subscribedId).then(() => {
            if (
              this.props.usersData.error &&
              this.props.usersData.error.status === 400
            ) {
              // Error
            } else if (this.props.usersData.isUnsubscribed) {
              // Success
              this.props.getDashboard("users");
            }
          });
        }
      }
    });
  };

  render() {
    const { item, index } = this.state;
    const { isReport } = this.props;

    return (
      <UserCardBody
        user={item}
        index={index}
        handleSubscribed={this.handleSubscribed}
        isReport={isReport}
      />
    );
  }
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
  userDataByUsername: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCard);
