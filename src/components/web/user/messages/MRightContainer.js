import React, { Component } from "react";
import MRightUserItem from './MRightUserItem';
import MRightActiveChat from './MRightActiveChat';
import MRightUserInput from './MRightUserInput';
import PropTypes from "prop-types";

class MRightContainer extends Component {
  
    constructor(props, context) {
        super(props, context);
        this.state = {
            currentUser : '',
            messages : [],
        }
    }    
    
    onDeleteHistoryClick = (e) => {
    };

    handleMessageClick = (e) => {
    };

    onMessageSubmit = (text) => {
        this.socket.emit('communication-message-board-join', {
            receiverId: 1,
            senderId: 2,
            text
        });
    }

    render() {
        const { messages, currentUser, date } = this.state;
        return (
            <div>
                <MRightUserItem item={this.props.user} onDeleteHistoryClick={this.onDeleteHistoryClick} />
                <MRightActiveChat items={messages} user={this.props.user} me={currentUser} handleMessageClick={this.handleMessageClick} />
                <MRightUserInput item={this.props.user} onMessageSubmit={this.onMessageSubmit} />
            </div>
        )
    }

}
  
MRightContainer.propTypes = {
    user: PropTypes.any,
};

export default MRightContainer;
  