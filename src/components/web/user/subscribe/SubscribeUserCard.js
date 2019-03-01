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
      isSubscribeStatus: this.props.isFor,
      isView: true
    };
  }

  render() {
    const { item, isSubscribeStatus, subscribeId, isView } = this.state;
    const { isLoading, isFor, username } = this.props;
    return (
      <div>
        <SubscribeUserCardBody
          user={item}
          handleSubscribed={this.handleSubscribed}
          isSubscribeStatus={isSubscribeStatus}
          subscribeId={subscribeId}
          isLoading={isLoading}
          isFor={isFor}
          isView={isView}
        />
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  handleSubscribed = e => {
    const { isFor } = this.props;
    const { item } = this.state;
    if (isFor === "Subscribers") {
      const requestData = { followers: e.target.id };
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
          const reponseId = this.props.usersData.isRequestSendData._id;
          if (reponseId === item._id) {
            this.setState({
              isView: false
            });
          }
        }
      });
    } else {
      this.props.getUnsubscribe(e.target.id).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          // Error
        } else if (
          this.props.usersData &&
          this.props.usersData.isUnsubscribedData
        ) {
          const reponseId = this.props.usersData.isUnsubscribedData._id;
          // Success
          if (reponseId === item._id) {
            this.setState({
              isView: false
            });
            const data = { username: this.props.username };
            this.props.getUser(data);
          }
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
  isFor: PropTypes.any,
  username: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscribeUserCard);
