import React, { Component } from "react";
import PropTypes from "prop-types";
import * as images from "../../lib/constants/images";
import { connect } from "react-redux";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

class EmojiCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isEmoji: this.props.isEmoji
    };
  }

  /* Emoji */
  addEmoji = emoji => {
    this.props.addCommentEmoji(emoji.native);
  };

  onEmojiOpen = () => {
    this.setState(prevState => ({
      isEmoji: !prevState.isEmoji
    }));
  };

  render() {
    const { isEmoji } = this.state;
    return (
      <div>
        <div className="emoji_wrapper col-sm-2 col-xs-2 pull-right text-right">
          <img
            role="presentation"
            className="pull-right"
            src={images.emoji}
            alt={"emoji1"}
            onKeyPress={this.onEmojiOpen}
            onClick={this.onEmojiOpen}
          />
          {isEmoji && (
            <Picker
              onSelect={this.addEmoji}
              style={{
                position: "absolute",
                bottom: "135px",
                right: "60px"
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comment: state.commentData.comment,
  isLoading: state.commentData.isLoading
});

const mapDispatchToProps = {};

EmojiCard.propTypes = {
  isEmoji: PropTypes.any,
  addCommentEmoji: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmojiCard);
