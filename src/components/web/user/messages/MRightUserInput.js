import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../../../lib/constants/images";

class MRightUserInput extends Component {
  
    constructor(props, context) {
        super(props, context);
        this.state = {
            message : 'abc'
        }
    }    

    handleChange = (e) => {
        e.preventDefault();
        const { message } = this.state;
        this.setState({ message: e.target.value });
    };

    onSubmit = (e) => {
        const { message } = this.state;
        this.props.onMessageSubmit(message);
        this.setState({ message: '' });
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
                            value={this.state.message} />
                            <button className="msg_send_btn" type="button" onClick={this.onSubmit}>
                                <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                            </button>
                             {/* <img src={images.emoji} alt={"emoji1"} /> */}
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
  