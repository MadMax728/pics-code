import React, { Component } from "react";
import MRightUserInput from './MRightUserInput';
import MRightUserItem from './MRightUserItem';
import MRightActiveChat from './MRightActiveChat';
import PropTypes from "prop-types";
import io from "socket.io-client";


class MRightContainer extends Component {
  
    constructor(props, context) {
        super(props, context);
        this.state = {
            message : ''
        }
        this.socket = io(process.env.REACT_APP_API_BASEURL);
    }    

    onDeleteHistoryClick = (e) => {
    };

    handleMessageClick = (e) => {
    };
    
    handleChange = e => {
        this.setState({ message: e.target.value });
    };

    onMessageSubmit = (content) => {
        this.socket.emit('communication-message-board-new-message', {
            recipientId: this.props.user.id,
            senderId: this.state.currentUser,
            content: content
        });
    }

    render() {
        return (
            <div>
                <MRightUserItem item={this.props.user} onDeleteHistoryClick={this.onDeleteHistoryClick} />
                <MRightActiveChat items={this.props.messages} user={this.props.user} me={this.props.me} handleMessageClick={this.handleMessageClick} />
                <MRightUserInput item={this.props.user} onMessageSubmit={this.onMessageSubmit} />
            </div>
        )
    }

}
  
MRightContainer.propTypes = {
    user: PropTypes.any,
    me: PropTypes.any,
    messages: PropTypes.any,
};

export default MRightContainer;
  