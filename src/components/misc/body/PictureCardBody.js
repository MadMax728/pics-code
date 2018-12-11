import React from "react";
import PropTypes from "prop-types";

const PictureCardBody = ({ pic, index }) => {
  return (
    <div
      className={
        index % 2 ? "col-sm-6 pic-right-block" : "col-sm-6 pic-left-block"
      }
    >
      <div className="pic-block">
        <img src={pic.image} alt={pic.image} />
        <div className="name-wrapper">
          <div className="username">User name</div>
          <div className="name">{pic.name}</div>
        </div>
      </div>
    </div>
  );
};

PictureCardBody.propTypes = {
  pic: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default PictureCardBody;
