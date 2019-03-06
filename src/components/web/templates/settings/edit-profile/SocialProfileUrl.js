import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "../../../../ui-kit";
import { Translations } from "../../../../../lib/translations";

class SocialProfileUrl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socialURLName: "testurl",
      isReadonly: true,
      form: {}
    };
  }

  render() {
    const {
      id,
      title,
      icon,
      publicUrl,
      isOwnerProfile,
      userName,
      isConnectInProgress,
      handleSocialConnect,
      handleSocialClear,
      authUrl,
      handleChangeField
    } = this.props;
    console.log(authUrl);
    const { socialURLName, isReadonly } = this.state;
    return (
      <div>
        {title && icon && (
          <div className="form-group margin-bottom-15 social-media">
            <div className="social-link">
              <span className={`fa ${icon}`} />
              <span className="social-text">{title}</span>
              {!publicUrl && isOwnerProfile && (
                <div className="social-input-field">
                  <Input
                    type="text"
                    className="form-control"
                    id={`social_url_${title}`}
                    name={`social_url_${title}`}
                    onChange={handleChangeField}
                    value={socialURLName ? socialURLName : ""}
                    readOnly={isReadonly ? "readonly" : ""}
                  />
                  <Button
                    text={
                      <i className="fa fa-edit" id={`social_url_${title}`} />
                    }
                    id={`social_url_${title}`}
                    onClick={this.handleEditUrl}
                  />
                </div>
              )}
              {!publicUrl && isOwnerProfile && (
                <Button
                  id={id}
                  type="button"
                  className="btn-blu"
                  disabled={isConnectInProgress}
                  onClick={handleSocialConnect}
                  text={Translations.social.connect}
                />
              )}
              {publicUrl && (
                <div>
                  <a href={publicUrl} target="_blank" rel="noopener noreferrer">
                    {userName ? userName : "Profile"}
                  </a>
                  {isOwnerProfile && (
                    <span
                      id={id}
                      aria-hidden="true"
                      onClick={handleSocialClear}
                    >
                      &nbsp; <i className="fa fa-times" />
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  handleEditUrl = e => {
    this.setState({ isReadonly: false });
  };
}

SocialProfileUrl.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publicUrl: PropTypes.string,
  isConnectInProgress: PropTypes.bool,
  userName: PropTypes.string,
  icon: PropTypes.string.isRequired,
  handleSocialConnect: PropTypes.func,
  isOwnerProfile: PropTypes.bool,
  handleSocialClear: PropTypes.func,
  authUrl: PropTypes.any,
  handleChangeField: PropTypes.func
};

export default SocialProfileUrl;
