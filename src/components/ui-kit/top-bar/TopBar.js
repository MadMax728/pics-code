import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as images from "../../../lib/constants/images";
import * as routes from "../../../lib/constants/routes";
import { Translations } from "../../../lib/translations";
import { connect } from "react-redux";
import { SubscriberTooltip, SubscribedTooltip, RenderToolTips } from "../../common";
import { getFollowUserList, addReport } from "../../../actions";
import { SubscribeList } from "../subscribe-list";
import { ThreeDots } from "../../ui-kit";
import { Loader } from "../loading-indicator";

const handleKeyDown = () => {};

class TopBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
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
        />
        <span> {slot.name}</span>
        <div className="clearfix" />
        <button
          className={slot.btnActiveClassName}
          id={slot.userid}
          onClick={slot.handeleEvent}
          disabled={userIsLoading}
        >
          {slot.btnText}
        </button>
      </div>
    );
  };

  handleReportUser = (e) => {
    const  { items } = this.props;
    const data = {
      typeContent: "User",
      typeId: e.target.id,
      title: items.username
    }    
    this.props.addReport(data).then(()=> {
      if(this.props.reportedContentData && !this.props.reportedContentData.error && this.props.reportedContentData.addReport.success) {
        // console.log(this.props.reportedContentData.addReport.success);
      }
    });
  }
  
  handleBlock = (e) => {
    console.log("handleBlock");
  }

  renderDotTips = (id) => {
    const reportTips = [
      {
        name: Translations.tool_tips.report_user,
        handleEvent: this.handleReportUser
      },
      {
        name: Translations.tool_tips.block,
        handleEvent: this.handleBlock
      }
    ];
    return <RenderToolTips items={reportTips} id={id? id : "0"} />;
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
              <div className="user_name">
                {items.username ? items.username : "Username"}
              </div>
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
              )}
              <div className="clearfix" />
              {items.length !== 0 && items.slots.map(this.renderSlots)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usersData: state.usersData,
  reportedContentData: state.reportedContentData
});

const mapDispatchToProps = {
  getFollowUserList,
  addReport
};

TopBar.propTypes = {
  handeleShare: PropTypes.func,
  items: PropTypes.any,
  handleModalInfoShow: PropTypes.any,
  getFollowUserList: PropTypes.func,
  usersData: PropTypes.any,
  userDataByUsername: PropTypes.any,
  addReport: PropTypes.func,
  reportedContentData: PropTypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
