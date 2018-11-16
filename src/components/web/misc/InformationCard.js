import React from "react";
import propTypes from "prop-types";

const InformationCard = ({ item }) => {
  return (
    <div className="feed_description padding-10">
      <div className="normal_title">{item.title}</div>
      <div className="col-sm-6 no-padding">
        <div className="info_wrapper">
          <span className="normal_title">Start: </span>
          <span className="secondary_title">{item.start}</span>
        </div>
        <div className="info_wrapper">
          <span className="normal_title">Procedure: </span>
          <span className="secondary_title"> {item.procedure} </span>
        </div>
        <div className="info_wrapper">
          <span className="normal_title">Target group: </span>
          <span className="secondary_title">{item.target_group}</span>
        </div>
      </div>
      <div className="col-sm-6 no-padding">
        <div className="info_wrapper">
          <span className="normal_title">End: </span>
          <span className="secondary_title">{item.end}</span>
        </div>
        <div className="info_wrapper">
          <span className="normal_title">Type: </span>
          <span className="secondary_title">{item.type}</span>
        </div>
        <div className="info_wrapper">
          <span className="normal_title">Applications: </span>
          <span className="secondary_title">{item.applications}</span>
        </div>
      </div>
      <hr />
      <div className="col-sm-6 no-padding">
        <div className="info_wrapper">
          <span className="normal_title">Offer: </span>
          <span className="secondary_title">{item.offer}</span>
        </div>
        <div className="info_wrapper">
          <span className="normal_title">Inquiry: </span>
          <span className="secondary_title">{item.inquiry}</span>
        </div>
      </div>
      <div className="col-sm-6 no-padding">
        <div className="info_wrapper">
          <span className="normal_title">Offer Tag: </span>
          <span className="secondary_title">{item.offer_tag}</span>
        </div>
        <div className="info_wrapper">
          <span className="normal_title">Inquiry Tag: </span>
          <span className="secondary_title">{item.inquiry_tag}</span>
        </div>
      </div>
    </div>
  );
};

InformationCard.propTypes = {
  item: propTypes.object.isRequired
};

export default InformationCard;
