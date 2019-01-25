import React from "react";
import PropTypes from "prop-types";
import { Translations } from "../../lib/translations";
import moment from "moment";

const UserCard = ({ item }) => {
  return (
    <div className="feed_description padding-10">
      <div className="normal_title">{item.title}</div>
      <div className="col-sm-6 no-padding">
        <div className="info_wrapper">
          <span className="normal_title">
            {Translations.create_campaigns.start}:{" "}
          </span>
          <span className="secondary_title">
            {moment.unix(item.startDate).format("MMMM Do YYYY")}
          </span>
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
          <span className="secondary_title">
            {item.target_group ? item.target_group : "Male"}
          </span>
        </div>
      </div>
      <div className="col-sm-6 no-padding">
        <div className="info_wrapper">
          <span className="normal_title">
            {Translations.create_campaigns.end}:{" "}
          </span>
          <span className="secondary_title">
            {moment.unix(item.endDate).format("MMMM Do YYYY")}
          </span>
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
          <span className="secondary_title">
            {item.applications ? item.applications : "22/22"}
          </span>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default UserCard;
