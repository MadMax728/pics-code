import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translations } from "../../../../lib/translations";
import MessagesLazyList from './MessagesLazyList';

class MRightActiveChat extends Component { 
    
    constructor(){
        super();
        this.trackScrolling = this.trackScrolling.bind(this);
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById("header-chat-"+this.props.user.id);
        // console.log(wrappedElement.scrollTop ,wrappedElement.scrollLeft);
        if(wrappedElement)
        console.log(wrappedElement.scrollTop ,wrappedElement.scrollLeft);
        if (wrappedElement && (wrappedElement.scrollTop === wrappedElement.scrollLeft)) {
            console.log('header bottom reached');
        }
    };

    render() {
        const { socket, user } = this.props;
        return (
            <div onScroll={this.trackScrolling} className={"active-chat"} id={"header-chat-"+user.id}>
            {
                user && user.id ? (
                    <MessagesLazyList user={user} socket={socket} />
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
    socket: PropTypes.any
};
  
export default MRightActiveChat;
  