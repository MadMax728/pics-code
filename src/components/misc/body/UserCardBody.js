import React from "react";
import PropTypes from "prop-types";
import ReportCard from "../ReportCard";

const UserCardBody = ({ user, index, handleSubscribed, isReport }) => {
  return (
    <div
      className={
        index % 2 === 0 ? "col-sm-6 pic-left-block" : "col-sm-6 pic-right-block"
      }
    >
      <div className={isReport? "backoffice-user pic-block" : "pic-block" }>
        <img src={user.profileUrl} alt={"pic-1"}/>
        <div className="name-wrapper">
          <div className="username">{user.username}</div>
          <div className="name">{user.name}</div>
          {user.isSubscribe ? (
            <button
              className="filled_button"
              id={user.id}
              onClick={handleSubscribed}
            >
              Subscribe
                    </button>
          ) : (
              <button
                className="blue_button"
                id={user.id}
                onClick={handleSubscribed}
              >
                Subscribed
                    </button>
            )}
        </div>
        {user && isReport && (
          <ReportCard
            item={user}
          />
        )}
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
