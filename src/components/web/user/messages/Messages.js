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
            me : userInfo.id,
            messages : []
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

    componentWillMount() {
        this.socket.on('communication-message-board-new-message-response', (data) => {
            const { me, user } = this.state;
            if(user && (me === data.recipientId || me === data.senderId) && (user.id === data.recipientId || user.id === data.senderId)) {
                this.setState({
                    messages: [...this.state.messages, data]
                }) 
            }
        });
    }

    render() {
        const { user, messages, me } = this.state;
        return (
            <div className="col-xs-12 no-padding">
                <div className="messages-left">
                    <MLeftContainer selectUser={this.selectUser} me={me}/>
                </div>
                <div className="messages-right">
                     <MRightContainer user={user} me={me} messages={messages}/>
                </div>
            </div>  
        )
    }

}
  
export default Messages;
  