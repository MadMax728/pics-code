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
        this.socket = io(process.env.REACT_APP_AUTH_BASEURL);
        //this.socket = io("http://localhost:3146");
    }    

    onDeleteHistoryClick = () => {
    };

    handleMessageClick = () => {
    };
    
    handleChange = e => {
        this.setState({ message: e.target.value });
    };

    onMessageSubmit = (content) => {
        if(!content || !this.props.user || !this.props.user.id || !this.props.me) return;
        this.socket.emit('communication-message-board-new-message', {
            recipientId: this.props.user.id,
            senderId: this.props.me,
            content
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
  