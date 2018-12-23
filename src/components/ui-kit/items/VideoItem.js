import React, { Component } from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../player/VideoPlayer";
import LazyLoad from 'react-lazyload';

class VideoItem extends Component {
  render() {
    const  { item, id } = this.props;
    return (
      <div className="feed_image">
        <div className={"embed-responsive embed-responsive-16by9"}>
          <div className={"img-responsive embed-responsive-item"}>
            <LazyLoad height={200} once={true} offset={100}>
              <VideoPlayer id={id} item={item} />
            </LazyLoad>
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
