import React, { Component } from "react";
import PropTypes from "prop-types";
import MLeftContainer from './MLeftContainer';
import MRightContainer from './MRightContainer';

class Messages extends Component {
  
    constructor(props, context) {
        super(props, context);
        this.state = {
            user : {},
        }
    }    

    selectUser = (user) => {
        this.setState({ user });
    }

    render() {
        const { user } = this.state;
        return (
            <div className="col-xs-12 no-padding">
                <div className="messages-left">
                    <MLeftContainer selectUser={this.selectUser}/>
                </div>
                <div className="messages-right">
                     <MRightContainer user={user} />
                </div>
            </div>  
        )
    }

}
  
export default Messages;
  