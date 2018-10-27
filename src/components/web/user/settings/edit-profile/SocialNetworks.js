import React, { Component } from "react";
import propTypes from "prop-types";
import SocialProfileUrl from "./SocialProfileUrl";

const socialNetworks = [
  {
    socialNetworkType: "facebook",
    title: "Facebook",
    icon: "fa-facebook",
    publicUrl: "https://facebook.com/santosh.shinde.735944",
    userName: "santosh.shinde"
  },
  {
    socialNetworkType: "instagram",
    title: "Instagram",
    icon: "fa-instagram",
    userName: "santosh.shinde"
  },
  {
    socialNetworkType: "twitter",
    title: "Twitter",
    icon: "fa-twitter",
    userName: "santosh.shinde"
  },
  {
    socialNetworkType: "youtube",
    title: "Youtube",
    icon: "fa-youtube",
    userName: "santosh.shinde"
  }
];

class SocialNetworks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnectInProgress: false
    };
  }

  // Launches the popup by making a request to the server and then
  // passes along the socket id so it can be used to send back user
  // data to the appropriate socket on the connected client.
  openPopup = (url, title, w, h) => {
    let dualScreenLeft =
      window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    let dualScreenTop =
      window.screenTop !== undefined ? window.screenTop : window.screenY;

    let width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : window.screen.width;
    let height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : window.screen.height;

    let left = width / 2 - w / 2 + dualScreenLeft;
    let top = height / 2 - h / 2 + dualScreenTop;
    let newWindow = window.open(
      url,
      title,
      "scrollbars=yes, width=" +
        w +
        ", height=" +
        h +
        ", top=" +
        top +
        ", left=" +
        left
    );

    // Puts focus on the newWindow
    if (window.focus) {
      newWindow.focus();
    }

    if (this.socialPopoutClosed) {
      let pollTimer = window.setInterval(() => {
        if (newWindow.closed !== false) {
          // !== is required for compatibility with Opera
          window.clearInterval(pollTimer);
          this.socialPopoutClosed();
        }
      }, 200);
    }
  };

  /**
   * social connect to calling popup
   */
  handleSocialConnect = e => {
    const provider = e.target.id;
    const baseUrl = process.env.REACT_APP_API_BASEURL;
    let authUrl = "";
    switch (provider) {
      case "twitter":
        authUrl = `${baseUrl}auth/twitter/connect`;
        break;
      case "twitter":
        authUrl = `${baseUrl}auth/twitter/connect`;
        break;
      case "instagram":
        authUrl = `${baseUrl}auth/instagram/connect`;
        break;
      case "youtube":
        authUrl = `${baseUrl}auth/youtube/connect`;
        break;
    }
    this.setState({ isConnectInProgress: true }, () => {
      // open popup based on auth url
      console.log(this.state.isConnectInProgress);
      if (authUrl) this.openPopup(authUrl, provider, 500, 500);
    });
  };

  /**
   * on socail popup closed
   */
  socialPopoutClosed = () => {
    this.setState({ isConnectInProgress: false });
  };

  /**
   * This method is called when we clear social network
   */
  handleSocialClear = () => {};

  render() {
    return (
      <div>
        <div className="form-subtitle">Social Network URL</div>
        <div className="personal-interests-wrapper col-xs-12 no-padding margin-b-25">
          {socialNetworks.map((socialNetwork, index) => {
            return (
              <SocialProfileUrl
                key={socialNetwork.socialNetworkType}
                id={socialNetwork.socialNetworkType}
                title={socialNetwork.title}
                icon={socialNetwork.icon}
                publicUrl={socialNetwork.publicUrl}
                isConnectInProgress={this.state.isConnectInProgress}
                handleSocialConnect={this.handleSocialConnect}
                handleSocialClear={this.handleSocialClear}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

SocialNetworks.propTypes = {
  userId: propTypes.string.isRequired
};

export default SocialNetworks;
