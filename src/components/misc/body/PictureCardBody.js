import React from "react";
import PropTypes from "prop-types";
import ReportCard from "../ReportCard";

const PictureCardBody = ({ pic, index, isReport }) => {
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
      {pic && isReport && (
        <ReportCard
          item={pic}
        />
      )}
    </div>
  );
};

PictureCardBody.propTypes = {
  pic: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isReport: PropTypes.bool
};

export default PictureCardBody;
