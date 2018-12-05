import React from 'react';
import videojs from 'video.js'

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    // this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
    //   console.log('onPlayerReady', this)
    // });
    this.player = videojs(this.videoNode, this.props, () => { 
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
          <video muted ref={ node => this.videoNode = node } className="video-js"></video>
        </div>
      </div>
    )
  }
}
