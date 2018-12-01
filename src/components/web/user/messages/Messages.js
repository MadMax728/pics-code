import React, { Component } from "react";
import PropTypes from "prop-types";
import MLeftContainer from './MLeftContainer';
import MRightContainer from './MRightContainer';

class Messages extends Component {
  
    constructor(props, context) {
        super(props, context);
    }    

    render() {
        return (
            <div className="col-xs-12 no-padding">
                <div className="messages-left">
                    <MLeftContainer />
                </div>
                <div className="messages-right">
                     <MRightContainer />
                </div>
            </div>  
        )
    }

}

Messages.propTypes = {
    isDescription: PropTypes.bool,
};
  
export default Messages;
  