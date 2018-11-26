import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

class VideoItem extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="feed_image">
        <div className={"embed-responsive embed-responsive-16by9"}>
          <div className={"img-responsive embed-responsive-item"}>
            <ReactPlayer url={this.props.item} playing={false} controls/>
          </div>
        </div>
      </div>
    );
  }
}

VideoItem.propTypes = {
  item: PropTypes.string.isRequired
};

export default VideoItem;
