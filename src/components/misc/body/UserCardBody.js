import React, { Component } from "react";
import PropTypes from "prop-types";
import ReportCard from "../ReportCard";
import LazyLoad from "react-lazyload";
import { Loader, ThreeDots, UserCardImageItem, Button, UserImageItem } from "../../ui-kit";
import { Translations } from "../../../lib/translations";
import * as images from "../../../lib/constants/images";

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
      handleSubscribed,
      isReport,
      isBackOffice,
      renderReportTips,
      isLoading,
      isSubscribeStatus
    } = this.props;
    const { user } = this.state;
    let classNameText = "filled_button";
    let btnText = Translations.profile_community_right_sidebar.Subscribed;
    // if (user.isPending) {
    //   btnText = Translations.profile_community_right_sidebar.Pending;
    //   classNameText = "filled_button";
    // } else
    if (isSubscribeStatus) {
      if (isSubscribeStatus === "subscribe") {
        btnText = Translations.profile_community_right_sidebar.Subscribed;
        classNameText = "filled_button";
      } else if (isSubscribeStatus === "unsubscribe") {
        btnText = Translations.profile_community_right_sidebar.Subscribe;
        classNameText = "blue_button";
      }
    } else if (user.isSubscribe) {
      btnText = Translations.profile_community_right_sidebar.Subscribed;
      classNameText = "filled_button";
    } else {
      btnText = Translations.profile_community_right_sidebar.Subscribe;
      classNameText = "blue_button";
    }

    const actionButton = {
      className: classNameText,
      userId: user.username,
      handleActionClick: handleSubscribed,
      btnText,
      isLoading
    };

    return (
      <div
        className={
          index % 2 === 0
            ? "col-sm-6 pic-left-block"
            : "col-sm-6 pic-right-block"
        }
      >
        <div className={isReport ? "backoffice-user pic-block" : "pic-block"}>
          <UserCardImageItem item={user.profileUrl}></UserCardImageItem>
          <div className="name-wrapper">
            <div className="username">{user.username}</div>
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
            {!isBackOffice && (
              <Button
                className={actionButton.className}
                id={actionButton.userId}
                onClick={actionButton.handleActionClick}
                disabled={actionButton.isLoading}
                text={actionButton.btnText}
              />
            )}
          </div>
          {user && isReport && <ReportCard item={user} />}
        </div>
      </div>
    );
  }
}

UserCardBody.propTypes = {
  user: PropTypes.object.isRequired,
  handleSubscribed: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isReport: PropTypes.bool,
  isBackOffice: PropTypes.bool,
  renderReportTips: PropTypes.any,
  isLoading: PropTypes.any,
  isSubscribeStatus: PropTypes.any
};

export default UserCardBody;
