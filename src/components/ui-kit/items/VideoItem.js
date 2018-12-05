import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import VideoPlayer from "../player/VideoPlayer";

class VideoItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      videoJsOptions : {
        autoplay: false,
        controls: true,
        muted: true,
        crossOrigin: true,
        sources: [{
          src: this.props.item,
          type: 'video/mp4'
        }]
      }
    }
    
  }
  render() {
    const { videoJsOptions } = this.state;
    return (
      <div className="feed_image">
        <div className={"embed-responsive embed-responsive-16by9"}>
          <div className={"img-responsive embed-responsive-item"}>
            {/* <ReactPlayer url={this.props.item} playing={false} controls/> */}
            <VideoPlayer muted { ...videoJsOptions } />
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
