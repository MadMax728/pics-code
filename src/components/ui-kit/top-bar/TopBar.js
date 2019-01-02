import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";
import { modalType } from "../../../lib/constants/enumerations";
import { connect } from "react-redux";
import { ToolTip } from "../../ui-kit";
import { users_list } from "../../../mock-data/users-list";
import { SubscriberTooltip, SubscribedTooltip } from "../../common";
import { getFollowUserList } from "../../../actions";
import { SubscribeList } from "../subscribe-list";

const handleKeyDown = () => {};

class TopBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  renderReportTips = (type, userid) => {
    console.log(userid);
    if (type !== "Posts") {
      if (type === "Subscriber") {
        return <SubscriberTooltip type={type} userId={userid} />;
      } else if (type === "Subscribed") {
        return <SubscribedTooltip type={type} userId={userid} />;
      }
    }
  };

  renderSlots = slot => {
    return (
      <div className={slot.className} key={`slot-${slot.name}`}>
        <SubscribeList
          id={`slot-${slot.name}`}
          role="button"
          dataTip="tooltip"
          dataClass="tooltip-wrapr" /* eslint-disable */
          getContent={() => this.renderReportTips(slot.name, slot.userid)}
          effect="solid"
          delayHide={10}
          delayShow={250}
          delayUpdate={250}
          place={"left"}
          border={true}
          type={"light"}
          value={slot.val}
        />
        <span> {slot.name}</span>
        <div className="clearfix" />
        <button className={slot.btnActiveClassName} onClick={slot.handeleEvent}>
          {slot.btnText}
        </button>
      </div>
    );
  };

  render() {
    const { items, handeleShare } = this.props;
    return (
      <div>
        {items ? (
          <div className="user_info">
            <div className="user-image bg-white no-padding">
              <img
                src={items.userProfile ? items.userProfile : images.crop_pic}
                width="100%"
                alt="profile"
              />
            </div>
            <div className="user-details no-padding-right padding-l-10">
              <div className="bg-white padding-25 user_details">
                <div className="user_name">{items.username}</div>
                {items.length !== 0 && items.private && (
                  <img src={images.tick} alt="tick" className="tick" />
                )}
                {items.length !== 0 && items.private && (
                  <span className="profile-type">
                    {Translations.top_bar.private_profile}
                  </span>
                )}
                {items.length !== 0 && items.settings && (
                  <div className="settings">
                    <div
                      className="share-wrapr"
                      onClick={handeleShare}
                      onKeyDown={handleKeyDown}
                      role="button"
                      tabIndex="0"
                    >
                      <img src={images.share} alt="share" />
                    </div>
                    <Link to={routes.SETTINGS_EDIT_PROFILE_ROUTE}>
                      <img src={images.settings} alt="settings" />
                    </Link>
                  </div>
                )}
                {items.length !== 0 && items.more && (
                  <div className="settings">
                    <img src={images.more} alt="more" />
                  </div>
                )}
                <div className="clearfix" />
                {items.length !== 0 && items.slots.map(this.renderSlots)}
              </div>
            </div>
          </div>
        ) : (
          <div className="user_info">
            <div className="user-image bg-white no-padding">
              <img src={images.crop_pic} width="100%" alt="profile" />
            </div>
            <div className="user-details no-padding-right padding-l-10">
              <div className="bg-white padding-25 user_details">
                <div className="user_name">{"Username"}</div>
                <img src={images.tick} alt="tick" className="tick" />
                <span className="profile-type">
                  {Translations.top_bar.private_profile}
                </span>
                <div className="settings">
                  <img src={images.more} alt="more" />
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usersData: state.usersData
});

const mapDispatchToProps = {
  getFollowUserList
};

TopBar.propTypes = {
  handeleShare: PropTypes.func,
  items: PropTypes.any,
  handleModalInfoShow: PropTypes.any,
  getFollowUserList: PropTypes.func,
  usersData: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
