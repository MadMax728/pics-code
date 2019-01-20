import React from "react";
import PropTypes from "prop-types";
import * as images from "../../../lib/constants/images";

const FeedHeader = ({
    id,
    image,
    title,
    userName,
    category,
    isSelfLike,
    handleFavorite
}) => {
    const favorite_icon = isSelfLike
        ? images.blue_heart
        : images.feed_like;
    const profileImage = image || images.image;
    return (
        <div className="feed_header">
            <div className="no-padding profile_image">
                <img
                    src={profileImage}
                    alt="circle-img-1"
                    className="img-circle img-responsive"
                />
            </div>
            <div className="col-sm-9 col-xs-7">
                <div className="normal_title">{title}</div>
                <div className="secondary_title">
                    {userName}
                </div>
                {
                    category && (
                        <div className="grey_title">{category}</div>
                    )
                }
            </div>
            {
                handleFavorite && id && (
                    <div className="col-sm-2 col-xs-2 like_wrapper">
                        <img
                            src={favorite_icon}
                            alt="like-1"
                            className="pull-right"
                            role="presentation"
                            onClick={handleFavorite}
                            id={id}
                            onKeyDown={handleFavorite}
                        />
                    </div>
                )
            }
        </div>
    );
}


FeedHeader.propTypes = {
    id: PropTypes.any,
    image: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    title: PropTypes.string,
    category: PropTypes.string,
    isSelfLike: PropTypes.bool,
    handleFavorite: PropTypes.func,
};

export default FeedHeader;
