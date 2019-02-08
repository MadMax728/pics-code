import React from "react";
import PropTypes from "prop-types";
import { DescriptionItem } from "../../misc/items";
import { ImageItem, VideoItem, UserTitleItem, UserImageItem } from "../items";
import { Translations } from "../../../lib/translations";
import * as images from "../../../lib/constants/images";
import * as enumerations from "../../../lib/constants/enumerations";
import { DateFormat } from "../../Factory";

const propTypes = {
  userInfo: PropTypes.object,
  form: PropTypes.object,
  isFor: PropTypes.any
};

const RightSidebarModal = ({ userInfo, form, isFor }) => {
  const todayDate = new Date();
  return (
    <div className="col-sm-7 disp-flex create-campaign-feed-wrapper">
      <div className="feed_wrapper">
        <div className="feed_header">
          <UserImageItem
            item={userInfo ? userInfo.profileUrl : images.image}
            customClass={`padding-rl-10`}
          />
          <UserTitleItem
            date={DateFormat(todayDate, Translations.date_format.date, true)}
            title={form.title}
            username={userInfo ? userInfo.username : ""}
          />
          <div className="like_wrapper">
            <img src={images.blue_heart} alt="like1" className="pull-right" />
          </div>
        </div>
        <div className="feed_content">
          <div className="feed_image">
            <div className="embed-responsive embed-responsive-16by9">
              <div className="img-responsive embed-responsive-item">
                {form.typeContent &&
                  form.typeContent.toLowerCase() ===
                    enumerations.mediaTypes.video && (
                    <VideoItem item={form.video} id={form.id || ""} />
                  )}
                {(!form.typeContent ||
                  (form.typeContent &&
                    form.typeContent.toLowerCase() ===
                      enumerations.mediaTypes.image)) && (
                  <ImageItem
                    item={form.image || ""}
                    userName={userInfo ? userInfo.username : ""}
                  />
                )}
              </div>
            </div>
            {isFor === "ads" && (
              <div className="preview-ad-link">
                <a
                  href={form.insertLink}
                  target="_blank"
                  className="more-strip zIndex0"
                  rel="noopener noreferrer"
                >
                  {"Ad"}
                  {/* To Do - Action Name */}
                  {/* {form.callToAction ? form.callToAction : "Ad"} */}
                </a>
              </div>
            )}
          </div>
          <div className="feed_description padding-15">
            <span className="secondary_title">
              <DescriptionItem desc={form.description} />
            </span>
          </div>
        </div>
        <div className="feed_footer padding-15">
          <div className="messages">
            <span className="count">0</span>
            <img src={images.feed_msg} alt="profile1" />
          </div>
          <div className="likes">
            <span className="count">0</span>
            <img src={images.feed_like} alt="profile2" />
          </div>
          <div className="show_more_options">
            <div>• • •</div>
          </div>
        </div>
      </div>
    </div>
  );
};

RightSidebarModal.propTypes = propTypes;

export default RightSidebarModal;
