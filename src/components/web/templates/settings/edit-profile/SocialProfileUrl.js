import React from "react";
import PropTypes from "prop-types";

const SocialProfileUrl = ({
  id,
  title,
  icon,
  publicUrl,
  isOwnerProfile,
  userName,
  isConnectInProgress,
  handleSocialConnect,
  handleSocialClear
}) => {
  return (
    <div>
      {title &&
        icon && (
          <div className="form-group margin-bottom-15 social-media">
            <div className="social-link">
              <span className={`fa ${icon}`} />
              <span className="social-text">{title}</span>
              {!publicUrl &&
                isOwnerProfile && (
                  <button
                    id={id}
                    type="button"
                    className="btn-blu"
                    disabled={isConnectInProgress}
                    onClick={handleSocialConnect}
                  >
                    Connect
                  </button>
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
};

SocialProfileUrl.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publicUrl: PropTypes.string,
  isConnectInProgress: PropTypes.bool,
  userName: PropTypes.string,
  icon: PropTypes.string.isRequired,
  handleSocialConnect: PropTypes.func,
  isOwnerProfile: PropTypes.bool,
  handleSocialClear: PropTypes.func
};

export default SocialProfileUrl;
