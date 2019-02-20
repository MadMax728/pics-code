import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as images from "./../../lib/constants/images";
import * as routes from "./../../lib/constants/routes";
import Comments from "../web/templates/information/Comments";
import { Translations } from "../../lib/translations";
import FeedHeader from "./headers/FeedHeader";
import { InfoWrapperItem, DescriptionItem } from "./items";
import { ImageItem, VideoItem, ThreeDots, Button } from "../ui-kit";
import * as enumerations from "../../lib/constants/enumerations";
import moment from "moment";
import { DateFormat } from "./../Factory";

const CampaignDetailsCard = ({
  campaignDetails,
  isComments,
  comments,
  handleApplyParticipant,
  handleCommentsSections,
  handleFavorite,
  handleOnKeyDown,
  renderReportTips,
  handleComment,
  handeleShare
}) => {
  const favorite_icon = campaignDetails.isSelfLike
    ? images.blue_heart
    : images.feed_like;
  const profile_route = campaignDetails.isOwner
    ? routes.NEWS_FEED_ROUTE
    : `${routes.NEWS_FEED_ROUTE}/${campaignDetails.userName}`;
  const selectedUserType = "creator";
  return (
    <div className="information-wrapper ht100">
      <div className="info-inner-wrapper col-xs-12 padd-15">
        <h3 className="no-padding no-margin capitalize">{campaignDetails.title}</h3>
        <div className="no-padding titles_wrapper">
          <div className="secondary_title">
            {campaignDetails.location &&
              campaignDetails.location.address &&
              campaignDetails.location.address}
          </div>
          {campaignDetails.category && (
            <div className="grey_title">
              {DateFormat(
                campaignDetails.createdAt,
                Translations.date_format.campaign_post_date_format,
                true
              )}{" "}
              {Translations.in} {campaignDetails.category[0].categoryName}
            </div>
          )}
        </div>
        <div className="margin-top-25">
          {campaignDetails.typeContent &&
            campaignDetails.typeContent.toLowerCase() ===
              enumerations.mediaTypes.image && (
              <ImageItem
                item={campaignDetails.mediaUrl}
                classNames={`embed-responsive embed-responsive-16by9`}
                userName={campaignDetails.userName}
                isOtherCardExist={false}
              />
            )}
          {campaignDetails.typeContent &&
            campaignDetails.typeContent.toLowerCase() ===
              enumerations.mediaTypes.video && (
              <VideoItem
                id={campaignDetails.id}
                item={campaignDetails.mediaUrl}
              />
          )}
        </div>
        <div className="margin-top-25">
          <DescriptionItem desc={campaignDetails.description} />
        </div>
        <div className="text paddTop20" />
          {campaignDetails.isOwner ? (
            ""
          ) : campaignDetails.isAlreadyParticipant &&
            campaignDetails.userType !== selectedUserType ? (
            <Button 
              className="blue_button" 
              disabled 
              text={Translations.campaign_details.campaign_success_apply}
            />
          ) : (
            <Button
              className="filled_button"
              onClick={handleApplyParticipant}
              id={campaignDetails.id}
              text={campaignDetails && campaignDetails.userType === selectedUserType
                ? Translations.campaign_details.send_message
                : Translations.campaign_details.apply_campaign}
            />
          )}
        <div className="feed_wrapper">
          <FeedHeader
            id={campaignDetails.id}
            isSelfLike={campaignDetails.isSelfLike}
            userName={campaignDetails.userName}
            image={campaignDetails.profileImage}
            title={campaignDetails.title}
            category={
              campaignDetails.category &&
              campaignDetails.category[0] &&
              campaignDetails.category[0].categoryName
            }
            handleFavorite={handleFavorite}
          />
          <div className="feed_content col-xs-12">
            <div className="feed_description col-xs-12">
              {campaignDetails &&
                campaignDetails.userType !== selectedUserType && (
                  <div className="block-divide">
                    <div className="col-sm-6 no-padding">
                      <InfoWrapperItem
                        title={Translations.campaign_details.procedure}
                        value={campaignDetails.procedure}
                      />

                      <InfoWrapperItem
                        title={Translations.campaign_details.start}
                        value={moment
                          .unix(campaignDetails.startDate)
                          .format(Translations.campaign_post_date_format.date)}
                      />
                    </div>
                    <div className="col-sm-6 no-padding">
                      <InfoWrapperItem
                        title={Translations.campaign_details.type}
                        value={campaignDetails.typeContent}
                      />

                      <InfoWrapperItem
                        title={Translations.campaign_details.end}
                        value={moment
                          .unix(campaignDetails.endDate)
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
                      campaignDetails && campaignDetails.target_group
                        ? campaignDetails.target_group
                        : Translations.target_group.female_and_male
                    }
                  />

                  {campaignDetails && campaignDetails.offers && (
                    <InfoWrapperItem
                      title={Translations.campaign_details.offer}
                      value={
                        campaignDetails.offers &&
                        campaignDetails.offersList &&
                        campaignDetails.offersList[0].offerName &&
                        campaignDetails.offersList[0].offerName
                      }
                    />
                  )}
                </div>

                <div className="col-sm-6 no-padding">
                  {campaignDetails &&
                  campaignDetails.userType !== selectedUserType ? (
                    <InfoWrapperItem
                      title={Translations.campaign_details.applications}
                      value={
                        campaignDetails && campaignDetails.applicationCount
                          ? campaignDetails.applicationCount
                          : "0"
                      }
                    />
                  ) : (
                    <InfoWrapperItem
                      title={Translations.campaign_details.followers}
                      value={
                        campaignDetails && campaignDetails.subscribers
                          ? campaignDetails.subscribers
                          : "0"
                      }
                    />
                  )}

                  {campaignDetails && campaignDetails.inquiry && (
                    <InfoWrapperItem
                      title={Translations.campaign_details.inquiry}
                      value={
                        campaignDetails.inquiry &&
                        campaignDetails.inquiryList &&
                        campaignDetails.inquiryList[0].inquiryName &&
                        campaignDetails.inquiryList[0].inquiryName
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="feed_footer margin-t-15 margin-b-15 padding-lr-30">
            <div className="messages">
              <span className="count">{campaignDetails.commentCount}</span>
              <img
                src={images.comment}
                alt={"feed_msg"}
                role="presentation"
                id={campaignDetails.createdBy}
                onKeyDown={handleOnKeyDown}
                onClick={handleCommentsSections}
              />
            </div>
            <div className="likes">
              <span className="count">{campaignDetails.likeCount}</span>
              <img
                src={favorite_icon}
                alt="like-1"
                className="pull-right"
                role="presentation"
                onClick={handleFavorite}
                id={campaignDetails.id}
                onKeyDown={handleOnKeyDown}
              />
            </div>
            <div className="show_more_options">
              <div
                className="share-wrapr"
                onClick={handeleShare}
                onKeyDown={handeleShare}
                role="button"
                tabIndex="0"
              >
                <img src={images.share} alt="share" />
              </div>
              <ThreeDots
                id="report"
                role="button"
                dataTip="tooltip"
                dataClass="tooltip-wrapr"
                getContent={() => renderReportTips()}
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
        </div>
      </div>

      <div className="feed_wrapper">
        <div className="feed-comment">
          {isComments && (
            <Comments
              campaign={campaignDetails}
              campaignComments={comments}
              campeignId={campaignDetails.id}
              typeContent={campaignDetails.typeContent}
              handleComment={handleComment}
              totalCommentsCount={comments.length}
              isReport={false}
              userImage={campaignDetails.profileImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

CampaignDetailsCard.propTypes = {
  campaignDetails: PropTypes.any,
  isComments: PropTypes.bool,
  comments: PropTypes.any,
  handleApplyParticipant: PropTypes.func,
  handleCommentsSections: PropTypes.func,
  handleFavorite: PropTypes.func,
  handleOnKeyDown: PropTypes.func,
  renderReportTips: PropTypes.func,
  handleComment: PropTypes.func,
  handeleShare: PropTypes.func
};

export default CampaignDetailsCard;
