import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import VideoPlayer from "../player/VideoPlayer";

class VideoItem extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const  { item, id } = this.props;
    return (
      <div className="feed_image">
        <div className={"embed-responsive embed-responsive-16by9"}>
          <div className={"img-responsive embed-responsive-item"}>
            {/* <ReactPlayer url={this.props.item} playing={false} controls/> */}
            <VideoPlayer id={id} item={item} />
          </div>
        </div>
      </div>
    );
  }
}

VideoItem.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired
};

export default VideoItem;
