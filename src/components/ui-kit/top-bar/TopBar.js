import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";

const TopBar = ({ items }) => {
  return (
    <div>
      <div className="user_info">
        <div className="user-image bg-white no-padding">
          <img src={images.campaign1} width="100%" alt="profile" />
        </div>
        <div className="user-details no-padding-right padding-l-10">
          <div className="bg-white padding-25 user_details">
            <div className="user_name">{items.username}</div>

            {items.private && (
              <img src={images.tick} alt="tick" className="tick" />
            )}
            {items.private && (
              <span className="profile-type">
                {Translations.top_bar.private_profile}
              </span>
            )}

            {items.settings && (
              <div className="settings">
                <Link to={routes.SETTINGS_EDIT_PROFILE_ROUTE}>
                  <img src={images.share} alt="share" />
                </Link>
                <Link to={routes.SETTINGS_EDIT_PROFILE_ROUTE}>
                  <img src={images.settings} alt="settings" />
                </Link>
              </div>
            )}

            {items.more && (
              <div className="settings">
                <img src={images.more} alt="more" />
              </div>
            )}

            <div className="clearfix" />
            {items.slots.map(slot => (
              <div className={slot.className} key={slot.name}>
                <span className="size-20">{slot.val} </span>
                <span>{slot.name}</span>
                <div className="clearfix" />
                <button
                  className={slot.btnActiveClassName}
                  onClick={slot.handeleEvent}
                >
                  {slot.btnText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

TopBar.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string,
    private: PropTypes.bool,
    more: PropTypes.bool,
    settings: PropTypes.bool,
    slots: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        val: PropTypes.string,
        className: PropTypes.string,
        btnActiveClassName: PropTypes.string,
        btnText: PropTypes.string,
        handeleEvent: PropTypes.func
      })
    )
  })
};

export default TopBar;
