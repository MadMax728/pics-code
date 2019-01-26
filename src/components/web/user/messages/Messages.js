import React, { Component } from "react";
import { Auth } from "../../../../auth";
import MLeftContainer from './MLeftContainer';
import MRightContainer from './MRightContainer';
import * as websocket from '../../../../websocket';

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
    }    

    selectUser = (newUser) => {
        const { user } = this.state;
        if(!newUser || !newUser.id || ( user && user.id === newUser.id)) return;
        this.setState({ user : newUser,  messages : []});
        websocket.join(newUser.id, this.state.me);
    }

    render() {
        const { user, me } = this.state;
        return (
            <div className="message-home">
                <div className="messages-left">
                    <MLeftContainer selectUser={this.selectUser} me={me}/>
                </div>
                <div className="messages-right">
                    <MRightContainer user={user} me={me}/>
                </div>
            </div>
        )
    }

}
  
export default Messages;
  