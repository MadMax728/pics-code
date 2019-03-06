import React from "react";
import PropTypes from "prop-types";
import { DescriptionItem, InfoWrapperItem } from "../../misc/items";
import { ImageItem, VideoItem, UserTitleItem, UserImageItem } from "../items";
import { Translations } from "../../../lib/translations";
import * as images from "../../../lib/constants/images";
import * as enumerations from "../../../lib/constants/enumerations";
import { DateFormat } from "../../Factory";
import moment from "moment";

const propTypes = {
  userInfo: PropTypes.object,
  form: PropTypes.object,
  isFor: PropTypes.any
};

const RightSidebarModal = ({ userInfo, form, isFor }) => {
  const todayDate = new Date();
  const selectedUserType = "creator";
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
            category={
              form.categoryName
                ? form.categoryName
                : Translations.create_ads.category
            }
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
            {isFor === "Ads" && (
              <div className="preview-ad-link">
                <a
                  href={form.insertLink}
                  target="_blank"
                  className="more-strip zIndex0"
                  rel="noopener noreferrer"
                >
                  {form.actionName
                    ? form.actionName
                    : Translations.create_ads.ad}
                </a>
              </div>
            )}
          </div>
          <div className="feed_description padding-15">
            <span className="secondary_title">
              <DescriptionItem desc={form.description} />
            </span>
            {/* Campaign Details */}
            {isFor === "Campaigns" && (
              <div>
                {userInfo && userInfo.userType !== selectedUserType && (
                  <div className="block-divide">
                    <div className="col-sm-6 no-padding">
                      <InfoWrapperItem
                        title={Translations.campaign_details.procedure}
                        value={form.procedure}
                      />

                      <InfoWrapperItem
                        title={Translations.campaign_details.start}
                        value={moment().format(
                          Translations.campaign_post_date_format.date
                        )}
                      />
                    </div>
                    <div className="col-sm-6 no-padding">
                      <InfoWrapperItem
                        title={Translations.campaign_details.type}
                        value={form.typeContent}
                      />

                      <InfoWrapperItem
                        title={Translations.campaign_details.end}
                        value={moment()
                          .add(7, "days")
                          .format(Translations.campaign_post_date_format.date)}
                      />
                    </div>
                  </div>
                )}

                <div className="creator-block">
                  <div className="col-sm-6 no-padding">
                    <InfoWrapperItem
                      title={Translations.campaign_details.target_group}
                      value={
                        form && form.target_group
                          ? form.target_group
                          : Translations.target_group.female_and_male
                      }
                    />

                    {form && form.offers && (
                      <InfoWrapperItem
                        title={Translations.campaign_details.offer}
                        value={form.offers && form.offerName && form.offerName}
                      />
                    )}
                  </div>

                  <div className="col-sm-6 no-padding">
                    {userInfo && userInfo.userType !== selectedUserType ? (
                      <InfoWrapperItem
                        title={Translations.campaign_details.applications}
                        value={
                          form && form.applicationCount
                            ? form.applicationCount
                            : "0"
                        }
                      />
                    ) : (
                      <InfoWrapperItem
                        title={Translations.campaign_details.followers}
                        value={
                          form && form.subscribers ? form.subscribers : "0"
                        }
                      />
                    )}

                    {form && form.inquiry && (
                      <InfoWrapperItem
                        title={Translations.campaign_details.inquiry}
                        value={
                          form.inquiry && form.inquiryName && form.inquiryName
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <div />
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
