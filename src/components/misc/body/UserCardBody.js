import React from "react";
import PropTypes from "prop-types";
import ReportCard from "../ReportCard";
import LazyLoad from "react-lazyload";
import { Loader, ThreeDots } from "../../ui-kit";
import { Translations } from "../../../lib/translations";

const UserCardBody = ({ user, index, handleSubscribed, isReport, isBackOffice, renderReportTips }) => {
  return (
    <div
      className={
        index % 2 === 0 ? "col-sm-6 pic-left-block" : "col-sm-6 pic-right-block"
      }
    >
      <div className={isReport ? "backoffice-user pic-block" : "pic-block"}>
        <LazyLoad
          height={200}
          once
          offset={[-200, 0]}
          placeholder={<Loader />}
        >
          <img src={user.profileUrl} alt={"pic-1"} />
        </LazyLoad>
        <div className="name-wrapper">
          <div className="username">{user.username}</div>
          <div className="name">{user.name}</div>
          {isBackOffice &&
            <div className="show_more_options">
              <ThreeDots
                id={`report-${user.id}`}
                role="button"
                dataTip="tooltip"
                dataClass="tooltip-wrapr"
                getContent={renderReportTips}
                effect="solid"
                delayHide={500}
                delayShow={500}
                delayUpdate={500}
                place={"left"}
                border
                type={"light"}
              />
            </div>
          }
          {!isBackOffice && user.isSubscribe && (
              <button
                className="filled_button"
                id={user.username}
                onClick={handleSubscribed}
              >
                {Translations.profile_community_right_sidebar.Subscribed}
              </button>
            )
          }
            {!isBackOffice && !user.isSubscribe && (
            <button
              className="blue_button"
              id={user.username}
              onClick={handleSubscribed}
            >
              {Translations.profile_community_right_sidebar.Subscribe}
            </button>
          )}
        </div>
        {user && isReport && <ReportCard item={user} />}
      </div>
    </div>
  );
};

UserCardBody.propTypes = {
  user: PropTypes.object.isRequired,
  handleSubscribed: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isReport: PropTypes.bool,
  isBackOffice: PropTypes.bool,
  renderReportTips: PropTypes.any
};

export default UserCardBody;