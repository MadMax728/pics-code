import React from "react";
import propTypes from "prop-types";

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
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  publicUrl: propTypes.string,
  isConnectInProgress: propTypes.bool,
  userName: propTypes.string,
  icon: propTypes.string.isRequired,
  handleSocialConnect: propTypes.func,
  isOwnerProfile: propTypes.bool,
  handleSocialClear: propTypes.func
};

export default SocialProfileUrl;
