import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../../lib/translations";
import MessagesLazyList from './MessagesLazyList';

class MRightActiveChat extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user !== this.props.user) {
            this.setState({ count: 0 })
        }
    }


    trackScrolling = () => {
        const wrappedElement = document.getElementById("header-chat-" + this.props.user.id);
        if (wrappedElement && (wrappedElement.scrollTop === wrappedElement.scrollLeft)) {
            this.setState({ count: this.state.count + 1 })
        }
    };

    render() {
        const { user } = this.props;
        const { count } = this.state;
        return (
            <div onScroll={this.trackScrolling} className={"active-chat"} id={"header-chat-" + user.id}>
                {
                    user && user._id ? (
                        <MessagesLazyList user={user} count={count} setMessageListRef={this.props.setMessageListRef} />
                    ) : (
                            <div className="full-width text-center">
                                <h6>{Translations.messages_modal.ready}</h6>
                            </div>
                        )
                }
            </div>
        )
    }
}

MRightActiveChat.propTypes = {
    user: PropTypes.any,
    setMessageListRef: PropTypes.func
};

export default MRightActiveChat;
