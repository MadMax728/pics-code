import React from "react";
import PropTypes from "prop-types";
import * as images from "./../../lib/constants/images";
import Comments from "../web/templates/information/Comments";
import { Translations } from "../../lib/translations";
import { DateFormat } from "../Factory";
import FeedHeader from "./headers/FeedHeader";
import { ImageItem, VideoItem, ThreeDots } from "../ui-kit";
import * as enumerations from "../../lib/constants/enumerations";

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
    const favorite_icon = campaignDetails.isSelfLike
        ? images.blue_heart
        : images.feed_like;

    return (
        <div className="information-wrapper ht100">
            <div className="info-inner-wrapper col-xs-12 padd-15">
                <h3 className="no-padding no-margin">
                    {campaignDetails.title}
                </h3>
                <div className="text">
                    <div dangerouslySetInnerHTML={{__html: campaignDetails.description}} />
                </div>
                <div className="info-img">
                    {campaignDetails.typeContent &&
                        campaignDetails.typeContent.toLowerCase() === enumerations.mediaTypes.image && (
                            <ImageItem item={campaignDetails.mediaUrl} isOtherCardExist={false}/>
                        )}
                    {campaignDetails.typeContent &&
                        campaignDetails.typeContent.toLowerCase() === enumerations.mediaTypes.video && (
                            <VideoItem id={campaignDetails.id} item={campaignDetails.mediaUrl}/>
                    )}
                </div>
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
                    <FeedHeader 
                        id={campaignDetails.id} 
                        isSelfLike={campaignDetails.isSelfLike}
                        userName={campaignDetails.userName}
                        image={campaignDetails.profileImage} 
                        title={campaignDetails.title} 
                        category={campaignDetails.category} 
                        handleFavorite={handleFavorite} 
                    />
                    <div className="feed_content col-xs-12">
                        <div className="feed_description col-xs-12">
                            <div className="col-sm-6 no-padding">
                                <div className="info_wrapper">
                                    <span className="normal_title">Start: </span>
                                    <span className="secondary_title">
                                        {DateFormat(campaignDetails.startDate, Translations.date_format.date, true)}
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
                                        {DateFormat(campaignDetails.endDate, Translations.date_format.date, true)}
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
                                        {campaignDetails.applications}
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
    handleComment: PropTypes.func
};

export default CampaignDetailsCard;