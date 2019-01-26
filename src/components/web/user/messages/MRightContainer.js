import React, { Component } from "react";
import MRightUserInput from './MRightUserInput';
import MRightUserItem from './MRightUserItem';
import MRightActiveChat from './MRightActiveChat';
import PropTypes from "prop-types";


class MRightContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            message : ''
        }
    }

    onDeleteHistoryClick = () => {
    };

    handleChange = e => {
        this.setState({ message: e.target.value });
    };

    onMessageSubmit = (content) => {
        if(!content || !this.props.user || !this.props.user.id || !this.props.me) return;
        this.props.socket.emit('communication-message-board-new-message', {
            recipientId: this.props.user.id,
            senderId: this.props.me,
            content
        });
    }

    

    render() {
        const { user } = this.props;
        return (
            <div>
                <MRightUserItem item={user} onDeleteHistoryClick={this.onDeleteHistoryClick} />
                <MRightActiveChat user={user}/>
                <MRightUserInput item={user} onMessageSubmit={this.onMessageSubmit} />
            </div>
        )
    }

}

MRightContainer.propTypes = {
    user: PropTypes.any,
    me: PropTypes.any
};

export default MRightContainer;
