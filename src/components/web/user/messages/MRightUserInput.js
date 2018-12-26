import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../../lib/constants/images";

class MRightUserInput extends Component {
  
    constructor(props, context) {
        super(props, context);
        this.state = {
            message : ''
        }
    }    

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ message: e.target.value });
    };

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
        return (
            <div className="write-chat">
                {
                    item && item.id && (
                    <div>
                        <textarea type="text" placeholder="Write a message… " 
                            onChange={this.handleChange}
                            onKeyPress={this.onEnterPress} 
                            value={this.state.message} />
                            <img src={images.emoji} alt={"emoji1"} />
                    </div>
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
  