import { connect } from "react-redux";
import React, { Component } from "react";
import PropTypes from "prop-types";
import * as _ from "lodash";
import {
  getSocialNetwork,
  disconnectNetwork
} from "../../../../../actions/user";
import SocialProfileUrl from "./SocialProfileUrl";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

// const socialNetworksAll = [
//   {
//     socialNetworkType: "facebook",
//     title: "Facebook",
//     icon: "fa-facebook",
//     publicUrl: "https://facebook.com/santosh.shinde.735944",
//     userName: "santosh.shinde"
//   },
//   {
//     socialNetworkType: "instagram",
//     title: "Instagram",
//     icon: "fa-instagram",
//     userName: "santosh.shinde"
//   },
//   {
//     socialNetworkType: "twitter",
//     title: "Twitter",
//     icon: "fa-twitter",
//     userName: "santosh.shinde"
//   },
//   {
//     socialNetworkType: "youtube",
//     title: "Youtube",
//     icon: "fa-youtube",
//     userName: "santosh.shinde"
//   }
// ];

class SocialNetworks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnectInProgress: false,
      socialNetworks: []
    };
  }

  componentDidMount = () => {
    this.props.getSocialNetwork();
    window.scrollTo(0, 0);
  };

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
      default:
        authUrl = "";
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
    confirmAlert({
      message: "Do you want to disconnect?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.disconnect(provider)
        },
        {
          label: "No"
        }
      ]
    });
  };

  disconnect(provider) {
    // const provider = e.currentTarget.id;
    const { userData } = this.props;
    const socialNetworks = userData.socialNetworks;
    const socialNetwork = _.find(socialNetworks, {
      socialNetworkType: provider
    });
    if (socialNetwork && socialNetwork.publicUrl) {
      this.props.disconnectNetwork(provider).then(() => {
        this.props.getSocialNetwork();
      });
    }
  }

  render() {
    const { isOwnerProfile, userData } = this.props;
    return (
      <div>
        {userData &&
          !userData.error &&
          !userData.isLoading &&
          userData.socialNetworks &&
          userData.socialNetworks.length > 0 && (
            <div className="social-link-wrapr col-xs-12 no-padding">
              <div className="form-subtitle">Social Network URL</div>
              <div className="personal-interests-wrapper col-xs-12 no-padding margin-b-25">
                {userData.socialNetworks.map(socialNetwork => {
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
          )}
      </div>
    );
  }
}

// Specifies the default values for props:
SocialNetworks.defaultProps = {
  isOwnerProfile: false
};

const mapStateToProps = state => ({
  userData: state.userData
});

const mapDispatchToProps = {
  getSocialNetwork,
  disconnectNetwork
};

SocialNetworks.propTypes = {
  getSocialNetwork: PropTypes.func.isRequired,
  disconnectNetwork: PropTypes.func,
  userData: PropTypes.object,
  isOwnerProfile: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialNetworks);
