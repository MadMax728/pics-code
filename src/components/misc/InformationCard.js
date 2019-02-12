import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";
import { Translations } from "../../lib/translations";
import * as routes from "../../lib/constants/routes";
import { DateFormat } from "../Factory";

const InformationCard = ({ item, type }) => {
  const selectedUserType = "creator";
  return (
    <Link to={`${routes.BASE_CAMPAIGN_INFORMATION_ROUTE}${item.id}`}>
      <div className="feed_description padding-10">
        {type && type === "campaign" && (
          <div className="normal_title">{item.title}</div>
        )}
        {(!type || type !== "campaign") && (
          <div className="normal_title">{item.title}</div>
        )}
        <div className="col-sm-6 no-padding">
          <div className="info_wrapper">
            <span className="normal_title">
              {Translations.campaign_details.start}:{" "}
            </span>
            <span className="secondary_title">
              {moment.unix(item.startDate).format("MMMM Do YYYY")}
            </span>
          </div>

          {item && item.userType !== selectedUserType && (
            <div className="info_wrapper">
              <span className="normal_title">
                {Translations.campaign_details.procedure}:{" "}
              </span>
              <span className="secondary_title">{item.procedure}</span>
            </div>
          )}

          {item && item.userType !== selectedUserType && (
            <div className="info_wrapper">
              <span className="normal_title">
                {Translations.campaign_details.applications}:{" "}
              </span>
              <span className="secondary_title">
                {item.applicationCount ? item.applicationCount : "0"}
              </span>
            </div>
          )}
        </div>
        <div className="col-sm-6 no-padding">
          <div className="info_wrapper">
            <span className="normal_title">
              {Translations.campaign_details.end}:{" "}
            </span>
            <span className="secondary_title">
              {moment.unix(item.endDate).format("MMMM Do YYYY")}
            </span>
          </div>

          {item && item.userType !== selectedUserType && (
            <div className="info_wrapper">
              <span className="normal_title">
                {Translations.campaign_details.type}:{" "}
              </span>
              <span className="secondary_title">{item.typeContent}</span>
            </div>
          )}

          {item && item.target_group && (
            <div className="info_wrapper">
              <span className="normal_title">
                {Translations.campaign_details.target_group}:{" "}
              </span>
              <span className="secondary_title">
                {item.target_group ? item.target_group : "Male"}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

InformationCard.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string
};

export default InformationCard;
