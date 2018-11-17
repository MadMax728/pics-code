import React from "react";
import propTypes from "prop-types";

const UserCardBody = ({ user, index }) => {
  return (
    <div
      className={
        index % 2 === 0 ? "col-sm-6 pic-left-block" : "col-sm-6 pic-right-block"
      }
    >
      <div className="pic-block">
        <img src={user.image} alt={"pic-1"} />
        <div className="name-wrapper">
          <div className="username">{user.username}</div>
          <div className="name">{user.name}</div>
          <button className="filled_button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

UserCardBody.propTypes = {
  user: propTypes.object.isRequired,
  index: propTypes.object.isRequired
};

export default UserCardBody;
