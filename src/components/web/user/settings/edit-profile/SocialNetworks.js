import React, { Component } from "react";
import propTypes from "prop-types";
import * as _ from "lodash";
import SocialProfileUrl from "./SocialProfileUrl";

const socialNetworksAll = [
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
      isConnectInProgress: false,
      socialNetworks: socialNetworksAll
    };
  }

  // Launches the popup by making a request to the server and then
  // passes along the socket id so it can be used to send back user
  // data to the appropriate socket on the connected client.
  openPopup = (url, title, w, h) => {
    const dualScreenLeft =
      window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop =
      window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : window.screen.width;
    const height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : window.screen.height;

    const left = width / 2 - w / 2 + dualScreenLeft;
    const top = height / 2 - h / 2 + dualScreenTop;
    const newWindow = window.open(
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
      const pollTimer = window.setInterval(() => {
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
    // if connection is in progress
    if (this.state.isConnectInProgress) {
      return;
    }

    const provider = e.target.id;
    const baseUrl = process.env.REACT_APP_API_BASEURL;
    let authUrl = "";
    switch (provider) {
      case "facebook":
        authUrl = `${baseUrl}auth/facebook/connect`;
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
  handleSocialClear = e => {
    const provider = e.currentTarget.id;
    const { socialNetworks } = this.state;
    const socialNetwork = _.find(socialNetworks, {
      socialNetworkType: provider
    });
    // Find item index using _.findIndex
    const index = _.findIndex(socialNetworks, { socialNetworkType: provider });

    if (socialNetwork && socialNetwork.publicUrl) {
      socialNetwork.publicUrl = "";
      socialNetwork.userName = "";
    }

    // Replace item at index using native splice
    socialNetworks.splice(index, 1, socialNetwork);

    this.setState({ socialNetworks });
  };

  render() {
    const { socialNetworks } = this.state;
    const { isOwnerProfile } = this.props;
    return (
      <div>
        <div className="form-subtitle">Social Network URL</div>
        <div className="personal-interests-wrapper col-xs-12 no-padding margin-b-25">
          {socialNetworks.map(socialNetwork => {
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
                isOwnerProfile={isOwnerProfile}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

// Specifies the default values for props:
SocialNetworks.defaultProps = {
  isOwnerProfile: false
};

SocialNetworks.propTypes = {
  userId: propTypes.string.isRequired,
  isOwnerProfile: propTypes.bool
};

export default SocialNetworks;
