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
import { SubscribeToolTips } from "../../common";
import { getFollowUserList } from "../../../actions";

const handleKeyDown = () => {};

class TopBar extends Component {
  constructor(props) {
    super(props);
  }

  handleSubscriptionModal = e => {
    if (e.target.id !== "Posts") {
      this.props.handleModalInfoShow(modalType.subscribe, { id: e.target.id });
    }
  };

  renderReportTips = type => {
    if (type !== "Posts") {
      const userId = this.props.items.userid;
      if (type === "Subscriber") {
        type = "followings";
      } else if (type === "Subscribed") {
        type = "followers";
      } else {
        type = "followings";
      }
      console.log(type);
      if (userId && type) {
        // const userRequestData = { id: userId, type: type };
        // this.props.getFollowUserList(userRequestData).then(() => {
        //   if (
        //     this.props.usersData.error &&
        //     this.props.usersData.error.status === 400
        //   ) {
        //     // error
        //   } else if (this.props.usersData.userList) {
        //     const selectedTypeUserList = this.props.usersData.userList;
        //     console.log(selectedTypeUserList);
        return <SubscribeToolTips items={users_list} id={type} />;
        //   }
        // });
      }
    }
  };

  render() {
    const { items, handeleShare } = this.props;
    return (
      <div>
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
              {items.length !== 0 &&
                items.slots.map(slot => (
                  <div className={slot.className} key={slot.name}>
                    <span
                      className="size-20"
                      id={slot.name}
                      data-for={slot.name}
                      role="button"
                      data-tip=""
                      data-class="tooltip-wrapr"
                    >
                      {slot.val}
                    </span>
                    <span> {slot.name}</span>
                    <div className="clearfix" />
                    <button
                      className={slot.btnActiveClassName}
                      onClick={slot.handeleEvent}
                    >
                      {slot.btnText}
                    </button>
                    <ToolTip
                      id={slot.name}
                      getContent={slot.handleCountEvent}
                      effect="solid"
                      delayHide={500}
                      delayShow={500}
                      delayUpdate={500}
                      place={"bottom"}
                      border={true}
                      type={"light"}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
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
