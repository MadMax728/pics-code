import React, { Component } from "react";
import PropTypes from "prop-types";
import videojs from 'video.js'

class VideoPlayer extends Component {

  constructor(props, context) {
    super(props, context);
    this.videoNode = React.createRef();
  }

  componentDidMount() {
    // instantiate Video.js
    // this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
    //   console.log('onPlayerReady', this)
    // });
    const videoJsOptions = {
      autoplay: false,
      controls: true,
      muted: true,
      crossOrigin: true,
      sources: [{
        src: this.props.item,
        type: 'video/mp4'
      }]
    }
    this.player = videojs(this.videoNode, videoJsOptions, () => { 
      // `this` will point to the current `PlayVideoComponent` instance
      console.log('onPlayerReady', this)
    })
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>    
        <div data-vjs-player>
          <video muted ref={this.videoNode} className="video-js"></video>
        </div>
      </div>
    )
  }
}

VideoPlayer.propTypes = {
  item: PropTypes.string.isRequired
};


export default VideoPlayer;
