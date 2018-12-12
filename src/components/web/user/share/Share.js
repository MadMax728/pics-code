import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as routes from "../../../../lib/constants/routes";

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleModalInfoHide = () => {
    this.props.handleModalInfoHide();
  }

  render() {
    return (
      <div className="col-xs-12 no-padding">
        <div className="col-xs-12 no-padding share-wrapr">
          <div className="social-media-link">
            <Link to={routes.SETTINGS_EDIT_PROFILE_ROUTE}>
             <span className="fa fa-facebook"></span>
            </Link>
            <span className="social-link-title">Facebook</span>
          </div>
          <div className="social-media-link">
            <Link to={routes.SETTINGS_EDIT_PROFILE_ROUTE}>
             <span className="fa fa-instagram"></span>
            </Link>
            <span className="social-link-title">Instagram</span>
          </div>
          <div className="social-media-link">
            <Link to={routes.SETTINGS_EDIT_PROFILE_ROUTE}>
             <span className="fa fa-youtube"></span>
            </Link>
            <span className="social-link-title">YouTube</span>
          </div>
          <div className="social-media-link">
            <Link to={routes.SETTINGS_EDIT_PROFILE_ROUTE}>
             <span className="fa fa-twitter"></span>
            </Link>
            <span className="social-link-title">Twitter</span>
          </div>
          <div className="social-media-link">
            <Link to={routes.SETTINGS_EDIT_PROFILE_ROUTE}>
             <span className="fa fa-whatsapp"></span>
            </Link>
            <span className="social-link-title">Whatsapp</span>
          </div>
          <div className="social-media-link">
            <Link to={routes.SETTINGS_EDIT_PROFILE_ROUTE}>
             <span className="fa fa-copy"></span>
            </Link>
            <span className="social-link-title">Copy link</span>
          </div>
        </div>
      </div>
    );
  }
}

Share.propTypes = {
  handleModalInfoHide: PropTypes.func.isRequired
};

export default Share;
