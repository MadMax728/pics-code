import React, { Component } from "react";
import PropTypes from "prop-types";
import videojs from 'video.js'
import VisSenseFactory from 'vissense'
import * as Configs from '../../../default';

class VideoPlayer extends Component {

  mutecontrol = () => {
    const config = Configs.getVideoConfig() ? JSON.parse(Configs.getVideoConfig()) :{};
    const muted = config.muted ? true : false;
    return muted;
  }

  componentDidMount() {
    const videoJsOptions = {
      autoplay: false,
      controls: true,
      muted: this.mutecontrol(),
      crossOrigin: true,
      sources: [{
        src: this.props.item,
        type: 'video/mp4'
      }]
    };

    this.player = videojs(this.videoNode, videoJsOptions, () => { 
      // `this` will point to the current `PlayVideoComponent` instance
      this.videoEvents();
      this.checkVideoProgress();
    })

  }

  videoEvents = () => {
    if(!this.player || !this.videoNode) return;
    this.player.on("volumechange", () => {
      if(this.mutecontrol() !== this.player.muted()) {
        Configs.saveVideoConfigToStorage(this.player.muted())
      }
    });
  }

  /**
   * checkVideoProgress
   */
  checkVideoProgress = () => {
    if(!this.player || !this.videoNode) return;
    const VisSense = VisSenseFactory(window);
    VisSense(this.videoNode).monitor({
      fullyvisible: () => { 
        if(this.videoNode && this.player) {
          this.player.muted(this.mutecontrol())
          this.player.play()
        }
      }, 
      percentagechange: () => {
        if(this.videoNode && VisSense(this.videoNode).percentage() < 1 && this.player && !this.player.paused()) {
          this.player.pause()
        }
      },
      hidden: () => { 
        if(this.videoNode &&  this.player && !this.player.paused()) {
          this.player.pause()
        }
      }
    }).start();
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
    const { id } = this.props;
    return (
      <div className="htWid100">    
        <div data-vjs-player className="htWid100">
          <video id={id} muted ref={ node => this.videoNode = node } className="video-js htWid100"></video>
        </div>
      </div>
    )
  }
}

VideoPlayer.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired
};


export default VideoPlayer;
