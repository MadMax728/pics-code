import React from "react";
import propTypes from "prop-types";
import { Translations } from "../../../lib/translations";

const UserCard = ({ item }) => {
  return (
    <div className="feed_description padding-10">
      <div className="normal_title">{item.title}</div>
      <div className="col-sm-6 no-padding">
        <div className="info_wrapper">
          <span className="normal_title">
            {Translations.create_campaigns.start}:{" "}
          </span>
          <span className="secondary_title">{item.startDate}</span>
        </div>
        <div className="info_wrapper">
          <span className="normal_title">
            {Translations.create_campaigns.procedure}:{" "}
          </span>
          <span className="secondary_title">{item.procedure}</span>
        </div>
        <div className="info_wrapper">
          <span className="normal_title">
            {Translations.create_campaigns.target_group}:{" "}
          </span>
          <span className="secondary_title">{item.target_group}</span>
        </div>
      </div>
      <div className="col-sm-6 no-padding">
        <div className="info_wrapper">
          <span className="normal_title">
            {Translations.create_campaigns.end}:{" "}
          </span>
          <span className="secondary_title">{item.endDate}</span>
        </div>
        <div className="info_wrapper">
          <span className="normal_title">
            {Translations.create_campaigns.type}:{" "}
          </span>
          <span className="secondary_title">{item.typeContent}</span>
        </div>
        <div className="info_wrapper">
          <span className="normal_title">
            {Translations.create_campaigns.applications}:{" "}
          </span>
          <span className="secondary_title">{item.applications}</span>
        </div>
      </div>
      <hr />
      <div className="col-sm-6 no-padding">
        <div className="info_wrapper">
          <span className="normal_title">
            {Translations.create_campaigns.offer}:{" "}
          </span>
          <span className="secondary_title">{item.offers}</span>
        </div>
        <div className="info_wrapper">
          <span className="normal_title">
            {Translations.create_campaigns.inquiry}:{" "}
          </span>
          <span className="secondary_title">{item.inquiry}</span>
        </div>
      </div>
      <div className="col-sm-6 no-padding">
        <div className="info_wrapper">
          <span className="normal_title">
            {Translations.create_campaigns.offer_tag}:{" "}
          </span>
          <span className="secondary_title">{item.inquiryTag}</span>
        </div>
        <div className="info_wrapper">
          <span className="normal_title">
            {Translations.create_campaigns.inquiry_tag}:{" "}
          </span>
          <span className="secondary_title">{item.inquiryTag}</span>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  item: propTypes.object.isRequired
};

export default UserCard;
