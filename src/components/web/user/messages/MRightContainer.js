import React, { Component } from "react";
import MRightUserItem from './MRightUserItem';
import MRightActiveChat from './MRightActiveChat';
import MRightUserInput from './MRightUserInput';

class MRightContainer extends Component {
  
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeUser : {},
            currentUser : '',
            date: 'Today',
            messages : [],
        }
    }    
    
    onDeleteHistoryClick = (e) => {
        this.setState({ activeUser: e.currentTarget.dataset.id });
    };

    handleMessageClick = (e) => {
    };

    onMessageSubmit = (text) => {
        this.socket.emit('communication-message-board-join', {
            receiverId: 1,
            senderId: 2,
            text: text
        });
    }

    render() {
        const { messages, activeUser, currentUser, date } = this.state;
        return (
            <div>
                <MRightUserItem item={activeUser} onDeleteHistoryClick={this.onDeleteHistoryClick} />
                <MRightActiveChat items={messages} me={currentUser} date={date} handleMessageClick={this.handleMessageClick} />
                <MRightUserInput item={activeUser} onMessageSubmit={this.onMessageSubmit} />
            </div>
        )
    }

}
  
export default MRightContainer;
  