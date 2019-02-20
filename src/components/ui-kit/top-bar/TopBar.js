import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";
import { connect } from "react-redux";
import {
  SubscriberTooltip,
  SubscribedTooltip,
  RenderToolTips
} from "../../common";
import {
  getFollowUserList,
  addReport,
  blockUserRequest,
  unblockUserRequest,
  getUser,
  getDashboard
} from "../../../actions";
import { SubscribeList } from "../subscribe-list";
import { ThreeDots, UserProfileImage, Button } from "../../ui-kit";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockId: this.props.items.blockId,
      isReported: !!this.props.items.isReported
    };
  }

  render() {
    const { items, handeleShare } = this.props;
    return (
      <div>
        <div className="user_info">
          <UserProfileImage
            item={items.userProfile ? items.userProfile : images.crop_pic}
            userName={items.username ? items.username : "Username"}
          />
          <div className="user-details no-padding-right padding-l-10">
            <div className="bg-white padding-25 user_details">
              <div className="user_name">
                {items.username ? items.username : "Username"}
              </div>
              {/* is Private Profile */}
              {/* {items.length !== 0 && items.private && (
                <img src={images.tick} alt="tick" className="tick" />
              )}
              {items.length !== 0 && items.private && (
                <span className="profile-type">
                  {Translations.top_bar.private_profile}
                </span>
              )} */}
              {items.length !== 0 && items.settings && (
                <div className="settings">
                  <div
                    className="share-wrapr"
                    onClick={handeleShare}
                    onKeyDown={handeleShare}
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
                  <div
                    className="share-wrapr"
                    onClick={handeleShare}
                    onKeyDown={this.handleKeyDown}
                    role="button"
                    tabIndex="0"
                  >
                    <img src={images.share} alt="share" />
                  </div>
                  <div className="tooltip-dot">
                    <ThreeDots
                      id={`topbar-${items.userid}`}
                      role="button"
                      dataTip="tooltip"
                      dataClass="tooltip-wrapr"
                      /* eslint-disable */
                      getContent={() => this.renderDotTips(items.userid)}
                      effect="solid"
                      delayHide={500}
                      delayShow={500}
                      delayUpdate={500}
                      place={"left"}
                      border
                      type={"light"}
                    />
                  </div>
                </div>
              )}
              <div className="clearfix" />
              {items.length !== 0 && items.slots.map(this.renderSlots)}
              <div className="clearfix" />
              {items.length !== 0 && items.btnSlots.map(this.renderButtonSlots)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  componentWillReceiveProps = nextProps => {
    if (
      this.props.usersData.BlockRequestResult !==
      nextProps.usersData.BlockRequestResult
    ) {
      this.getUserInfo();
      this.renderDotTips(nextProps.items.userid);
    }
  };

  renderReportTips = (type, userid, username) => {
    if (type !== "Posts") {
      if (type === "Subscribers") {
        return (
          <SubscriberTooltip type={type} userId={userid} username={username} />
        );
      } else if (type === "Subscribed") {
        return (
          <SubscribedTooltip type={type} userId={userid} username={username} />
        );
      }
    }
  };

  renderSlots = slot => {
    const userIsLoading = this.props.userDataByUsername.isLoading;
    return (
      <div className={slot.className} key={`slot-${slot.name}`}>
        <SubscribeList
          id={`slot-${slot.name}`}
          role="button"
          dataTip=""
          dataClass="tooltip-wrapr"
          /* eslint-disable */ getContent={() =>
            this.renderReportTips(slot.name, slot.userid, slot.username)
          }
          effect="solid"
          delayHide={10}
          delayShow={250}
          delayUpdate={250}
          place={"left"}
          border={true}
          type={"light"}
          value={slot.val}
          valueName={slot.name}
        />
      </div>
    );
  };

  renderButtonSlots = btnSlot => {
    const userIsLoading = this.props.userDataByUsername.isLoading;
    return (
      <div className={btnSlot.className} key={`btnSlot-${btnSlot.name}`}>
        <div className="clearfix" />
        <Button
          className={btnSlot.btnActiveClassName}
          id={btnSlot.userid}
          onClick={btnSlot.handeleEvent}
          disabled={userIsLoading}
          text={btnSlot.btnText}
        />
      </div>
    );
  };

  handleReportUser = e => {
    const { items } = this.props;
    const data = {
      typeContent: "User",
      typeId: e.target.id,
      title: items.username
    };
    this.props.addReport(data).then(() => {
      if (
        this.props.reportedContentData &&
        !this.props.reportedContentData.error
      ) {
        console.log(this.props.reportedContentData.addReport.isReported);
        this.getUserInfo();
        this.getUserData();
        this.renderDotTips(this.props.items.userid);
        this.setState({
          isReported: this.props.reportedContentData.addReport.isReported
        });
      }
    });
  };

  getUserInfo = () => {
    const data = { username: this.props.items.username };
    this.props.getUser(data).then(() => {
      if (
        this.props.userDataByUsername &&
        this.props.userDataByUsername.user &&
        this.props.userDataByUsername.user.data
      ) {
        // success
      }
    });
  };

  getUserData = () => {
    this.props.getDashboard("users", "").then(() => {
      if (this.props.usersList) {
        this.setState({ usersList: this.props.usersList });
      }
    });
  };

  handleBlock = e => {
    const { items } = this.props;
    const errors = {};
    const blockId = this.state.blockId;
    if (!blockId) {
      const requestData = { following: items.userid, isBlock: true };
      this.props.blockUserRequest(requestData).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          // error
        } else if (this.props.usersData.BlockRequestResult) {
          this.getUserInfo();
          this.getUserData();
          this.renderDotTips(this.props.items.userid);
          this.setState({
            blockId: this.props.usersData.BlockRequestResult.id
          });
        }
      });
    } else {
      this.props.unblockUserRequest(blockId).then(() => {
        if (
          this.props.usersData.error &&
          this.props.usersData.error.status === 400
        ) {
          // error
        } else if (this.props.usersData.isUnblock) {
          this.getUserInfo();
          this.getUserData();
          this.renderDotTips(this.props.items.userid);
          this.setState({ blockId: "" });
        }
      });
    }
  };

  renderDotTips = id => {
    const tooltipIsLoading = this.props.usersData.isLoading;

    let BlockTitle = Translations.tool_tips.block;
    let ReportTitle = Translations.tool_tips.report_user;
    if (this.state.blockId) {
      BlockTitle = Translations.tool_tips.unblock;
    } else {
      BlockTitle = Translations.tool_tips.block;
    }

    if (this.state.isReported) {
      ReportTitle = Translations.tool_tips.report_user;
    } else {
      ReportTitle = Translations.tool_tips.unreport_user;
    }
    const reportTips = [
      { name: ReportTitle, handleEvent: this.handleReportUser },
      { name: BlockTitle, handleEvent: this.handleBlock }
    ];
    return (
      <RenderToolTips
        items={reportTips}
        id={id ? id : "0"}
        isLoading={tooltipIsLoading}
      />
    );
  };
}

const mapStateToProps = state => ({
  usersData: state.usersData,
  reportedContentData: state.reportedContentData,
  userDataByUsername: state.userDataByUsername
});

const mapDispatchToProps = {
  getFollowUserList,
  addReport,
  blockUserRequest,
  unblockUserRequest,
  getUser,
  getDashboard
};

TopBar.propTypes = {
  handeleShare: PropTypes.func,
  items: PropTypes.any,
  handleModalInfoShow: PropTypes.any,
  getFollowUserList: PropTypes.func,
  usersData: PropTypes.any,
  userDataByUsername: PropTypes.any,
  addReport: PropTypes.func,
  reportedContentData: PropTypes.any,
  blockUserRequest: PropTypes.func,
  unblockUserRequest: PropTypes.func,
  getUser: PropTypes.func,
  userDataByUsername: PropTypes.any,
  getDashboard: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
