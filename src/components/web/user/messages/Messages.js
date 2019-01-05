import React, { Component } from "react";
import io from "socket.io-client";
import { Auth } from "../../../../auth";
import MLeftContainer from './MLeftContainer';
import MRightContainer from './MRightContainer';

class Messages extends Component {
  
    constructor(props, context) {
        super(props, context);
        // get  user from local storage 
        const storage = Auth.extractJwtFromStorage();
        // parse the user info
        const userInfo = JSON.parse(storage.userInfo) || {};
        this.state = {
            user : {},
            me : userInfo.id
        }
        this.socket = io(process.env.REACT_APP_AUTH_BASEURL);
    }    

    selectUser = (user) => {
        if(!user || !user.id) return;
        this.setState({ user,  messages : []});
        this.socket.emit('communication-message-board-join', {
            recipientId: user.id,
            senderId: this.state.me
        });
    }

    render() {
        const { user, me } = this.state;
        return (
            <div className="message-home">
                <div className="messages-left">
                    <MLeftContainer selectUser={this.selectUser} me={me}/>
                </div>
                <div className="messages-right">
                    <MRightContainer user={user} me={me} socket={this.socket} />
                </div>
            </div>
        )
    }

}
  
export default Messages;
  