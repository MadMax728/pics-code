import React, { Component } from "react";
import MRightUserInput from './MRightUserInput';
import MRightUserItem from './MRightUserItem';
import MRightActiveChat from './MRightActiveChat';
import PropTypes from "prop-types";
import * as websocket from '../../../../websocket';


class MRightContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            message: ''
        }
    }

    onDeleteHistoryClick = () => {
    };

    handleChange = e => {
        this.setState({ message: e.target.value });
    };

    onMessageSubmit = (content) => {
        const message = content ? content.trim() : '';
        const { user, me } = this.props;
        console.log('user %o and me %o', user, me);
        if (!message || !user || !user._id || !me) return;
        websocket.emit(this.props.me, this.props.user._id, message)
    }



    render() {
        const { user } = this.props;
        return (
            <div>
                <MRightUserItem item={user} onDeleteHistoryClick={this.onDeleteHistoryClick} />
                <MRightActiveChat user={user} />
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
