import React, { Component } from "react";
import * as images from "../../../../lib/constants/images";
import propTypes from "prop-types";

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-xs-12 no-padding">
        <div className="col-xs-12 no-padding share-wrapr">
          <div className="social-media-link">
            <span className="social-icon icon-whatsapp" />
            Whatsapp
          </div>
          <div className="social-media-link">
            <span className="social-icon icon-facebook" />
            Facebook
          </div>
          <div className="social-media-link">
            <span className="social-icon icon-twitter" />
            Twitter
          </div>
          <div className="social-media-link">
            <span className="social-icon icon-email" />
            E-mail
          </div>
          <div className="social-media-link">
            <span className="social-icon icon-copylink" />
            Copy link
          </div>
        </div>
      </div>
    );
  }
}

Share.propTypes = {
  handleModalInfoHide: propTypes.func.isRequired
};

export default Share;
