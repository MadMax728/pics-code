import React from "react";
import PropTypes from "prop-types";
import ReportCard from "../ReportCard";
import LazyLoad from "react-lazyload";
import { Loader } from "../../ui-kit";
import { Translations } from "../../../lib/translations";

const UserCardBody = ({ user, index, handleSubscribed, isReport }) => {
  return (
    <div
      className={
        index % 2 === 0 ? "col-sm-6 pic-left-block" : "col-sm-6 pic-right-block"
      }
    >
      <div className={isReport ? "backoffice-user pic-block" : "pic-block"}>
        <LazyLoad
          height={200}
          once={true}
          offset={[-200, 0]}
          placeholder={<Loader />}
        >
          <img src={user.profileUrl} alt={"pic-1"} />
        </LazyLoad>
        <div className="name-wrapper">
          <div className="username">{user.username}</div>
          <div className="name">{user.name}</div>
          {user.isSubscribe ? (
            <button
              className="filled_button"
              id={user.id}
              onClick={handleSubscribed}
            >
              {Translations.profile_community_right_sidebar.Subscribe}
            </button>
          ) : (
            <button
              className="blue_button"
              id={user.id}
              onClick={handleSubscribed}
            >
              {Translations.profile_community_right_sidebar.Subscribed}
            </button>
          )}
        </div>
        {user && isReport && <ReportCard item={user} />}
      </div>
    </div>
  );
};

UserCardBody.propTypes = {
  user: PropTypes.object.isRequired,
  handleSubscribed: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isReport: PropTypes.bool
};

export default UserCardBody;
