import React, { Component } from "react";
import { connect } from "react-redux";
import MRightUserInput from "./MRightUserInput";
import MRightUserItem from "./MRightUserItem";
import MRightActiveChat from "./MRightActiveChat";
import PropTypes from "prop-types";
import { ConfirmationModal } from '../../modals/confirmation-model/';
import { deleteMessages } from "../../../../actions";
import * as websocket from "../../../../websocket";

class MRightContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      message: "",
      modalShow: false,
      modalHeader: 'Modal Header Content',
      modalBodyContent: 'Modal body Content',
      modalFooterContent: 'Modal footer content',
      header: true
    };
    this.messageListRef = null;
  }
  handleModalHide = () => {
    //handle model hide here
    this.setState({
      modalShow: false
    })
  }
  handleConfirmation = () => {
    const { user, me } = this.props;
    console.log('Me ', me);
    console.log('other ', user._id);
    //Hande API call
    //Send logged in and other user
    this.props.deleteMessages(me, user._id).then(() => {
      this.messageListRef.clearMessages();
    });

  }
  setMessageListRef = ref => {
    this.messageListRef = ref;
  };

  onDeleteHistoryClick = () => {
    this.setState({
      modalShow: true
    })
  };

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  onMessageSubmit = content => {
    const message = content ? content.trim() : "";
    const { user, me } = this.props;
    console.log("user %o and me %o", user, me);
    if (!message || !user || !user._id || !me) return;
    websocket.emit(this.props.me, this.props.user._id, message);
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <MRightUserItem
          item={user}
          onDeleteHistoryClick={this.onDeleteHistoryClick}
        />
        <MRightActiveChat
          user={user}
          setMessageListRef={this.setMessageListRef}
        />
        <MRightUserInput item={user} onMessageSubmit={this.onMessageSubmit} />
        <ConfirmationModal
          modalShow={this.state.modalShow}
          handleModalInfoMsgShow={this.state.modalBodyContent}
          handleModalHide={this.handleModalHide}
          handleModalConfirmation={this.handleConfirmation}
          data={'test'}

        />
      </div>
    );
  }
}

MRightContainer.propTypes = {
  user: PropTypes.any,
  deleteMessages: PropTypes.func.isRequired,
  me: PropTypes.any
};

const mapDispatchToProps = {
  deleteMessages
};
export default connect(
  null,
  mapDispatchToProps
)(MRightContainer);
