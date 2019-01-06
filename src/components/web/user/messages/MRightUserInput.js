import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../../lib/constants/images";
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

class MRightUserInput extends Component {
  
    constructor(props, context) {
        super(props, context);
        this.state = {
            message : '',
            isEmoji: false
        }
    }    

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ message: e.target.value });
    };

    addEmoji = (emoji) => {
        const { message } = this.state;
        const newMessage = message + emoji.native;
        this.setState({message: newMessage});
        this.setState({ isEmoji: false });
    };

    onEmojiOpen = () => {
        this.setState(prevState => ({
            isEmoji: !prevState.isEmoji
        }))
    }

    onEnterPress = (e) => {
        const keycode = (e.keyCode ? e.keyCode : e.which);
        if(keycode === 13) {
            e.preventDefault();
            const { message } = this.state;
            this.props.onMessageSubmit(message);
            this.setState({ message: '' });
        }
    }

    render() {
        const { item } = this.props;
        const { isEmoji } = this.state;
        return (
            <div className="write-chat">
                {
                    item && item.id && (
                    <div>
                        <textarea type="text" placeholder="Write a message… " 
                            onChange={this.handleChange}
                            onKeyPress={this.onEnterPress} 
                            value={this.state.message} />
                            <img role="button" src={images.emoji} alt={"emoji1"} onClick={this.onEmojiOpen} />
                    </div>
                    )
                }
                {
                    isEmoji && (
                        <Picker onSelect={this.addEmoji} style={{ position: 'absolute', bottom: '135px', right: '60px' }} />
                    )
                }
            </div>
        )
    }

}
  
MRightUserInput.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string,
        username: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.string,
    }),
    onMessageSubmit: PropTypes.func.isRequired
};

MRightUserInput.defaultProps = {
    item: {}
};

export default MRightUserInput;
  