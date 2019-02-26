import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";
import { Translations } from "../../lib/translations";
import * as routes from "../../lib/constants/routes";
// import { DateFormat } from "../Factory";

const InformationCard = ({ item, type }) => {
  const selectedUserType = "creator";
  return (
    <Link
      to={`${routes.BASE_CAMPAIGN_INFORMATION_ROUTE}${item.userType}${"/"}${
        item.id
      }`}
    >
      <div className="feed_description padding-10">
        {type && type === "campaign" && (
          <div className="normal_title">{item.title}</div>
        )}
        {(!type || type !== "campaign") && (
          <div className="normal_title">{item.title}</div>
        )}

        {item && item.userType !== selectedUserType && (
          <div className="block-divide">
            <div className="col-sm-6 no-padding">
              <div className="info_wrapper">
                <span className="normal_title">
                  {Translations.campaign_details.procedure}:{" "}
                </span>
                <span className="secondary_title">{item.procedure}</span>
              </div>
              <div className="info_wrapper">
                <span className="normal_title">
                  {Translations.campaign_details.start}:{" "}
                </span>
                <span className="secondary_title">
                  {moment(item.startDate)
                    .format(Translations.campaign_post_date_format.date)}
                </span>
              </div>
            </div>
            <div className="col-sm-6 no-padding">
              <div className="info_wrapper">
                <span className="normal_title">
                  {Translations.campaign_details.type}:{" "}
                </span>
                <span className="secondary_title">{item.typeContent}</span>
              </div>

              <div className="info_wrapper">
                <span className="normal_title">
                  {Translations.campaign_details.end}:{" "}
                </span>
                <span className="secondary_title">
                  {moment(item.endDate)
                    .format(Translations.campaign_post_date_format.date)}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="creator-block">
          <div className="col-sm-6 no-padding">
            <div className="info_wrapper">
              <span className="normal_title">
                {Translations.campaign_details.target_group}:{" "}
              </span>
              <span className="secondary_title">
                {item && item.target_group
                  ? item.target_group
                  : Translations.target_group.female_and_male}
              </span>
            </div>

            {item.offers && (
              <div className="info_wrapper">
                <span className="normal_title">
                  {Translations.campaign_details.offer}:{" "}
                </span>
                <span className="secondary_title">
                  {item.offers && item.offers}
                </span>
              </div>
            )}
          </div>

          <div className="col-sm-6 no-padding">
            {item && item.userType !== selectedUserType ? (
              <div className="info_wrapper">
                <span className="normal_title">
                  {Translations.campaign_details.applications}:{" "}
                </span>
                <span className="secondary_title">
                  {item.applicationCount ? item.applicationCount : "0"}
                </span>
              </div>
            ) : (
              <div className="info_wrapper">
                <span className="normal_title">
                  {Translations.campaign_details.followers}:{" "}
                </span>
                <span className="secondary_title">
                  {item.followers ? item.followers : "0"}
                </span>
              </div>
            )}

            {item.inquiry && (
              <div className="info_wrapper">
                <span className="normal_title">
                  {Translations.campaign_details.inquiry}:{" "}
                </span>
                <span className="secondary_title">
                  {item.inquiry && item.inquiry}
                </span>
              </div>
            )}
          </div>
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
