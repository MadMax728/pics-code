import React, { Component } from "react";
import MRightUserInput from './MRightUserInput';
import MRightUserItem from './MRightUserItem';
import MRightActiveChat from './MRightActiveChat';
import PropTypes from "prop-types";
import io from "socket.io-client";


class MRightContainer extends Component {
  
    messagesEnd = React.createRef();

    constructor(props, context) {
        super(props, context);
        this.state = {
            message : ''
        }
        this.listRef = React.createRef();
        this.socket = io(process.env.REACT_APP_AUTH_BASEURL);
        //this.socket = io("http://localhost:3146");
    }    


    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Are we adding new items to the list?
        // Capture the scroll position so we can adjust scroll later.
        if (prevProps.messages.length < this.props.messages.length) {
          const list = this.listRef.current;
          return list.scrollHeight - list.scrollTop;
        }
        return null;
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        // If we have a snapshot value, we've just added new items.
        // Adjust scroll so these new items don't push the old ones out of view.
        // (snapshot here is the value returned from getSnapshotBeforeUpdate)
        if (snapshot !== null && this.listRef) {
          const list = this.listRef.current;
          list.scrollTop = list.scrollHeight - snapshot;
        }
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
                <MRightActiveChat items={this.props.messages} listRef={this.listRef} user={this.props.user} me={this.props.me} handleMessageClick={this.handleMessageClick} />
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
  