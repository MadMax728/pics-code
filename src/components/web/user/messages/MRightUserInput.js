import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../../lib/constants/images";

class MRightUserInput extends Component {
  
    constructor(props, context) {
        super(props, context);
        this.state = {
            text : ''
        }
    }    

    handleChange=(e)=>{
        this.setState({text :e.target.value})
    }
    
    onEnterPress = (e) => {
        e.preventDefault();
        const { text } = this.state;
        if(e.keyCode === 13 && e.shiftKey === false && this.props.onMessageSubmit && text) {
          this.props.onMessageSubmit(text)
        }
    }

    render() {
        const { item } = this.props;
        return (
            <div className="write-chat">
                {
                   item && item.id && (
                    <textarea placeholder="Write a message… " onChange={this.handleChange} value={this.state.message} onKeyUp={this.onEnterPress} onKeyDown={this.onEnterPress} />
                   )
                }
                {
                   item && item.id && (
                    <img src={images.emoji} alt={"emoji1"} />
                   )
                }
            </div>
        )
    }

}
  
MRightUserInput.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string,
        userName: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.string,
    }),
    onMessageSubmit: PropTypes.func.isRequired
};

MRightUserInput.defaultProps = {
    item: {}
};

export default MRightUserInput;
  