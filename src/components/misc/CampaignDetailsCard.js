import React from "react";
import PropTypes from "prop-types";
import * as images from "./../../lib/constants/images";
import * as routes from "./../../lib/constants/routes";
import Comments from "../web/templates/information/Comments";
import { Translations } from "../../lib/translations";
import moment from "moment";
import { ThreeDots } from "../ui-kit";

const CampaignDetailsCard = ({ 
    campaignDetails,
    isComments, 
    comments,
    handleApplyParticipant,
    handleCommentsSections,
    handleFavorite,
    handleOnKeyDown,
    renderReportTips,
    handleComment
}) => {
    const profile_route = campaignDetails.isOwner
    ? routes.NEWS_FEED_ROUTE
    : `${routes.NEWS_FEED_ROUTE}/${campaignDetails.userName}`;
  const favorite_icon = campaignDetails.isSelfLike
    ? images.blue_heart
    : images.feed_like;

  return (
    <div className="information-wrapper ht100">
        <div className="info-inner-wrapper col-xs-12">
        <div className="info-main-title paddindLeft0">
            {campaignDetails.title}
        </div>
        <div className="text">{campaignDetails.description}</div>
        <img src={campaignDetails.profileImage} alt={"information"} />
        <div className="text paddTop20">
        </div>
        {campaignDetails.isOwner ||
        campaignDetails.isAlreadyParticipant ? (
            ""
        ) : (
            <button
            className="filled_button"
            onClick={handleApplyParticipant}
            id={campaignDetails.id}
            >
            {Translations.apply_campaign}
            </button>
        )}
        <div className="feed_wrapper">
            <div className="feed_header">
            <div className="no-padding profile_image">
                <img
                src={images.image}
                alt="circle-img-1"
                className="img-circle img-responsive"
                />
            </div>
            <div className="col-sm-9 col-xs-7">
                <div className="normal_title">{campaignDetails.title}</div>
                <div className="secondary_title">
                {campaignDetails.userName}
                </div>
                <div className="grey_title">{campaignDetails.category}</div>
            </div>
            <div className="col-sm-2 col-xs-2 like_wrapper">
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
            </div>
            <div className="feed_content col-xs-12">
            <div className="feed_description col-xs-12">
                <div className="col-sm-6 no-padding">
                <div className="info_wrapper">
                    <span className="normal_title">Start: </span>
                    <span className="secondary_title">
                    {moment(campaignDetails.startDate).format(
                        "MMMM Do YYYY"
                    )}
                    </span>
                </div>
                <div className="info_wrapper">
                    <span className="normal_title">Procedure: </span>
                    <span className="secondary_title">
                    {campaignDetails.procedure}
                    </span>
                </div>
                <div className="info_wrapper">
                    <span className="normal_title">Target group: </span>
                    <span className="secondary_title">
                    {campaignDetails.target_group}
                    </span>
                </div>
                </div>
                <div className="col-sm-6 no-padding">
                <div className="info_wrapper">
                    <span className="normal_title">End: </span>
                    <span className="secondary_title">
                    {moment(campaignDetails.endDate).format(
                        "MMMM Do YYYY"
                    )}
                    </span>
                </div>
                <div className="info_wrapper">
                    <span className="normal_title">Type: </span>
                    <span className="secondary_title">
                    {campaignDetails.typeContent}
                    </span>
                </div>
                <div className="info_wrapper">
                    <span className="normal_title">Applications: </span>
                    <span className="secondary_title">
                    {campaignDetails.applications
                        ? campaignDetails.applications
                        : "22/22"}
                    </span>
                </div>
                </div>
            </div>
            <hr />
            <div className="feed_description col-xs-12">
                <div className="col-sm-6 no-padding">
                <div className="info_wrapper">
                    <span className="normal_title">
                    {Translations.create_campaigns.offer}:{" "}
                    </span>
                    <span className="secondary_title">
                    {campaignDetails.offerTagList &&
                        campaignDetails.offerTagList[0].offerTagName}
                    </span>
                </div>
                <div className="info_wrapper">
                    <span className="normal_title">
                    {Translations.create_campaigns.inquiry}:{" "}
                    </span>
                    <span className="secondary_title">
                    {campaignDetails.inquiryTagList &&
                        campaignDetails.inquiryTagList[0].inquiryTagName}
                    </span>
                </div>
                </div>
                <div className="col-sm-6 no-padding">
                <div className="info_wrapper">
                    <span className="normal_title">
                    {Translations.create_campaigns.offer_tag}:{" "}
                    </span>
                    <span className="secondary_title">
                    {campaignDetails.offerTagList &&
                        campaignDetails.offerTagList[0].offerTagName}
                    </span>
                </div>
                <div className="info_wrapper">
                    <span className="normal_title">
                    {Translations.create_campaigns.inquiry_tag}:{" "}
                    </span>
                    <span className="secondary_title">
                    {campaignDetails.inquiryTagList &&
                        campaignDetails.inquiryTagList[0].inquiryTagName}
                    </span>
                </div>
                </div>
            </div>
            </div>
            <div className="feed_footer margin-t-15 margin-b-15 padding-lr-30">
            <div className="messages">
                <span className="count">
                {campaignDetails.commentCount}
                </span>
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
            {/* Comments Section */}
            {isComments && (
            <Comments
                campaign={campaignDetails}
                campaignComments={comments}
                campeignId={campaignDetails.id}
                typeContent={campaignDetails.typeContent}
                handleComment={handleComment}
                totalCommentsCount={comments.length}
                isReport={false}
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
    handleComment: PropTypes.func
};

export default CampaignDetailsCard;
