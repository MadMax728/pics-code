import React from "react";
import propTypes from "prop-types";

const UserCardBody = ({ user, index, handleSubscribed }) => {
  return (
    <div
      className={
        index % 2 === 0 ? "col-sm-6 pic-left-block" : "col-sm-6 pic-right-block"
      }
    >
      <div className="pic-block">
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
      </div>
    </div>
  );
};

UserCardBody.propTypes = {
  user: propTypes.object.isRequired,
  handleSubscribed: propTypes.func.isRequired,
  index: propTypes.number.isRequired
};

export default UserCardBody;
