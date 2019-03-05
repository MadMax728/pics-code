import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classnames from "classnames";
import ReportCard from "../ReportCard";
import { Loader, ThreeDots, UserCardImageItem, Button } from "../../ui-kit";
import { Translations } from "../../../lib/translations";
import * as routes from "../../../lib/constants/routes";

class UserCardBody extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: this.props.user
    };
  }

  render() {
    const {
      index,
      handleSubscribe,
      handleUnSubscribe,
      isReport,
      isBackOffice,
      renderReportTips,
      isLoading,
      subscribeId
    } = this.props;
    const { user } = this.state;
    const pic_block = classnames("col-sm-6", {
      "pic-left-block": index % 2 === 0,
      "pic-right-block": index % 2 !== 0
    });

    return (
      <div className={`${pic_block}`}>
        <div className={isReport ? "backoffice-user pic-block" : "pic-block"}>
          <Link to={`${routes.ABOUT_ROUTE}/${user.username}`}>
            <UserCardImageItem item={user.profileUrl} />
          </Link>
          <div className="name-wrapper">
            <Link to={`${routes.ABOUT_ROUTE}/${user.username}`}>
              <div className="username">{user.username}</div>
            </Link>
            {isBackOffice && (
              <div className="show_more_options user">
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
            )}
            {!isBackOffice &&
              (subscribeId === "" ? (
                <Button
                  className={`blue_button`}
                  id={user.id}
                  onClick={handleSubscribe}
                  disabled={isLoading}
                  text={Translations.profile_community_right_sidebar.Subscribe}
                />
              ) : (
                <Button
                  className={`filled_button`}
                  id={subscribeId}
                  onClick={handleUnSubscribe}
                  disabled={isLoading}
                  text={Translations.profile_community_right_sidebar.Subscribed}
                />
              ))}
          </div>
          {user && isReport && <ReportCard item={user} />}
        </div>
      </div>
    );
  }
}

UserCardBody.propTypes = {
  user: PropTypes.object.isRequired,
  handleSubscribe: PropTypes.func.isRequired,
  handleUnSubscribe: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isReport: PropTypes.bool,
  isBackOffice: PropTypes.bool,
  renderReportTips: PropTypes.any,
  isLoading: PropTypes.any,
  subscribeId: PropTypes.any
};

export default UserCardBody;
