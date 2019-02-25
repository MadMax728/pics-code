import React, { Component } from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../player/VideoPlayer";
import LazyLoad from "react-lazyload";
import { Loader } from "../loading-indicator";

class VideoItem extends Component {
  render() {
    const { item, id, isLoading } = this.props;
    return (
      <div className="bg-black feed_image">
        <div className={"embed-responsive embed-responsive-16by9"}>
          <div className={"img-responsive embed-responsive-item"}>
            {isLoading ? (
              <Loader />
            ) : (
              <LazyLoad
                height={200}
                once
                offset={[-200, 0]}
                placeholder={<Loader />}
              >
                {item && <VideoPlayer id={id} item={item} />}
              </LazyLoad>
            )}
          </div>
        </div>
      </div>
    );
  }
}

VideoItem.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.string,
  isLoading: PropTypes.bool
};

export default VideoItem;
